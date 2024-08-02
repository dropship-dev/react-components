import * as React from "react";
import { DateRange } from "react-day-picker";
import { RangeDatePickerDefaultValues } from "..";
interface IRangeDatePicker {
    date: DateRange | undefined;
    setDate: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
    timezone?: string;
    defaultValues?: RangeDatePickerDefaultValues;
}
export default function RangeDatePickerMarketing(props: IRangeDatePicker): import("react/jsx-runtime").JSX.Element;
export {};
