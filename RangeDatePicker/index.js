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
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const lucide_react_1 = require("lucide-react");
const utils_1 = require("../lib/utils");
const calendar_1 = require("./components/calendar");
const popover_1 = require("../ComboBox/components/popover");
const __1 = require("..");
require("moment-timezone");
var DefaultValues;
(function (DefaultValues) {
    DefaultValues["TODAY"] = "Today";
    DefaultValues["THIS_WEEK"] = "This week";
    DefaultValues["THIS_MONTH"] = "This month";
    DefaultValues["THIS_YEAR"] = "This year";
})(DefaultValues || (DefaultValues = {}));
function RangeDatePicker(props) {
    const { date, setDate, timezone, defaultValues } = props;
    console.log("date", date);
    const timezoneDate = timezone ?? "America/Los_Angeles";
    var moment = require("moment-timezone");
    moment.tz.setDefault(timezoneDate);
    const [datePicker, setDatePicker] = React.useState();
    const [open, setOpen] = React.useState(false);
    React.useEffect(() => {
        if (defaultValues === DefaultValues.TODAY) {
            setDatePicker({
                from: moment().toDate(),
                to: moment().toDate(),
            });
        }
        else if (defaultValues === DefaultValues.THIS_WEEK) {
            setDatePicker({
                from: moment().startOf("week").toDate(),
                to: moment().endOf("week").toDate(),
            });
        }
        else if (defaultValues === DefaultValues.THIS_MONTH) {
            setDatePicker({
                from: moment().startOf("month").toDate(),
                to: moment().endOf("month").toDate(),
            });
        }
        else if (defaultValues === DefaultValues.THIS_YEAR) {
            setDatePicker({
                from: moment().startOf("year").toDate(),
                to: moment().endOf("year").toDate(),
            });
        }
        if (!!defaultValues) {
            setDate({
                from: datePicker?.from
                    ? moment(datePicker?.from)
                        .startOf("day")
                        .toString()
                    : undefined,
                to: datePicker?.to
                    ? moment(datePicker?.to)
                        .endOf("day")
                        .toString()
                    : undefined,
            });
        }
    }, [defaultValues]);
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("grid gap-2"), children: (0, jsx_runtime_1.jsxs)(popover_1.Popover, { open: open, onOpenChange: (open) => setOpen(open), children: [(0, jsx_runtime_1.jsx)(popover_1.PopoverTrigger, { children: (0, jsx_runtime_1.jsxs)("div", { id: "date", className: (0, utils_1.cn)("w-full justify-start text-left font-normal px-4 py-2 rounded-[6px] border-[1px] border-gray-300 flex items-center h-11", !datePicker && "text-muted-foreground"), children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Calendar, { className: "mr-2 h-4 w-4" }), datePicker?.from ? (datePicker.to ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [datePicker.from.toLocaleDateString(), " -", " ", datePicker.to.toLocaleDateString()] })) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: datePicker.from.toLocaleDateString() }))) : ((0, jsx_runtime_1.jsx)("span", { children: "All time" }))] }) }), (0, jsx_runtime_1.jsx)(popover_1.PopoverContent, { className: "w-auto p-0", align: "start", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex rounded-[10px]", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col px-4 py-3 border-r-[1px] border-gray-100", children: [(0, jsx_runtime_1.jsx)("div", { onClick: () => setDatePicker({
                                            from: moment().toDate(),
                                            to: moment().toDate(),
                                        }), className: "w-full text-gray-900 hover:bg-primary-25 hover:text-primary-500 px-4 py-[10px] rounded-[6px] text-textSM cursor-pointer", children: "Today" }), (0, jsx_runtime_1.jsx)("div", { onClick: () => setDatePicker({
                                            from: moment().startOf("week").toDate(),
                                            to: moment().endOf("week").toDate(),
                                        }), className: "w-full text-gray-900 hover:bg-primary-25 hover:text-primary-500 px-4 py-[10px] rounded-[6px] text-textSM cursor-pointer", children: "This week" }), (0, jsx_runtime_1.jsx)("div", { onClick: () => setDatePicker({
                                            from: moment().startOf("month").toDate(),
                                            to: moment().endOf("month").toDate(),
                                        }), className: "w-full text-gray-900 hover:bg-primary-25 hover:text-primary-500 px-4 py-[10px] rounded-[6px] text-textSM cursor-pointer", children: "This month" }), (0, jsx_runtime_1.jsx)("div", { onClick: () => setDatePicker({
                                            from: moment().startOf("year").toDate(),
                                            to: moment().endOf("year").toDate(),
                                        }), className: "w-full text-gray-900 hover:bg-primary-25 hover:text-primary-500 px-4 py-[10px] rounded-[6px] text-textSM cursor-pointer", children: "This year" }), (0, jsx_runtime_1.jsx)("div", { onClick: () => setDatePicker({ from: undefined, to: undefined }), className: "w-full text-gray-900 hover:bg-primary-25 hover:text-primary-500 px-4 py-[10px] rounded-[6px] text-textSM cursor-pointer", children: "All time" })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(calendar_1.Calendar, { initialFocus: true, mode: "range", defaultMonth: datePicker?.from, selected: datePicker, 
                                        // onSelect={(date) => {
                                        //   setDatePicker({
                                        //     from: date?.from ? moment(date?.from).toDate() : undefined,
                                        //     to: date?.to ? moment(date?.to).toDate() : undefined,
                                        //   });
                                        // }}
                                        onSelect: setDatePicker, numberOfMonths: 2, className: "border-b-[1px] border-gray-300" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-end items-center flex-row gap-4 px-4 py-3", children: [(0, jsx_runtime_1.jsx)(__1.Button, { content: "Cancel", color: "gray", hierarchy: "secondary", size: "md", onClick: () => {
                                                    setOpen(false);
                                                    setDatePicker(date);
                                                } }), (0, jsx_runtime_1.jsx)(__1.Button, { content: "Apply", color: "blue", hierarchy: "primary", size: "md", onClick: () => {
                                                    setOpen(false);
                                                    if (datePicker?.from && !datePicker?.to) {
                                                        setDate({
                                                            from: moment(datePicker?.from)
                                                                .startOf("day")
                                                                .toDate(),
                                                            to: moment(datePicker?.from)
                                                                .endOf("day")
                                                                .toDate(),
                                                        });
                                                        setDatePicker({
                                                            ...datePicker,
                                                            to: datePicker?.from,
                                                        });
                                                    }
                                                    else
                                                        setDate({
                                                            from: datePicker?.from
                                                                ? moment(datePicker?.from)
                                                                    .startOf("day")
                                                                    .toDate()
                                                                : undefined,
                                                            to: datePicker?.to
                                                                ? moment(datePicker?.to)
                                                                    .endOf("day")
                                                                    .toDate()
                                                                : undefined,
                                                        });
                                                } })] })] })] }) })] }) }));
}
exports.default = RangeDatePicker;
