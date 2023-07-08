import * as React from "react";
export default function Select(props: {
    data: {
        id: string;
        value: string;
    }[];
    placeholder?: string;
    width?: string;
    icon?: React.ReactNode;
    label?: string;
    onSelected?: (value: string) => void;
    defaultValue?: string;
}): import("react/jsx-runtime").JSX.Element;
