import React, { useEffect } from "react";

import { Button, Checkbox, Input } from "../";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ComboBox/components/popover";
export default function MultiplechoiceSelect(props: {
  data: { name: string; value: string[] }[];
  placeholder?: string;
  width?: string;
  icon?: React.ReactNode;
  label?: string;
  onSelected?: (value: any) => void;
  optionTop: string[];
  onCheckedChange?: (value: boolean) => void;
  onClear?: () => void;
  listSelected?: string[];
  callbackListSelected?: (value: string[]) => void;
}) {
  const {
    data,
    optionTop,
    width,
    onCheckedChange,
    onClear,
    callbackListSelected,
  } = props;
  const [value, setValue] = React.useState<string>("All variants");
  const [open, setOpen] = React.useState<boolean>(false);
  const [allSelected, setAllSelected] = React.useState<string[]>([]);

  useEffect(() => {
    if (allSelected.length === 0) {
      setValue("All variants");
    } else if (allSelected.length === 1) {
      setValue(allSelected[0]);
    } else {
      setValue(
        `${allSelected[0] + " + " + (allSelected.length - 1)} ${
          allSelected.length - 1 > 1 ? "variants" : "variant"
        }`,
      );
    }
    callbackListSelected && callbackListSelected(allSelected);
  }, [allSelected]);
  return (
    <div className={width}>
      <Popover open={open} onOpenChange={(e) => setOpen(e)}>
        <PopoverTrigger asChild onClick={() => setOpen(true)}>
          <Input value={value} readOnly className={width} />
        </PopoverTrigger>
        <PopoverContent className={`p-0 ${width}`}>
          {optionTop?.length > 0 &&
            optionTop.map((item) => {
              return (
                <div className="px-3 py-[10px] flex flex-row gap-3 text-textSM text-gray-900 items-center hover:bg-gray-50">
                  {onCheckedChange && (
                    <Checkbox
                      onCheckedChange={(e) => {
                        onCheckedChange(e as boolean);
                        if (e) {
                          setAllSelected([...allSelected, item]);
                        } else {
                          setAllSelected(
                            allSelected.filter((select) => select !== item),
                          );
                        }
                      }}
                    />
                  )}
                  {item}
                </div>
              );
            })}
          {data.map((i, index) => (
            <>
              <div key={index} className="text-textSM text-gray-400 px-3">
                {i.name}
              </div>
              {i.value.map((i, id) => (
                <div className="pl-4 pr-3 py-[10px] flex flex-row gap-3 text-textSM text-gray-900 items-center hover:bg-gray-50">
                  {onCheckedChange && (
                    <Checkbox
                      onCheckedChange={(e) => {
                        onCheckedChange(e as boolean);
                        if (e) {
                          setAllSelected([...allSelected, i]);
                        } else {
                          setAllSelected(
                            allSelected.filter((select) => select !== i),
                          );
                        }
                      }}
                      checked={!!allSelected?.find((select) => select === i)}
                    />
                  )}
                  {i}
                </div>
              ))}
            </>
          ))}
          <div
            className="w-full h-full p-3 text-textSM text-gray-900 hover:bg-gray-50 border-t-[1px] border-t-gray-400 cursor-pointer "
            onClick={() => {
              onClear && onClear();
              setAllSelected([]);
              setOpen(false);
            }}
          >
            Clear selection
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
