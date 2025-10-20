"use client";

import { Calendar as CalendarIcon } from "lucide-react";
import * as React from "react";
import { DateRange } from "react-day-picker";

import { cn } from "../lib/utils";

import moment from "moment-timezone";
import { Button } from "..";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ComboBox/components/popover";
import { Calendar } from "./components/calendar";

export enum RangeDatePickerDefaultValues {
  TODAY = "Today",
  THIS_WEEK = "This week",
  THIS_MONTH = "This month",
  THIS_YEAR = "This year",
  ALL_TIME = "All time",
}
interface IRangeDatePicker {
  date: DateRange | undefined;
  setDate: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
  timezone?: string;
  defaultValues?: RangeDatePickerDefaultValues;
}

const toLocalDate = (momentObj: moment.Moment): Date => {
  const dateStr = momentObj.format("YYYY-MM-DD");
  return new Date(dateStr + "T00:00:00");
};

const generateDateRangeFromDefaultValue = (
  timezoneDate: string,
  defaultValue?: RangeDatePickerDefaultValues,
): DateRange => {
  const now = moment().tz(timezoneDate);

  switch (defaultValue) {
    case RangeDatePickerDefaultValues.TODAY:
      const today = toLocalDate(now);
      return { from: today, to: today };

    case RangeDatePickerDefaultValues.THIS_WEEK:
      return {
        from: toLocalDate(now.clone().startOf("isoWeek")),
        to: toLocalDate(now.clone().endOf("isoWeek")),
      };

    case RangeDatePickerDefaultValues.THIS_MONTH:
      return {
        from: toLocalDate(now.clone().startOf("month")),
        to: toLocalDate(now.clone().endOf("month")),
      };

    case RangeDatePickerDefaultValues.THIS_YEAR:
      return {
        from: toLocalDate(now.clone().startOf("year")),
        to: toLocalDate(now.clone().endOf("year")),
      };

    default:
      return { from: undefined, to: undefined };
  }
};

