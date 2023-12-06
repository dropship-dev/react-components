import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  subLabel?: string;
  iconPre?: React.ReactNode;
  iconAfter?: React.ReactNode;
  label?: string;
  labelClassName?: string;
  error?: boolean;
  errorMessage?: string;
  errorMessageClassName?: string;
  wrapperClassName?: string;
  inputWrapperClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      subLabel,
      iconPre,
      iconAfter,
      label,
      labelClassName,
      error,
      errorMessage,
      errorMessageClassName,
      wrapperClassName,
      inputWrapperClassName,
      ...props
    },
    ref,
  ) => {
    const isError = error || errorMessage;
    return (
      <div className={`gap-[6px] flex flex-col ${wrapperClassName}`}>
        {label && (
          <div
            className={`font-medium text-textSM text-gray-500 ${labelClassName}`}
          >
            {label}
          </div>
        )}
        <div
          className={`bg-transparent flex gap-2 justify-between items-center h-[40px] py-[7px] px-[12px] rounded-[6px] border border-gray-300 focus-within:border-primary-500 focus-within:shadow-[0_0_0_4px_#DBDDFF] ${
            isError &&
            "border-red-500 focus-within:border-red-500 focus-within:shadow-[#FDE4E2]"
          } ${inputWrapperClassName}`}
        >
          {iconPre}
          <input
            className={`flex h-full w-full text-textMD font-medium text-black bg-transparent focus:outline-none my-auto ring-offset-background file:bg-transparent file:text-sm file:font-semibold placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
            ref={ref}
            {...props}
          />
          {iconAfter}
        </div>
        {errorMessage && (
          <div
            className={`font-normal text-textXS text-destructive-500 ${errorMessageClassName}`}
          >
            {errorMessage}
          </div>
        )}
        {subLabel && (
          <div className="font-normal text-textXS text-gray-700">
            {subLabel}
          </div>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export default Input;
