import React from "react";
export default function SelectGroup(props: {
  data: { name: string; value: string[] }[];
  placeholder?: string;
  width?: string;
  icon?: React.ReactNode;
  label?: string;
  onSelected?: (value: any) => void;
  defaultValue?: string;
  size?: "xs" | "sm" | "md";
  optionTop: string[];
  value?: string;
}) {
  const { data, placeholder, optionTop, onSelected, width, size, value } =
    props;

  return (
    <select
      className={`${width} ${
        size === "xs" ? "h-10" : size === "md" ? "h-12" : "h-11"
      } border-gray-300 text-[14px] select w-full max-w-xs py-2 border-[1px] border-solid rounded-[8px] gap-[8px] flex justify-start focus:outline-none`}
      //   className="select w-full max-w-xs focus:outline-none"
      placeholder={placeholder}
      value={value}
      onChange={onSelected}
    >
      {optionTop?.length > 0 &&
        optionTop.map((item) => {
          return (
            <option
              className="py-2 px3 text-textSM text-gray-900 border-b-[1px] border-b-gray-100"
              selected
            >
              {item}
            </option>
          );
        })}
      {data.map((i, index) => (
        <>
          <option
            key={index}
            disabled
            className="py-2 px3 text-textSM text-gray-400"
          >
            {i.name}
          </option>
          {i.value.map((i, id) => (
            <option
              key={id}
              className="py-2 px3 text-textSM text-gray-900 pl-4"
            >
              {i}
            </option>
          ))}
        </>
      ))}
    </select>
  );
}
