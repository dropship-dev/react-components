import * as React from "react";
import { DateRange } from "react-day-picker";
import "moment-timezone";
export declare enum RangeDatePickerDefaultValues {
    TODAY = "Today",
    THIS_WEEK = "This week",
    THIS_MONTH = "This month",
    THIS_YEAR = "This year"
}
interface IRangeDatePicker {
    date: DateRange | undefined;
    setDate: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
    timezone?: string;
    defaultValues?: RangeDatePickerDefaultValues;
}
export default function RangeDatePicker(props: IRangeDatePicker): import("react/jsx-runtime").JSX.Element;
export {};
