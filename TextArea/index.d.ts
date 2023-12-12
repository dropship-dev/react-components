import * as React from "react";
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    wrapperClassName?: string;
    label?: string;
    labelClassName?: string;
    error?: boolean;
    errorMessage?: string;
    errorMessageClassName?: string;
}
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
export default Textarea;
