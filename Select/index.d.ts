import * as React from "react";
export default function Select(props: {
    data: {
        value: string;
        label: string | React.ReactNode;
    }[];
    placeholder?: string;
    width?: string;
    icon?: React.ReactNode;
    label?: string;
    onSelected?: (value: string) => void;
    defaultValue?: string;
    size?: "xs" | "sm" | "md";
}): import("react/jsx-runtime").JSX.Element;
export * from "./components/select";
