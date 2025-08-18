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

const generateDateRangeFromDefaultValue = (
  timezoneDate: string,
  defaultValue?: RangeDatePickerDefaultValues,
): DateRange => {
  const now = moment.tz(timezoneDate);

  switch (defaultValue) {
    case RangeDatePickerDefaultValues.TODAY:
      return {
        from: now.clone().startOf("day").toDate(),
        to: now.clone().endOf("day").toDate(),
      };
    case RangeDatePickerDefaultValues.THIS_WEEK:
      return {
        from: now.clone().startOf("isoWeek").toDate(), // Mon 00:00
        to: now.clone().endOf("isoWeek").toDate(), // Sun 23:59:59.000
      };
    case RangeDatePickerDefaultValues.THIS_MONTH:
      return {
        from: now.clone().startOf("month").toDate(),
        to: now.clone().endOf("month").toDate(),
      };
    case RangeDatePickerDefaultValues.THIS_YEAR:
      return {
        from: now.clone().startOf("year").toDate(),
        to: now.clone().endOf("year").toDate(),
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
          from: convertDate(datePicker?.from, "start"),
          to: convertDate(datePicker?.from, "end"),
        });
        setDatePicker({
          ...datePicker,
          to: datePicker?.from,
        });
      } else if (datePicker?.from && datePicker?.to)
        setDate({
          from: convertDate(datePicker.from, "start"),
          to: convertDate(datePicker?.to, "end"),
        });
      setFirstLoad(false);
    }
  }, [datePicker, firstLoad]);

  function convertDate(date: Date, type: "start" | "end") {
    const m = moment.tz(date, timezoneDate);
    if (type === "start") {
      return m.startOf("day").toDate();
    }
    return m.endOf("day").toDate();
  }

  return (
    <div className={cn("grid gap-2")}>
      <Popover open={open} onOpenChange={(open) => setOpen(open)}>
        <PopoverTrigger>
          <div
            id="date"
            className={cn(
              `w-fit justify-start text-left font-normal px-4 py-2 rounded-[6px] border-[1px] border-gray-300 flex items-center h-10 text-ellipsis whitespace-nowrap ${
                open ? "shadow-[#DBDDFF] shadow-[0_0_0_4px]" : ""
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
            <div className="flex flex-col px-4 py-3 border-r-[1px] border-gray-100">
              <div
                onClick={() => {
                  setValueSelected("Today");
                  const now = moment.tz(timezoneDate);
                  setDatePicker({
                    from: now.clone().startOf("day").toDate(),
                    to: now.clone().endOf("day").toDate(),
                  });
                }}
                className="w-full text-gray-900 hover:bg-primary-25 hover:text-primary-500 px-4 py-[10px] rounded-[6px] text-textSM cursor-pointer"
              >
                Today
              </div>
              <div
                onClick={() => {
                  setValueSelected("This week");
                  const now = moment.tz(timezoneDate);
                  setDatePicker({
                    from: now.clone().startOf("isoWeek").toDate(),
                    to: now.clone().endOf("isoWeek").toDate(),
                  });
                }}
                className="w-full text-gray-900 hover:bg-primary-25 hover:text-primary-500 px-4 py-[10px] rounded-[6px] text-textSM cursor-pointer"
              >
                This week
              </div>
              <div
                onClick={() => {
                  setValueSelected("This month");
                  const now = moment.tz(timezoneDate);
                  setDatePicker({
                    from: now.clone().startOf("month").toDate(),
                    to: now.clone().endOf("month").toDate(),
                  });
                }}
                className="w-full text-gray-900 hover:bg-primary-25 hover:text-primary-500 px-4 py-[10px] rounded-[6px] text-textSM cursor-pointer"
              >
                This month
              </div>
              <div
                onClick={() => {
                  setValueSelected("This year");
                  const now = moment.tz(timezoneDate);
                  setDatePicker({
                    from: now.clone().startOf("year").toDate(),
                    to: now.clone().endOf("year").toDate(),
                  });
                }}
                className="w-full text-gray-900 hover:bg-primary-25 hover:text-primary-500 px-4 py-[10px] rounded-[6px] text-textSM cursor-pointer"
              >
                This year
              </div>
              <div
                onClick={() => {
                  setValueSelected("");
                  setDatePicker({ from: undefined, to: undefined });
                }}
                className="w-full text-gray-900 hover:bg-primary-25 hover:text-primary-500 px-4 py-[10px] rounded-[6px] text-textSM cursor-pointer"
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
                onSelect={(date) => {
                  setDatePicker(date);
                  setValueSelected("");
                }}
                numberOfMonths={2}
                className="border-b-[1px] border-gray-300"
              />
              <div className="flex justify-end items-center flex-row gap-4 px-4 py-3">
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
                      const from = convertDate(datePicker.from, "start");
                      const to = convertDate(datePicker.from, "end");

                      setDate({ from, to });
                      setDatePicker((r) => (r ? { ...r, to: r.from } : r));
                      return;
                    }

                    if (datePicker?.from && datePicker?.to) {
                      const from = convertDate(datePicker.from, "start");
                      const to = convertDate(datePicker.to, "end");
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
