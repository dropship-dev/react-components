import * as React from "react";

import {
  Select as SelectData,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/select";
import { Label } from "..";

export default function Select(props: {
  data: { value: string; label: string }[];
  placeholder?: string;
  width?: string;
  icon?: React.ReactNode;
  label?: string;
  onSelected?: (value: string) => void;
  defaultValue?: string;
}) {
  const { data, placeholder, width, icon, label, onSelected, defaultValue } =
    props;
  return (
    <SelectData onValueChange={onSelected} defaultValue={defaultValue}>
      {label && <Label content={label} size="textxl" frontWeight={"medium"} />}
      <SelectTrigger
        className={`${width} border-gray-300 h-10 border-[1px] border-solid rounded-[8px] gap-[8px] flex justify-start`}
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
