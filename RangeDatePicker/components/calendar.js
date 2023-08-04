"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calendar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const lucide_react_1 = require("lucide-react");
const react_day_picker_1 = require("react-day-picker");
const utils_1 = require("../../lib/utils");
function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
    return ((0, jsx_runtime_1.jsx)(react_day_picker_1.DayPicker, { showOutsideDays: showOutsideDays, className: (0, utils_1.cn)("px-6 py-5", className), classNames: {
            months: "flex flex-col sm:flex-row space-y-2 sm:space-x-6 sm:space-y-0 ",
            month: "space-y-2",
            caption: "flex justify-center pt-1 relative items-center",
            caption_label: "text-textSM font-medium text-black pb-2",
            nav: "space-x-3 flex items-center",
            nav_button: "h-8 w-8 bg-transparent p-0 opacity-50 hover:opacity-100",
            nav_button_previous: "absolute left-1",
            nav_button_next: "absolute right-1",
            table: "w-full border-collapse space-y-1",
            head_row: "flex",
            head_cell: "text-gray-900 w-10 flex justify-center font-normal text-[12px]",
            row: "flex w-full mt-2",
            cell: "text-center text-[12px] p-0 relative [&:has([aria-selected])]:bg-neutral-100 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
            day: "h-10 w-10 p-0 font-normal rounded-full aria-selected:opacity-100",
            day_selected: "bg-primary-500 text-neutral-50 hover:bg-primary-500 hover:text-neutral-50 focus:bg-primary-500 focus:text-neutral-50",
            day_today: "bg-neutral-100 text-neutral-900",
            day_outside: "text-neutral-500 opacity-50",
            day_disabled: "text-neutral-500 opacity-50",
            day_range_middle: "aria-selected:bg-neutral-100 aria-selected:text-neutral-900",
            day_hidden: "invisible",
            ...classNames,
        }, components: {
            IconLeft: ({ ...props }) => (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronLeft, { size: 20, color: "black" }),
            IconRight: ({ ...props }) => (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronRight, { size: 20, color: "black" }),
        }, ...props }));
}
exports.Calendar = Calendar;
Calendar.displayName = "Calendar";
