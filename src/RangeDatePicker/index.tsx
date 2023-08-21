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
import moment from "moment";

interface IRangeDatePicker {
  date: DateRange | undefined;
  setDate: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
}
export default function RangeDatePicker(props: IRangeDatePicker) {
  const { date, setDate } = props;

  const [datePicker, setDatePicker] = React.useState<DateRange | undefined>();

  const [open, setOpen] = React.useState<boolean>(false);

  var startOfWeek = moment().startOf("week").toDate();
  var endOfWeek = moment().endOf("week").toDate();
  var startOfMonth = moment().startOf("month").toDate();
  var endOfMonth = moment().endOf("month").toDate();
  var startOfYear = moment().startOf("year").toDate();
  var endOfYear = moment().endOf("year").toDate();
  console.log(date);

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
                  {format(datePicker.from, "dd/MM/yyyy")} -{" "}
                  {format(datePicker.to, "dd/MM/yyyy")}
                </>
              ) : (
                format(datePicker.from, "dd/MM/yyyy")
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
                  setDatePicker({
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
                  setDatePicker({
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
                  setDatePicker({
                    from: startOfYear,
                    to: endOfYear,
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
                        from: new Date(
                          moment(datePicker?.from)
                            .startOf("day")
                            .toString(),
                        ),
                        to: new Date(
                          moment(datePicker?.from)
                            .endOf("day")
                            .toString(),
                        ),
                      });
                      setDatePicker({
                        ...datePicker,
                        to: new Date(
                          moment(datePicker?.from)
                            .endOf("day")
                            .toString(),
                        ),
                      });
                    } else
                      setDate({
                        from: datePicker?.from
                          ? new Date(
                              moment(datePicker?.from)
                                .startOf("day")
                                .toString(),
                            )
                          : undefined,
                        to: datePicker?.to
                          ? new Date(
                              moment(datePicker?.to)
                                .endOf("day")
                                .toString(),
                            )
                          : undefined,
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
