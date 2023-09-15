import React from "react";
export default function SelectGroup(props: {
    data: {
        name: string;
        value: string[];
    }[];
    placeholder?: string;
    width?: string;
    icon?: React.ReactNode;
    label?: string;
    onSelected?: (value: any) => void;
    defaultValue?: string;
    size?: "xs" | "sm" | "md";
    optionTop: string[];
    value?: string;
}): import("react/jsx-runtime").JSX.Element;