export default function RangeDatePicker(props: IRangeDatePicker) {
  const { date, setDate, timezone, defaultValues } = props;
  const [firstLoad, setFirstLoad] = React.useState<boolean>(true);
  const timezoneDate = timezone ?? "America/Los_Angeles";

  const [datePicker, setDatePicker] = React.useState<DateRange | undefined>(
    generateDateRangeFromDefaultValue(timezoneDate, defaultValues),
  );

  const [open, setOpen] = React.useState<boolean>(false);

  const [valueSelected, setValueSelected] = React.useState<string>(
    defaultValues ?? "",
  );

  React.useEffect(() => {
    const dateRange = generateDateRangeFromDefaultValue(
      timezoneDate,
      defaultValues,
    );
    setDatePicker(dateRange);
  }, [defaultValues, timezoneDate]);

  React.useEffect(() => {
    if (firstLoad && !!defaultValues && !!datePicker?.from) {
      if (datePicker?.from && !datePicker?.to) {
        setDate({
          from: convertDate(datePicker?.from, "start", timezoneDate),
          to: convertDate(datePicker?.from, "end", timezoneDate),
        });
        setDatePicker({
          ...datePicker,
          to: datePicker?.from,
        });
      } else if (datePicker?.from && datePicker?.to) {
        setDate({
          from: convertDate(datePicker?.from, "start", timezoneDate),
          to: convertDate(datePicker?.to, "end", timezoneDate),
        });
      }
      setFirstLoad(false);
    }
  }, [datePicker, firstLoad, timezoneDate]);

  function convertDate(
    date: Date,
    type: "start" | "end",
    timezone: string,
  ): Date {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    const dateStr = `${year}-${month}-${day}`;

    const storeToday = moment().tz(timezone).format("YYYY-MM-DD");

    let finalDateStr = dateStr;
    if (type === "end" && dateStr > storeToday) {
      finalDateStr = storeToday;
    }

    const m = moment.tz(finalDateStr, timezone);

    if (type === "start") {
      return m.startOf("day").toDate();
    }
    return m.endOf("day").toDate();
  }

  return (
    <div className={cn("grid gap-2")}>
      <Popover open={open} onOpenChange={(open: boolean) => setOpen(open)}>
        <PopoverTrigger>
          <div
            id="date"
            className={cn(
              `flex h-10 w-fit items-center justify-start text-ellipsis whitespace-nowrap rounded-[6px] border-[1px] border-gray-300 px-4 py-2 text-left font-normal ${
                open ? "shadow-[0_0_0_4px] shadow-[#DBDDFF]" : ""
              }`,
              !datePicker && "text-muted-foreground",
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {datePicker?.from ? (
              valueSelected !== "" ? (
                valueSelected
              ) : datePicker.to ? (
                <>
                  {datePicker.from.toLocaleDateString().replaceAll("-", "/")} -{" "}
                  {datePicker.to.toLocaleDateString().replaceAll("-", "/")}
                </>
              ) : (
                <>{datePicker.from.toLocaleDateString()}</>
              )
            ) : (
              <span>All time</span>
            )}
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <div className="flex rounded-[10px]">
            <div className="flex flex-col border-r-[1px] border-gray-100 px-4 py-3">
              <div
                onClick={() => {
                  setValueSelected("Today");
                  const now = moment().tz(timezoneDate);
                  const today = toLocalDate(now);
                  setDatePicker({ from: today, to: today });
                }}
                className="w-full cursor-pointer rounded-[6px] px-4 py-[10px] text-textSM text-gray-900 hover:bg-primary-25 hover:text-primary-500"
              >
                Today
              </div>
              <div
                onClick={() => {
                  setValueSelected("This week");
                  const now = moment().tz(timezoneDate);
                  setDatePicker({
                    from: toLocalDate(now.clone().startOf("isoWeek")),
                    to: toLocalDate(now.clone().endOf("isoWeek")),
                  });
                }}
                className="w-full cursor-pointer rounded-[6px] px-4 py-[10px] text-textSM text-gray-900 hover:bg-primary-25 hover:text-primary-500"
              >
                This week
              </div>
              <div
                onClick={() => {
                  setValueSelected("This month");
                  const now = moment().tz(timezoneDate);
                  setDatePicker({
                    from: toLocalDate(now.clone().startOf("month")),
                    to: toLocalDate(now.clone().endOf("month")),
                  });
                }}
                className="w-full cursor-pointer rounded-[6px] px-4 py-[10px] text-textSM text-gray-900 hover:bg-primary-25 hover:text-primary-500"
              >
                This month
              </div>
              <div
                onClick={() => {
                  setValueSelected("This year");
                  const now = moment().tz(timezoneDate);
                  setDatePicker({
                    from: toLocalDate(now.clone().startOf("year")),
                    to: toLocalDate(now.clone().endOf("year")),
                  });
                }}
                className="w-full cursor-pointer rounded-[6px] px-4 py-[10px] text-textSM text-gray-900 hover:bg-primary-25 hover:text-primary-500"
              >
                This year
              </div>
              <div
                onClick={() => {
                  setValueSelected("");
                  setDatePicker({ from: undefined, to: undefined });
                }}
                className="w-full cursor-pointer rounded-[6px] px-4 py-[10px] text-textSM text-gray-900 hover:bg-primary-25 hover:text-primary-500"
              >
                All time
              </div>
            </div>
            <div>
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={datePicker?.from}
                selected={datePicker}
                onSelect={(range: any) => {
                  setValueSelected("");

                  if (!range) {
                    setDatePicker({ from: undefined, to: undefined });
                    return;
                  }

                  let from = range.from ?? undefined;
                  let to = range.to ?? undefined;
                  if (from && to && from > to) [from, to] = [to, from];

                  setDatePicker({ from, to });
                }}
                numberOfMonths={2}
                className="border-b-[1px] border-gray-300"
              />
              <div className="flex flex-row items-center justify-end gap-4 px-4 py-3">
                <Button
                  content="Cancel"
                  color="gray"
                  hierarchy="secondary"
                  size="md"
                  onClick={() => {
                    setOpen(false);
                    setDatePicker(date);
                  }}
                />
                <Button
                  content="Apply"
                  color="blue"
                  hierarchy="primary"
                  size="md"
                  onClick={() => {
                    setOpen(false);

                    if (datePicker?.from && !datePicker?.to) {
                      const from = convertDate(
                        datePicker.from,
                        "start",
                        timezoneDate,
                      );
                      const to = convertDate(
                        datePicker.from,
                        "end",
                        timezoneDate,
                      );

                      setDate({ from, to });
                      setDatePicker((r) => (r ? { ...r, to: r.from } : r));
                      return;
                    }

                    if (datePicker?.from && datePicker?.to) {
                      const from = convertDate(
                        datePicker.from,
                        "start",
                        timezoneDate,
                      );
                      const to = convertDate(
                        datePicker.to,
                        "end",
                        timezoneDate,
                      );
                      setDate({ from, to });
                      return;
                    }

                    setDate(undefined);
                  }}
                />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
