import React from "react";
type Option = {
    value: string;
    label: string;
};
export default function MultiplechoiceSelect(props: {
    data: {
        name: string;
        value: {
            value: string;
            label: string | React.ReactNode;
            labelInitial?: string;
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
    defaultValue?: string;
    callbackAllSelected?: (value: Option[]) => void;
    classMain?: string;
    classInput?: string;
    showClearSelection?: boolean;
}): import("react/jsx-runtime").JSX.Element;
export {};
