import React from "react";
export default function MultiplechoiceSelect(props: {
    data: {
        name: string;
        value: {
            value: string;
            label: React.ReactNode;
        }[];
    }[];
    placeholder?: string;
    width?: string;
    icon?: React.ReactNode;
    content?: string;
    onSelected?: (value: any) => void;
    optionTop: string[];
    onCheckedChange?: (value: boolean) => void;
    onClear?: () => void;
    listSelected?: string[];
    callbackListSelected?: (value: string[]) => void;
}): import("react/jsx-runtime").JSX.Element;
