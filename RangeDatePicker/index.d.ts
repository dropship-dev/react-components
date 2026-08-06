import * as React from "react";
import { DateRange } from "react-day-picker";
export declare enum RangeDatePickerDefaultValues {
    TODAY = "Today",
    THIS_WEEK = "This week",
    THIS_MONTH = "This month",
    THIS_YEAR = "This year",
    ALL_TIME = "All time"
}
interface IRangeDatePicker {
    date: DateRange | undefined;
    setDate: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
    timezone?: string;
    defaultValues?: RangeDatePickerDefaultValues;
}
export interface RangeDatePickerHandle {
    /**
     * Imperatively apply a preset: updates the trigger label and the internal
     * range, then emits `setDate` — the same result as clicking that preset in
     * the sidebar and pressing Apply. Opt-in; consumers that don't attach a ref
     * are unaffected.
     */
    applyDefaultValue: (preset: RangeDatePickerDefaultValues) => void;
}
declare const RangeDatePicker: React.ForwardRefExoticComponent<IRangeDatePicker & React.RefAttributes<RangeDatePickerHandle>>;
export default RangeDatePicker;
