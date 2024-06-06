import * as React from "react";
import "moment-timezone";
import { Matcher } from "react-day-picker";
interface IDatePicker {
    date: Date | undefined;
    setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
    timezone?: string;
    showOutsideDays?: boolean;
    disable?: Matcher | Matcher[];
}
declare const DatePicker: (props: IDatePicker) => import("react/jsx-runtime").JSX.Element;
export default DatePicker;
