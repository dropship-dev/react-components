"use client";

import * as React from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ComboBox/components/popover";
import { Calendar } from "../RangeDatePicker/components/calendar";
import { Button } from "..";
import "moment-timezone";

interface IDatePicker {
  date: Date | undefined;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  timezone?: string;
}

const DatePicker = (props: IDatePicker) => {
  const { date, setDate, timezone } = props;
  const moment = require("moment-timezone");
  const [value, setValue] = React.useState<Date | undefined>(
    moment()
      .tz(timezone ?? "America/Los_Angeles")
      .startOf("day")
      .toDate(),
  );

  React.useEffect(() => {
    setDate(
      moment(value)
        .tz(timezone ?? "America/Los_Angeles")
        .startOf("day")
        .toDate(),
    );
  }, [value]);

  return (
    <Popover>
      <PopoverTrigger
        asChild
        style={{ borderRadius: "6px" }}
        className="w-full border-[1px] border-gray-300 rounded-[6px] h-10 flex items-center justify-start px-4 py-2"
      >
        <div>
          <Button
            content={
              <div className="flex flex-row items-center w-full float-left">
                <CalendarIcon className="mr-2 h-4 w-4" />
                <div className="text-textSM font-normal">
                  {date
                    ? date.toLocaleDateString().replaceAll("-", "/")
                    : "Pick a date"}
                </div>
              </div>
            }
          />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={value}
          onSelect={setValue}
          initialFocus
          className="z-50"
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
