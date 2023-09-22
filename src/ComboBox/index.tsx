"use client";

import * as React from "react";

import { Input } from "../";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "./components/command";

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
      {value !== "" && (
        <>
          <CommandEmpty>No {content} found.</CommandEmpty>
          <CommandGroup>
            {data.map((item) => (
              <CommandItem key={item.value} onSelect={onSelect}>
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </>
      )}
    </Command>
  );
}
