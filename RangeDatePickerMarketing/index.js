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
exports.RangeDatePickerDefaultValuesMarketing = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const lucide_react_1 = require("lucide-react");
const React = __importStar(require("react"));
const utils_1 = require("../lib/utils");
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const __1 = require("..");
const popover_1 = require("../ComboBox/components/popover");
const calendar_1 = require("./components/calendar");
var RangeDatePickerDefaultValuesMarketing;
(function (RangeDatePickerDefaultValuesMarketing) {
    RangeDatePickerDefaultValuesMarketing["TODAY"] = "Today";
    RangeDatePickerDefaultValuesMarketing["THIS_WEEK"] = "This week";
    RangeDatePickerDefaultValuesMarketing["THIS_MONTH"] = "This month";
    RangeDatePickerDefaultValuesMarketing["THIS_YEAR"] = "This year";
})(RangeDatePickerDefaultValuesMarketing || (exports.RangeDatePickerDefaultValuesMarketing = RangeDatePickerDefaultValuesMarketing = {}));
const generateDateRangeFromDefaultValue = (timezoneDate, defaultValue) => {
    switch (defaultValue) {
        case RangeDatePickerDefaultValuesMarketing.TODAY:
            return {
                from: new Date((0, moment_timezone_1.default)().toDate().toLocaleString("en-US", { timeZone: timezoneDate })),
                to: new Date((0, moment_timezone_1.default)().toDate().toLocaleString("en-US", { timeZone: timezoneDate })),
            };
        case RangeDatePickerDefaultValuesMarketing.THIS_WEEK:
            return {
                from: (0, moment_timezone_1.default)().startOf("week").add("days", 1).toDate(),
                to: (0, moment_timezone_1.default)().endOf("week").add("days", 1).toDate(),
            };
        case RangeDatePickerDefaultValuesMarketing.THIS_MONTH:
            return {
                from: (0, moment_timezone_1.default)(new Date()).startOf("month").toDate(),
                to: (0, moment_timezone_1.default)(new Date()).endOf("month").toDate(),
            };
        case RangeDatePickerDefaultValuesMarketing.THIS_YEAR:
            return {
                from: (0, moment_timezone_1.default)(new Date()).startOf("year").toDate(),
                to: (0, moment_timezone_1.default)(new Date()).endOf("year").toDate(),
            };
        default:
            return {
                from: undefined,
                to: undefined,
            };
    }
};
function RangeDatePickerMarketing(props) {
    const { date, setDate, timezone, defaultValues } = props;
    const [firstLoad, setFirstLoad] = React.useState(true);
    const timezoneDate = timezone ?? "America/Los_Angeles";
    var moment = require("moment-timezone");
    moment.tz.setDefault(timezoneDate);
    const [datePicker, setDatePicker] = React.useState(generateDateRangeFromDefaultValue(timezoneDate, defaultValues));
    const [open, setOpen] = React.useState(false);
    const [valueSelected, setValueSelected] = React.useState(defaultValues ?? "");
    React.useEffect(() => {
        const dateRange = generateDateRangeFromDefaultValue(timezoneDate, defaultValues);
        setDatePicker(dateRange);
    }, [defaultValues]);
    React.useEffect(() => {
        if (firstLoad && !!defaultValues && !!datePicker?.from) {
            if (datePicker?.from && !datePicker?.to) {
                setDate({
                    from: convertDate(datePicker?.from, "start"),
                    to: convertDate(datePicker?.from, "end"),
                });
                setDatePicker({
                    ...datePicker,
                    to: datePicker?.from,
                });
            }
            else if (datePicker?.from && datePicker?.to)
                setDate({
                    from: convertDate(datePicker.from, "start"),
                    to: convertDate(datePicker?.to, "end"),
                });
            setFirstLoad(false);
        }
    }, [datePicker, firstLoad]);
    function convertDate(date, type) {
        return new Date(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${type === "start" ? "00:00:00" : "23:59:59"}`);
    }
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("grid gap-2"), children: (0, jsx_runtime_1.jsxs)(popover_1.Popover, { open: open, onOpenChange: (open) => setOpen(open), children: [(0, jsx_runtime_1.jsx)(popover_1.PopoverTrigger, { children: (0, jsx_runtime_1.jsxs)("div", { id: "date", className: (0, utils_1.cn)(`w-fit justify-start text-left font-normal px-4 py-2 rounded-[6px] border-[1px] border-gray-300 flex items-center h-10 text-ellipsis whitespace-nowrap ${open ? "shadow-[#DBDDFF] shadow-[0_0_0_4px]" : ""}`, !datePicker && "text-muted-foreground"), children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Calendar, { className: "mr-2 h-4 w-4" }), datePicker?.from ? (valueSelected !== "" ? (valueSelected) : datePicker.to ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [datePicker.from.toLocaleDateString().replaceAll("-", "/"), " -", " ", datePicker.to.toLocaleDateString().replaceAll("-", "/")] })) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: datePicker.from.toLocaleDateString() }))) : ((0, jsx_runtime_1.jsx)("span", { children: "All time" }))] }) }), (0, jsx_runtime_1.jsx)(popover_1.PopoverContent, { className: "w-auto p-0", align: "start", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex rounded-[10px]", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col px-4 py-3 border-r-[1px] border-gray-100", children: [(0, jsx_runtime_1.jsx)("div", { onClick: () => {
                                            setValueSelected("Today");
                                            setDatePicker({
                                                from: new Date(moment()
                                                    .toDate()
                                                    .toLocaleString("en-US", { timeZone: timezoneDate })),
                                                to: new Date(moment()
                                                    .toDate()
                                                    .toLocaleString("en-US", { timeZone: timezoneDate })),
                                            });
                                        }, className: "w-full text-gray-900 hover:bg-primary-25 hover:text-primary-500 px-4 py-[10px] rounded-[6px] text-textSM cursor-pointer", children: "Today" }), (0, jsx_runtime_1.jsx)("div", { onClick: () => {
                                            setValueSelected("This week");
                                            setDatePicker({
                                                from: moment().startOf("week").add("days", 1).toDate(),
                                                to: moment().endOf("week").add("days", 1).toDate(),
                                            });
                                        }, className: "w-full text-gray-900 hover:bg-primary-25 hover:text-primary-500 px-4 py-[10px] rounded-[6px] text-textSM cursor-pointer", children: "This week" }), (0, jsx_runtime_1.jsx)("div", { onClick: () => {
                                            setValueSelected("This month");
                                            setDatePicker({
                                                from: moment(new Date()).startOf("month").toDate(),
                                                to: moment(new Date()).endOf("month").toDate(),
                                            });
                                        }, className: "w-full text-gray-900 hover:bg-primary-25 hover:text-primary-500 px-4 py-[10px] rounded-[6px] text-textSM cursor-pointer", children: "This month" }), (0, jsx_runtime_1.jsx)("div", { onClick: () => {
                                            setValueSelected("This year");
                                            setDatePicker({
                                                from: moment(new Date()).startOf("year").toDate(),
                                                to: moment(new Date()).endOf("year").toDate(),
                                            });
                                        }, className: "w-full text-gray-900 hover:bg-primary-25 hover:text-primary-500 px-4 py-[10px] rounded-[6px] text-textSM cursor-pointer", children: "This year" }), (0, jsx_runtime_1.jsx)("div", { onClick: () => {
                                            setValueSelected("");
                                            setDatePicker({ from: undefined, to: undefined });
                                        }, className: "w-full text-gray-900 hover:bg-primary-25 hover:text-primary-500 px-4 py-[10px] rounded-[6px] text-textSM cursor-pointer", children: "All time" })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(calendar_1.Calendar, { initialFocus: true, mode: "range", defaultMonth: datePicker?.from, selected: datePicker, onSelect: (date) => {
                                            setDatePicker(date);
                                            setValueSelected("");
                                        }, numberOfMonths: 2, className: "border-b-[1px] border-gray-300" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-end items-center flex-row gap-4 px-4 py-3", children: [(0, jsx_runtime_1.jsx)(__1.Button, { content: "Cancel", color: "gray", hierarchy: "secondary", size: "md", onClick: () => {
                                                    setOpen(false);
                                                    setDatePicker(date);
                                                } }), (0, jsx_runtime_1.jsx)(__1.Button, { content: "Apply", color: "blue", hierarchy: "primary", size: "md", onClick: () => {
                                                    setOpen(false);
                                                    if (datePicker?.from && !datePicker?.to) {
                                                        setDate({
                                                            from: new Date(convertDate(datePicker?.from, "start")),
                                                            to: new Date(new Date(convertDate(datePicker?.from, "end")).getTime()),
                                                        });
                                                        setDatePicker({
                                                            ...datePicker,
                                                            to: datePicker?.from,
                                                        });
                                                    }
                                                    else if (datePicker?.from && datePicker?.to) {
                                                        setDate({
                                                            from: new Date(convertDate(datePicker.from, "start")),
                                                            to: new Date(new Date(convertDate(datePicker?.to, "end")).getTime()),
                                                        });
                                                    }
                                                    else {
                                                        setDate(undefined);
                                                    }
                                                } })] })] })] }) })] }) }));
}
exports.default = RangeDatePickerMarketing;
