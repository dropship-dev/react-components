import * as React from "react";
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
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
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export default Input;
