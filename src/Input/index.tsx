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
      ...props
    },
    ref
  ) => {
    return (
      <div>
        {label && (
          <p
            className={`text-[14px]  ${
              small ? "w-[107px] h-[20px]" : "w-[262px] h-[24px]"
            }  h-[24px] font-medium	leading-[20px] text-slate-500	`}
          >
            {label}
          </p>
        )}
        <div
          className={cn(
            `bg-transparent flex justify-between items-center py-[9px] px-[12px] border border-solid  rounded-[8px] `
          )}
        >
          {iconPre}
          <input
            placeholder={placeholder}
            type={type}
            className={cn(
              `flex h-[24px] w-full text-[16px] font-medium text-black leading-[24px] focus:outline-none px-3 py-2 ring-offset-background file:bg-transparent file:text-sm file:font-semibold placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 `
            )}
            ref={ref}
            {...props}
          />
          {iconAfter}
        </div>
        {subLabel && (
          <p className="text=[12px] font-normal leading-[28px] text-slate-400	">
            {subLabel}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };