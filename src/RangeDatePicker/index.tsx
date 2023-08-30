"use client";

import * as React from "react";
import { format, set } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "../lib/utils";

import { Calendar } from "./components/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ComboBox/components/popover";
import { Button } from "..";
import "moment-timezone";
import moment from "moment";

interface IRangeDatePicker {
  date: DateRange | undefined;
  setDate: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
  timezone?: string;
  defaultValues?: string;
}

enum DefaultValues {
  TODAY = "Today",
  THIS_WEEK = "This week",
  THIS_MONTH = "This month",
  THIS_YEAR = "This year",
}
export default function RangeDatePicker(props: IRangeDatePicker) {
  const { date, setDate, timezone, defaultValues } = props;

  const timezoneDate = timezone ?? "America/Los_Angeles";
  // var moment = require("moment-timezone");
  // moment.tz.setDefault(timezoneDate);

  const [datePicker, setDatePicker] = React.useState<DateRange | undefined>();

  const [open, setOpen] = React.useState<boolean>(false);

  const convertTimezone = (timezone: string) => {
    const date = new Intl.DateTimeFormat("en-GB", {
      dateStyle: "full",
      timeStyle: "long",
      timeZone: timezone,
    })
      .format(new Date(moment().tz(timezone).format()))
      .split(" ");
    return date[date.length - 1];
  };

  React.useEffect(() => {
    if (defaultValues === DefaultValues.TODAY) {
      setDatePicker({
        from: new Date(
          moment().toDate().toLocaleString("en-US", { timeZone: timezoneDate }),
        ),
        to: new Date(
          moment().toDate().toLocaleString("en-US", { timeZone: timezoneDate }),
        ),
      });
    } else if (defaultValues === DefaultValues.THIS_WEEK) {
      setDatePicker({
        from: moment(new Date()).startOf("week").toDate(),
        to: moment(new Date()).endOf("week").toDate(),
      });
    } else if (defaultValues === DefaultValues.THIS_MONTH) {
      setDatePicker({
        from: moment(new Date()).startOf("month").toDate(),
        to: moment(new Date()).endOf("month").toDate(),
      });
    } else if (defaultValues === DefaultValues.THIS_YEAR) {
      setDatePicker({
        from: moment(new Date()).startOf("year").toDate(),
        to: moment(new Date()).endOf("year").toDate(),
      });
    }
    if (!!defaultValues) {
      setDate({
        from: datePicker?.from
          ? moment(datePicker?.from)
              .startOf("day")
              .toDate()
          : undefined,
        to: datePicker?.to
          ? moment(datePicker?.to)
              .endOf("day")
              .toDate()
          : undefined,
      });
    }
  }, [defaultValues]);

  function convertDate(date: Date, type: "start" | "end") {
    return new Date(
      `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${
        type === "start" ? "00:00:00" : "23:59:59"
      } ${convertTimezone(timezoneDate)}`,
    );
  }

  return (
    <div className={cn("grid gap-2")}>
      <Popover open={open} onOpenChange={(open) => setOpen(open)}>
        <PopoverTrigger>
          <div
            id="date"
            className={cn(
              "w-full justify-start text-left font-normal px-4 py-2 rounded-[6px] border-[1px] border-gray-300 flex items-center h-11",
              !datePicker && "text-muted-foreground",
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {datePicker?.from ? (
              datePicker.to ? (
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
                onClick={() =>
                  setDatePicker({
                    from: new Date(
                      moment()
                        .toDate()
                        .toLocaleString("en-US", { timeZone: timezoneDate }),
                    ),
                    to: new Date(
                      moment()
                        .toDate()
                        .toLocaleString("en-US", { timeZone: timezoneDate }),
                    ),
                  })
                }
                className="w-full text-gray-900 hover:bg-primary-25 hover:text-primary-500 px-4 py-[10px] rounded-[6px] text-textSM cursor-pointer"
              >
                Today
              </div>
              <div
                onClick={() => {
                  console.log(moment().endOf("week").toDate());

                  setDatePicker({
                    from: moment().startOf("week").toDate(),
                    to: moment().endOf("week").toDate(),
                  });
                }}
                className="w-full text-gray-900 hover:bg-primary-25 hover:text-primary-500 px-4 py-[10px] rounded-[6px] text-textSM cursor-pointer"
              >
                This week
              </div>
              <div
                onClick={() =>
                  setDatePicker({
                    from: moment(new Date()).startOf("month").toDate(),
                    to: moment(new Date()).endOf("month").toDate(),
                  })
                }
                className="w-full text-gray-900 hover:bg-primary-25 hover:text-primary-500 px-4 py-[10px] rounded-[6px] text-textSM cursor-pointer"
              >
                This month
              </div>
              <div
                onClick={() =>
                  setDatePicker({
                    from: moment(new Date()).startOf("year").toDate(),
                    to: moment(new Date()).endOf("year").toDate(),
                  })
                }
                className="w-full text-gray-900 hover:bg-primary-25 hover:text-primary-500 px-4 py-[10px] rounded-[6px] text-textSM cursor-pointer"
              >
                This year
              </div>
              <div
                onClick={() =>
                  setDatePicker({ from: undefined, to: undefined })
                }
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
                onSelect={setDatePicker}
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
                      setDate({
                        from: new Date(convertDate(datePicker?.from, "start")),
                        to: new Date(convertDate(datePicker?.from, "end")),
                      });
                      setDatePicker({
                        ...datePicker,
                        to: datePicker?.from,
                      });
                    } else if (datePicker?.from && datePicker?.to)
                      setDate({
                        from: new Date(convertDate(datePicker.from, "start")),
                        to: new Date(convertDate(datePicker?.to, "end")),
                      });
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
