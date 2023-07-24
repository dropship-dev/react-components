import * as React from "react";
import { DateRange } from "react-day-picker";
interface IRangeDatePicker {
    date: DateRange | undefined;
    setDate: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
}
export default function RangeDatePicker(props: IRangeDatePicker): import("react/jsx-runtime").JSX.Element;
export {};
