import React from "react";
export type SelectOption = {
    value: string;
    label: string | React.ReactNode;
    altLabel?: string;
};
type MultipleSelectProps = {
    data: {
        name: string;
        value: SelectOption[];
    }[];
    placeholder?: string;
    selectedPrefix?: string;
    onClear?: () => void;
    onChange?: (value: SelectOption[]) => void;
    defaultValue?: string;
    className?: string;
};
declare const MultipleSelect: React.FC<MultipleSelectProps>;
export default MultipleSelect;
