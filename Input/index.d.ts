import * as React from "react";
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    small?: boolean;
    label?: string;
    subLabel?: string;
    iconPre?: React.ReactNode;
    iconAfter?: React.ReactNode;
    placeholder?: string;
    error?: boolean;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export default Input;
