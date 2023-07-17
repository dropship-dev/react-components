"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "../lib/utils";
import { Button, Input } from "../";
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
  content?: string;
  onSelect?: (e: string) => void;
  onChangeValue?: (e: any) => void;
  value?: string;
  setValue?: any;
  open?: boolean;
  setOpen?: any;
  icon?: React.ReactNode;
}
export default function Combobox(props: ICombobox) {
  const { data, content, onSelect, onChangeValue, icon, open, value } = props;

  return (
    <Command>
      <Input
        iconPre={icon}
        value={value}
        placeholder={`Search ${content} ...`}
        onChange={onChangeValue}
      />
      {open && (
        <>
          <CommandEmpty>No {content} found.</CommandEmpty>
          <CommandGroup>
            {data.map((item) => (
              <CommandItem key={item.value} onSelect={onSelect}>
                {item.label}
                {/* <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === item.value ? "opacity-100" : "opacity-0"
                  )}
                /> */}
              </CommandItem>
            ))}
          </CommandGroup>
        </>
      )}
    </Command>
  );
}
