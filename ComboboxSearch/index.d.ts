import * as React from "react";
interface IComboboxProps {
    data: {
        value: string | number;
        label: string | React.ReactNode;
    }[];
    placeholder?: string;
    onSelect?: (e: string | number) => void;
    DeleteContent?: string;
    content?: string;
    onDelete?: () => void;
    value: string | number;
    setValue: (e: string | number) => void;
    width?: number;
}
export default function ComboboxDemo(props: IComboboxProps): import("react/jsx-runtime").JSX.Element;
export {};
