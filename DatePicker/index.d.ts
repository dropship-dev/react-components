import * as React from "react";
interface IDatePicker {
    date: Date | undefined;
    setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}
declare const DatePicker: (props: IDatePicker) => import("react/jsx-runtime").JSX.Element;
export default DatePicker;
