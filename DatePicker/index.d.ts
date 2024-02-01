import * as React from "react";
import "moment-timezone";
interface IDatePicker {
    date: Date | undefined;
    setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
    timezone?: string;
}
declare const DatePicker: (props: IDatePicker) => import("react/jsx-runtime").JSX.Element;
export default DatePicker;
