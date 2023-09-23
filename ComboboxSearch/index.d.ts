import * as React from "react";
interface IComboboxProps {
    data: {
        value: string;
        label: string | React.ReactNode;
    }[];
    placeholder?: string;
    onSelect?: (e: string) => void;
    DeleteContent?: string;
    content?: string;
    onDelete?: () => void;
}
export default function ComboboxDemo(props: IComboboxProps): import("react/jsx-runtime").JSX.Element;
export {};
