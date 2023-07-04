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
  data: { id: string; value: string }[];
  placeholder?: string;
  width?: string;
  icon?: React.ReactNode;
  label?: string;
}) {
  const { data, placeholder, width, icon, label } = props;
  return (
    <SelectData>
      {label && <Label content={label} size={14} frontWeight={"medium"} />}
      <SelectTrigger
        className={`${
          width ?? "w-1/2"
        } border-black border-[1px] border-solid rounded-[8px] gap-[8px] flex justify-start`}
      >
        {icon}
        <div className="w-full flex flex-row justify-between text-[14px]">
          <SelectValue placeholder={placeholder ?? ""} />
        </div>
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          {data.map((item) => (
            <SelectItem value={item.value} key={item.id}>
              {item.value}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </SelectData>
  );
}
