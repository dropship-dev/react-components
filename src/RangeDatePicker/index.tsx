"use client";

import * as React from "react";
import { format } from "date-fns";
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
import moment from "moment";

interface IRangeDatePicker {
  date: DateRange | undefined;
  setDate: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
}
export default function RangeDatePicker(props: IRangeDatePicker) {
  const { date, setDate } = props;
  // const [date, setDate] = React.useState<DateRange | undefined>();

  const [open, setOpen] = React.useState<boolean>(false);

  var startOfWeek = moment().startOf("week").toDate();
  var endOfWeek = moment().endOf("week").toDate();
  var startOfMonth = moment().startOf("month").toDate();
  var endOfMonth = moment().endOf("month").toDate();
  var startOfYear = moment().startOf("year").toDate();
  var endOfYear = moment().endOf("year").toDate();

  return (
    <div className={cn("grid gap-2")}>
      <Popover open={open} onOpenChange={(open) => setOpen(open)}>
        <PopoverTrigger>
          <div
            id="date"
            className={cn(
              "w-full justify-start text-left font-normal px-4 py-2 rounded-[6px] border-[1px] border-gray-300 flex items-center h-11",
              !date && "text-muted-foreground",
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "dd/MM/yyyy")} -{" "}
                  {format(date.to, "dd/MM/yyyy")}
                </>
              ) : (
                format(date.from, "dd/MM/yyyy")
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
                  setDate({
                    from: new Date(),
                    to: new Date(),
                  })
                }
                className="w-full text-gray-900 hover:bg-primary-25 hover:text-primary-500 px-4 py-[10px] rounded-[6px] text-textSM cursor-pointer"
              >
                Today
              </div>
              <div
                onClick={() =>
                  setDate({
                    from: startOfWeek,
                    to: endOfWeek,
                  })
                }
                className="w-full text-gray-900 hover:bg-primary-25 hover:text-primary-500 px-4 py-[10px] rounded-[6px] text-textSM cursor-pointer"
              >
                This week
              </div>
              <div
                onClick={() =>
                  setDate({
                    from: startOfMonth,
                    to: endOfMonth,
                  })
                }
                className="w-full text-gray-900 hover:bg-primary-25 hover:text-primary-500 px-4 py-[10px] rounded-[6px] text-textSM cursor-pointer"
              >
                This month
              </div>
              <div
                onClick={() =>
                  setDate({
                    from: startOfYear,
                    to: endOfYear,
                  })
                }
                className="w-full text-gray-900 hover:bg-primary-25 hover:text-primary-500 px-4 py-[10px] rounded-[6px] text-textSM cursor-pointer"
              >
                This year
              </div>
              <div
                onClick={() => setDate(undefined)}
                className="w-full text-gray-900 hover:bg-primary-25 hover:text-primary-500 px-4 py-[10px] rounded-[6px] text-textSM cursor-pointer"
              >
                All time
              </div>
            </div>
            <div>
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={setDate}
                numberOfMonths={2}
                className="border-b-[1px] border-gray-300"
              />
              <div className="flex justify-end items-center flex-row gap-4 px-4 py-3">
                <Button
                  content="Cancle"
                  color="gray"
                  hierarchy="secondary"
                  size="md"
                  onClick={() => {
                    setOpen(false);
                    setDate(undefined);
                  }}
                />
                <Button
                  content="Apply"
                  color="blue"
                  hierarchy="primary"
                  size="md"
                  onClick={() => setOpen(false)}
                />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
