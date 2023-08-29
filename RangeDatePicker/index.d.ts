import * as React from "react";
import { DateRange } from "react-day-picker";
import "moment-timezone";
interface IRangeDatePicker {
    date: DateRange | undefined;
    setDate: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
    timezone?: string;
    defaultValues?: string;
}
export default function RangeDatePicker(props: IRangeDatePicker): import("react/jsx-runtime").JSX.Element;
export {};
