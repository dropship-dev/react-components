import * as React from "react";
export interface ICombobox {
    data: {
        value: string;
        label: string;
    }[];
    content: string;
    onSelect: (e: string) => void;
    onChangeValue: (e: any) => void;
    value: string;
    setValue: any;
    open: boolean;
    setOpen: any;
    icon?: React.ReactNode;
}
export default function Combobox(props: ICombobox): import("react/jsx-runtime").JSX.Element;
