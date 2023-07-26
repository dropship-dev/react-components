import * as React from "react";

import {
  Select as SelectData,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/select";
import { cva } from "class-variance-authority";

import { cn } from "../lib/utils";
import { Label } from "..";

export default function Select(props: {
  data: { value: string; label: string }[];
  placeholder?: string;
  width?: string;
  icon?: React.ReactNode;
  label?: string;
  onSelected?: (value: string) => void;
  defaultValue?: string;
  size?: "xs" | "sm" | "md";
}) {
  const {
    data,
    placeholder,
    width,
    icon,
    label,
    onSelected,
    defaultValue,
    size,
  } = props;

  return (
    <SelectData onValueChange={onSelected} defaultValue={defaultValue}>
      {label && (
        <Label
          content={label}
          size="textSM"
          fontWeight={"medium"}
          className="text-gray-500"
        />
      )}
      <SelectTrigger
        className={`${width} ${
          size === "xs" ? "h-10" : size === "md" ? "h-12" : "h-11"
        } border-gray-300 py-2 border-[1px] border-solid rounded-[8px] gap-[8px] flex justify-start focus:outline-none`}
      >
        {icon}
        <div className="w-full flex flex-row justify-between text-[14px]">
          <SelectValue placeholder={placeholder ?? ""} />
        </div>
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          {data.map((item) => (
            <SelectItem value={item.value} key={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </SelectData>
  );
}
