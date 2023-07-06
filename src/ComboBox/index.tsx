"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "../lib/utils";
import { Button } from "../";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./components/command";
import { Popover, PopoverContent, PopoverTrigger } from "./components/popover";

export interface ICombobox {
  data: { value: string; label: string }[];
  content: string;
}
export default function Combobox(props: ICombobox) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const { data, content } = props;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          className="w-full justify-between"
          content={
            <div className="flex flex-row gap-8 items-center border-[1px] border-solid border-gray-400 px-3 py-4 rounded-[6px] min-w-[200px] text-textmd font-medium">
              {value
                ? data.find((item) => item.value === value)?.label
                : `Select ${content}...`}
              <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </div>
          }
        />
      </PopoverTrigger>
      <PopoverContent className="w-[200px] px-2 py-1 text-textmd font-medium">
        <Command>
          <CommandInput placeholder={`Search ${content} ...`} className="h-9" />
          <CommandEmpty>No {content} found.</CommandEmpty>
          <CommandGroup>
            {data.map((item) => (
              <CommandItem
                key={item.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                {item.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === item.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
