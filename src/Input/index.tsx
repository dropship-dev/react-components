import * as React from "react";

import { cn } from "../lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  small?: boolean;
  label?: string;
  subLabel?: string;
  iconPre?: React.ReactNode;
  iconAfter?: React.ReactNode;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
  labelClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      small,
      label,
      subLabel,
      iconPre,
      iconAfter,
      placeholder,
      error,
      errorMessage,
      labelClassName,
      ...props
    },
    ref,
  ) => {
    return (
      <div className="gap-[6px] flex flex-col">
        {label && (
          <div
            className={`font-medium text-textSM text-gray-500 ${labelClassName}`}
          >
            {label}
          </div>
        )}
        <div
          className={`bg-transparent flex justify-between items-center py-2 px-3 rounded-[8px] border border-solid focus-within:shadow-[#DBDDFF] focus-within:shadow-[0_0_0_3px]  ${
            errorMessage || error ? "border-red-500" : "border-gray-300"
          } `}
        >
          {iconPre}
          <input
            placeholder={placeholder}
            type={type}
            className={`flex h-[26px] w-full text-[16px] font-medium text-black leading-[24px] bg-transparent focus:outline-none my-auto ${
              iconPre ? "pl-2" : ""
            } pr-3 py-2 ring-offset-background file:bg-transparent file:text-sm file:font-semibold placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 `}
            ref={ref}
            {...props}
          />
          {iconAfter}
        </div>
        {errorMessage && (
          <div className="font-normal text-textXS text-destructive-500">
            {errorMessage}
          </div>
        )}
        {subLabel && (
          <div className="text-textXS font-normal text-gray-700">
            {subLabel}
          </div>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export default Input;
