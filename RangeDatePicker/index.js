"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RangeDatePickerDefaultValues = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const lucide_react_1 = require("lucide-react");
const React = __importStar(require("react"));
const utils_1 = require("../lib/utils");
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const __1 = require("..");
const popover_1 = require("../ComboBox/components/popover");
const calendar_1 = require("./components/calendar");
var RangeDatePickerDefaultValues;
(function (RangeDatePickerDefaultValues) {
    RangeDatePickerDefaultValues["TODAY"] = "Today";
    RangeDatePickerDefaultValues["THIS_WEEK"] = "This week";
    RangeDatePickerDefaultValues["THIS_MONTH"] = "This month";
    RangeDatePickerDefaultValues["THIS_YEAR"] = "This year";
    RangeDatePickerDefaultValues["ALL_TIME"] = "All time";
})(RangeDatePickerDefaultValues || (exports.RangeDatePickerDefaultValues = RangeDatePickerDefaultValues = {}));
const toLocalDate = (momentObj) => {
    const dateStr = momentObj.format("YYYY-MM-DD");
    return new Date(dateStr + "T00:00:00");
};
const generateDateRangeFromDefaultValue = (timezoneDate, defaultValue) => {
    const now = (0, moment_timezone_1.default)().tz(timezoneDate);
    switch (defaultValue) {
        case RangeDatePickerDefaultValues.TODAY:
            const today = toLocalDate(now);
            return { from: today, to: today };
        case RangeDatePickerDefaultValues.THIS_WEEK:
            return {
                from: toLocalDate(now.clone().startOf("isoWeek")),
                to: toLocalDate(now.clone().endOf("isoWeek")),
            };
        case RangeDatePickerDefaultValues.THIS_MONTH:
            return {
                from: toLocalDate(now.clone().startOf("month")),
                to: toLocalDate(now.clone().endOf("month")),
            };
        case RangeDatePickerDefaultValues.THIS_YEAR:
            return {
                from: toLocalDate(now.clone().startOf("year")),
                to: toLocalDate(now.clone().endOf("year")),
            };
        default:
            return { from: undefined, to: undefined };
    }
};
function RangeDatePicker(props) {
    const { date, setDate, timezone, defaultValues } = props;
    const [firstLoad, setFirstLoad] = React.useState(true);
    const timezoneDate = timezone ?? "America/Los_Angeles";
    const [datePicker, setDatePicker] = React.useState(generateDateRangeFromDefaultValue(timezoneDate, defaultValues));
    const [open, setOpen] = React.useState(false);
    const [valueSelected, setValueSelected] = React.useState(defaultValues ?? "");
    React.useEffect(() => {
        const dateRange = generateDateRangeFromDefaultValue(timezoneDate, defaultValues);
        setDatePicker(dateRange);
    }, [defaultValues, timezoneDate]);
    React.useEffect(() => {
        if (firstLoad && !!defaultValues && !!datePicker?.from) {
            if (datePicker?.from && !datePicker?.to) {
                setDate({
                    from: convertDate(datePicker?.from, "start", timezoneDate),
                    to: convertDate(datePicker?.from, "end", timezoneDate),
                });
                setDatePicker({
                    ...datePicker,
                    to: datePicker?.from,
                });
            }
            else if (datePicker?.from && datePicker?.to) {
                setDate({
                    from: convertDate(datePicker?.from, "start", timezoneDate),
                    to: convertDate(datePicker?.to, "end", timezoneDate),
                });
            }
            setFirstLoad(false);
        }
    }, [datePicker, firstLoad, timezoneDate]);
    function convertDate(date, type, timezone) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const dateStr = `${year}-${month}-${day}`;
        const m = moment_timezone_1.default.tz(dateStr, timezone);
        if (type === "start") {
            return m.startOf("day").toDate();
        }
        return m.endOf("day").toDate();
    }
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("grid gap-2"), children: (0, jsx_runtime_1.jsxs)(popover_1.Popover, { open: open, onOpenChange: (open) => setOpen(open), children: [(0, jsx_runtime_1.jsx)(popover_1.PopoverTrigger, { children: (0, jsx_runtime_1.jsxs)("div", { id: "date", className: (0, utils_1.cn)(`flex h-10 w-fit items-center justify-start text-ellipsis whitespace-nowrap rounded-[6px] border-[1px] border-gray-300 px-4 py-2 text-left font-normal ${open ? "shadow-[0_0_0_4px] shadow-[#DBDDFF]" : ""}`, !datePicker && "text-muted-foreground"), children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Calendar, { className: "mr-2 h-4 w-4" }), datePicker?.from ? (valueSelected !== "" ? (valueSelected) : datePicker.to ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [datePicker.from.toLocaleDateString().replaceAll("-", "/"), " -", " ", datePicker.to.toLocaleDateString().replaceAll("-", "/")] })) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: datePicker.from.toLocaleDateString() }))) : ((0, jsx_runtime_1.jsx)("span", { children: "All time" }))] }) }), (0, jsx_runtime_1.jsx)(popover_1.PopoverContent, { className: "w-auto p-0", align: "start", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex rounded-[10px]", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col border-r-[1px] border-gray-100 px-4 py-3", children: [(0, jsx_runtime_1.jsx)("div", { onClick: () => {
                                            setValueSelected("Today");
                                            const now = (0, moment_timezone_1.default)().tz(timezoneDate);
                                            const today = toLocalDate(now);
                                            setDatePicker({ from: today, to: today });
                                        }, className: "w-full cursor-pointer rounded-[6px] px-4 py-[10px] text-textSM text-gray-900 hover:bg-primary-25 hover:text-primary-500", children: "Today" }), (0, jsx_runtime_1.jsx)("div", { onClick: () => {
                                            setValueSelected("This week");
                                            const now = (0, moment_timezone_1.default)().tz(timezoneDate);
                                            setDatePicker({
                                                from: toLocalDate(now.clone().startOf("isoWeek")),
                                                to: toLocalDate(now.clone().endOf("isoWeek")),
                                            });
                                        }, className: "w-full cursor-pointer rounded-[6px] px-4 py-[10px] text-textSM text-gray-900 hover:bg-primary-25 hover:text-primary-500", children: "This week" }), (0, jsx_runtime_1.jsx)("div", { onClick: () => {
                                            setValueSelected("This month");
                                            const now = (0, moment_timezone_1.default)().tz(timezoneDate);
                                            setDatePicker({
                                                from: toLocalDate(now.clone().startOf("month")),
                                                to: toLocalDate(now.clone().endOf("month")),
                                            });
                                        }, className: "w-full cursor-pointer rounded-[6px] px-4 py-[10px] text-textSM text-gray-900 hover:bg-primary-25 hover:text-primary-500", children: "This month" }), (0, jsx_runtime_1.jsx)("div", { onClick: () => {
                                            setValueSelected("This year");
                                            const now = (0, moment_timezone_1.default)().tz(timezoneDate);
                                            setDatePicker({
                                                from: toLocalDate(now.clone().startOf("year")),
                                                to: toLocalDate(now.clone().endOf("year")),
                                            });
                                        }, className: "w-full cursor-pointer rounded-[6px] px-4 py-[10px] text-textSM text-gray-900 hover:bg-primary-25 hover:text-primary-500", children: "This year" }), (0, jsx_runtime_1.jsx)("div", { onClick: () => {
                                            setValueSelected("");
                                            setDatePicker({ from: undefined, to: undefined });
                                        }, className: "w-full cursor-pointer rounded-[6px] px-4 py-[10px] text-textSM text-gray-900 hover:bg-primary-25 hover:text-primary-500", children: "All time" })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(calendar_1.Calendar, { initialFocus: true, mode: "range", defaultMonth: datePicker?.from, selected: datePicker, onSelect: (range) => {
                                            setValueSelected("");
                                            if (!range) {
                                                setDatePicker({ from: undefined, to: undefined });
                                                return;
                                            }
                                            let from = range.from ?? undefined;
                                            let to = range.to ?? undefined;
                                            if (from && to && from > to)
                                                [from, to] = [to, from];
                                            setDatePicker({ from, to });
                                        }, numberOfMonths: 2, className: "border-b-[1px] border-gray-300" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row items-center justify-end gap-4 px-4 py-3", children: [(0, jsx_runtime_1.jsx)(__1.Button, { content: "Cancel", color: "gray", hierarchy: "secondary", size: "md", onClick: () => {
                                                    setOpen(false);
                                                    setDatePicker(date);
                                                } }), (0, jsx_runtime_1.jsx)(__1.Button, { content: "Apply", color: "blue", hierarchy: "primary", size: "md", onClick: () => {
                                                    setOpen(false);
                                                    if (datePicker?.from && !datePicker?.to) {
                                                        const from = convertDate(datePicker.from, "start", timezoneDate);
                                                        const to = convertDate(datePicker.from, "end", timezoneDate);
                                                        setDate({ from, to });
                                                        setDatePicker((r) => (r ? { ...r, to: r.from } : r));
                                                        return;
                                                    }
                                                    if (datePicker?.from && datePicker?.to) {
                                                        const from = convertDate(datePicker.from, "start", timezoneDate);
                                                        const to = convertDate(datePicker.to, "end", timezoneDate);
                                                        setDate({ from, to });
                                                        return;
                                                    }
                                                    setDate(undefined);
                                                } })] })] })] }) })] }) }));
}
exports.default = RangeDatePicker;
