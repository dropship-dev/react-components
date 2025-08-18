"use client";

import { Calendar as CalendarIcon } from "lucide-react";
import * as React from "react";
import { DateRange } from "react-day-picker";
import moment from "moment-timezone";

import { cn } from "../lib/utils";
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
  timezone?: string; // IANA TZ, vd: "America/Los_Angeles"
  defaultValues?: RangeDatePickerDefaultValues;
}

/* ---------- Helpers TZ-safe ---------- */
const nowTz = (tz: string) => moment.tz(tz);
const startOfDayTz = (d: Date, tz: string) =>
  moment.tz(d, tz).startOf("day").toDate();
const endOfDayTz = (d: Date, tz: string) =>
  moment.tz(d, tz).endOf("day").milliseconds(0).toDate();

const rangeFromPreset = (
  tz: string,
  preset?: RangeDatePickerDefaultValues,
): DateRange => {
  const m = nowTz(tz);
  switch (preset) {
    case RangeDatePickerDefaultValues.TODAY:
      return {
        from: m.clone().startOf("day").toDate(),
        to: m.clone().endOf("day").milliseconds(0).toDate(),
      };
    case RangeDatePickerDefaultValues.THIS_WEEK:
      return {
        from: m.clone().startOf("isoWeek").toDate(),
        to: m.clone().endOf("isoWeek").milliseconds(0).toDate(),
      };
    case RangeDatePickerDefaultValues.THIS_MONTH:
      return {
        from: m.clone().startOf("month").toDate(),
        to: m.clone().endOf("month").milliseconds(0).toDate(),
      };
    case RangeDatePickerDefaultValues.THIS_YEAR:
      return {
        from: m.clone().startOf("year").toDate(),
        to: m.clone().endOf("year").milliseconds(0).toDate(),
      };
    default:
      return { from: undefined, to: undefined };
  }
};

export default function RangeDatePicker(props: IRangeDatePicker) {
  const {
    date,
    setDate,
    timezone = "America/Los_Angeles",
    defaultValues,
  } = props;

  const [presetLabel, setPresetLabel] = React.useState<string>(
    defaultValues ?? "",
  );

  const [open, setOpen] = React.useState(false);
  const [datePicker, setDatePicker] = React.useState<DateRange | undefined>(
    () => rangeFromPreset(timezone, defaultValues),
  );

  React.useEffect(() => {
    if (!defaultValues) return;
    const r = rangeFromPreset(timezone, defaultValues);
    setDatePicker(r);
    if (r.from && r.to) {
      setDate({
        from: startOfDayTz(r.from, timezone),
        to: endOfDayTz(r.to, timezone),
      });
    } else {
      setDate(undefined);
    }
  }, [defaultValues, timezone, setDate]);

  React.useEffect(() => {
    setPresetLabel(defaultValues ?? "");
  }, [defaultValues]);

  const convertRangeToTzDayBounds = React.useCallback(
    (r?: DateRange): DateRange | undefined => {
      if (!r?.from && !r?.to) return undefined;
      if (r?.from && !r?.to) {
        return {
          from: startOfDayTz(r.from, timezone),
          to: endOfDayTz(r.from, timezone),
        };
      }
      if (r?.from && r?.to) {
        return {
          from: startOfDayTz(r.from, timezone),
          to: endOfDayTz(r.to, timezone),
        };
      }
      return undefined;
    },
    [timezone],
  );

  const triggerLabel = React.useMemo(() => {
    if (presetLabel) return presetLabel;
    const fmt = (d?: Date) =>
      d
        ? d
            .toLocaleDateString("en-GB", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })
            .replaceAll("-", "/")
        : "";
    if (datePicker?.from && datePicker?.to)
      return `${fmt(datePicker.from)} - ${fmt(datePicker.to)}`;
    if (datePicker?.from) return fmt(datePicker.from);
    return "All time";
  }, [presetLabel, datePicker]);

  return (
    <div className={cn("grid gap-2")}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger>
          <div
            id="date"
            className={cn(
              "w-fit justify-start text-left font-normal px-4 py-2 rounded-[6px] border border-gray-300 flex items-center h-10 whitespace-nowrap",
              open && "shadow-[#DBDDFF] shadow-[0_0_0_4px]",
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {triggerLabel}
          </div>
        </PopoverTrigger>

        <PopoverContent className="w-auto p-0" align="start">
          <div className="flex rounded-[10px]">
            {/* Presets */}
            <div className="flex flex-col px-4 py-3 border-r border-gray-100 min-w-[160px]">
              <PresetItem
                label="Today"
                onClick={() => {
                  setPresetLabel("Today");
                  setDatePicker(
                    rangeFromPreset(
                      timezone,
                      RangeDatePickerDefaultValues.TODAY,
                    ),
                  );
                }}
              />
              <PresetItem
                label="This week"
                onClick={() => {
                  setPresetLabel("This week");
                  setDatePicker(
                    rangeFromPreset(
                      timezone,
                      RangeDatePickerDefaultValues.THIS_WEEK,
                    ),
                  );
                }}
              />
              <PresetItem
                label="This month"
                onClick={() => {
                  setPresetLabel("This month");
                  setDatePicker(
                    rangeFromPreset(
                      timezone,
                      RangeDatePickerDefaultValues.THIS_MONTH,
                    ),
                  );
                }}
              />
              <PresetItem
                label="This year"
                onClick={() => {
                  setPresetLabel("This year");
                  setDatePicker(
                    rangeFromPreset(
                      timezone,
                      RangeDatePickerDefaultValues.THIS_YEAR,
                    ),
                  );
                }}
              />
              <PresetItem
                label="All time"
                onClick={() => {
                  setPresetLabel("All time");
                  setDatePicker({ from: undefined, to: undefined });
                }}
              />
            </div>

            <div>
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={datePicker?.from}
                selected={datePicker}
                onSelect={(r) => {
                  setPresetLabel("");
                  setDatePicker(r);
                }}
                numberOfMonths={2}
                className="border-b border-gray-300"
              />
              <div className="flex justify-end items-center gap-4 px-4 py-3">
                <Button
                  content="Cancel"
                  color="gray"
                  hierarchy="secondary"
                  size="md"
                  onClick={() => {
                    setOpen(false);
                    setDatePicker(date);
                    setPresetLabel(defaultValues ?? presetLabel);
                  }}
                />
                <Button
                  content="Apply"
                  color="blue"
                  hierarchy="primary"
                  size="md"
                  onClick={() => {
                    setOpen(false);
                    const normalized = convertRangeToTzDayBounds(datePicker);
                    setDate(normalized);
                    if (datePicker?.from && !datePicker?.to) {
                      setDatePicker({
                        from: datePicker.from,
                        to: datePicker.from,
                      });
                    }
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

function PresetItem({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="w-full text-gray-900 hover:bg-primary-25 hover:text-primary-500 px-4 py-[10px] rounded-[6px] text-textSM cursor-pointer"
    >
      {label}
    </div>
  );
}
