import React from "react";
export default function MultiplechoiceSelect(props: {
    data: {
        name: string;
        value: string[];
    }[];
    placeholder?: string;
    width?: string;
    icon?: React.ReactNode;
    label?: string;
    onSelected?: (value: any) => void;
    optionTop: string[];
    onCheckedChange?: (value: boolean) => void;
    onClear?: () => void;
    listSelected?: string[];
    callbackListSelected?: (value: string[]) => void;
}): import("react/jsx-runtime").JSX.Element;
