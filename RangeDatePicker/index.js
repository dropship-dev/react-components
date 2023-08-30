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
const jsx_runtime_1 = require("react/jsx-runtime");
const lucide_react_1 = require("lucide-react");
const React = __importStar(require("react"));
const utils_1 = require("../lib/utils");
const moment_1 = __importDefault(require("moment"));
require("moment-timezone");
const __1 = require("..");
const popover_1 = require("../ComboBox/components/popover");
const calendar_1 = require("./components/calendar");
var DefaultValues;
(function (DefaultValues) {
    DefaultValues["TODAY"] = "Today";
    DefaultValues["THIS_WEEK"] = "This week";
    DefaultValues["THIS_MONTH"] = "This month";
    DefaultValues["THIS_YEAR"] = "This year";
})(DefaultValues || (DefaultValues = {}));
function RangeDatePicker(props) {
    const { date, setDate, timezone, defaultValues } = props;
    const [firtLoad, setFirstLoad] = React.useState(true);
    const timezoneDate = timezone ?? "America/Los_Angeles";
    // var moment = require("moment-timezone");
    // moment.tz.setDefault(timezoneDate);
    const [datePicker, setDatePicker] = React.useState();
    const [open, setOpen] = React.useState(false);
    console.log(date);
    const convertTimezone = (timezone) => {
        const date = new Intl.DateTimeFormat("en-GB", {
            dateStyle: "full",
            timeStyle: "long",
            timeZone: timezone,
        })
            .format(new Date((0, moment_1.default)().tz(timezone).format()))
            .split(" ");
        return date[date.length - 1];
    };
    React.useEffect(() => {
        if (defaultValues === DefaultValues.TODAY) {
            setDatePicker({
                from: new Date((0, moment_1.default)().toDate().toLocaleString("en-US", { timeZone: timezoneDate })),
                to: new Date((0, moment_1.default)().toDate().toLocaleString("en-US", { timeZone: timezoneDate })),
            });
        }
        else if (defaultValues === DefaultValues.THIS_WEEK) {
            setDatePicker({
                from: (0, moment_1.default)(new Date()).startOf("week").toDate(),
                to: (0, moment_1.default)(new Date()).endOf("week").toDate(),
            });
        }
        else if (defaultValues === DefaultValues.THIS_MONTH) {
            setDatePicker({
                from: (0, moment_1.default)(new Date()).startOf("month").toDate(),
                to: (0, moment_1.default)(new Date()).endOf("month").toDate(),
            });
        }
        else if (defaultValues === DefaultValues.THIS_YEAR) {
            setDatePicker({
                from: (0, moment_1.default)(new Date()).startOf("year").toDate(),
                to: (0, moment_1.default)(new Date()).endOf("year").toDate(),
            });
        }
    }, [defaultValues]);
    React.useEffect(() => {
        if (firtLoad && !!defaultValues && !!datePicker?.from) {
            if (datePicker?.from && !datePicker?.to) {
                setDate({
                    from: new Date(convertDate(datePicker?.from, "start")),
                    to: new Date(convertDate(datePicker?.from, "end")),
                });
                setDatePicker({
                    ...datePicker,
                    to: datePicker?.from,
                });
            }
            else if (datePicker?.from && datePicker?.to)
                setDate({
                    from: new Date(convertDate(datePicker.from, "start")),
                    to: new Date(convertDate(datePicker?.to, "end")),
                });
        }
    }, [datePicker, firtLoad]);
    function convertDate(date, type) {
        return new Date(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${type === "start" ? "00:00:00" : "23:59:59"} ${convertTimezone(timezoneDate)}`);
    }
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("grid gap-2"), children: (0, jsx_runtime_1.jsxs)(popover_1.Popover, { open: open, onOpenChange: (open) => setOpen(open), children: [(0, jsx_runtime_1.jsx)(popover_1.PopoverTrigger, { children: (0, jsx_runtime_1.jsxs)("div", { id: "date", className: (0, utils_1.cn)("w-full justify-start text-left font-normal px-4 py-2 rounded-[6px] border-[1px] border-gray-300 flex items-center h-11", !datePicker && "text-muted-foreground"), children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Calendar, { className: "mr-2 h-4 w-4" }), datePicker?.from ? (datePicker.to ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [datePicker.from.toLocaleDateString().replaceAll("-", "/"), " -", " ", datePicker.to.toLocaleDateString().replaceAll("-", "/")] })) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: datePicker.from.toLocaleDateString() }))) : ((0, jsx_runtime_1.jsx)("span", { children: "All time" }))] }) }), (0, jsx_runtime_1.jsx)(popover_1.PopoverContent, { className: "w-auto p-0", align: "start", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex rounded-[10px]", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col px-4 py-3 border-r-[1px] border-gray-100", children: [(0, jsx_runtime_1.jsx)("div", { onClick: () => setDatePicker({
                                            from: new Date((0, moment_1.default)()
                                                .toDate()
                                                .toLocaleString("en-US", { timeZone: timezoneDate })),
                                            to: new Date((0, moment_1.default)()
                                                .toDate()
                                                .toLocaleString("en-US", { timeZone: timezoneDate })),
                                        }), className: "w-full text-gray-900 hover:bg-primary-25 hover:text-primary-500 px-4 py-[10px] rounded-[6px] text-textSM cursor-pointer", children: "Today" }), (0, jsx_runtime_1.jsx)("div", { onClick: () => {
                                            console.log((0, moment_1.default)().endOf("week").toDate());
                                            setDatePicker({
                                                from: (0, moment_1.default)().startOf("week").toDate(),
                                                to: (0, moment_1.default)().endOf("week").toDate(),
                                            });
                                        }, className: "w-full text-gray-900 hover:bg-primary-25 hover:text-primary-500 px-4 py-[10px] rounded-[6px] text-textSM cursor-pointer", children: "This week" }), (0, jsx_runtime_1.jsx)("div", { onClick: () => setDatePicker({
                                            from: (0, moment_1.default)(new Date()).startOf("month").toDate(),
                                            to: (0, moment_1.default)(new Date()).endOf("month").toDate(),
                                        }), className: "w-full text-gray-900 hover:bg-primary-25 hover:text-primary-500 px-4 py-[10px] rounded-[6px] text-textSM cursor-pointer", children: "This month" }), (0, jsx_runtime_1.jsx)("div", { onClick: () => setDatePicker({
                                            from: (0, moment_1.default)(new Date()).startOf("year").toDate(),
                                            to: (0, moment_1.default)(new Date()).endOf("year").toDate(),
                                        }), className: "w-full text-gray-900 hover:bg-primary-25 hover:text-primary-500 px-4 py-[10px] rounded-[6px] text-textSM cursor-pointer", children: "This year" }), (0, jsx_runtime_1.jsx)("div", { onClick: () => setDatePicker({ from: undefined, to: undefined }), className: "w-full text-gray-900 hover:bg-primary-25 hover:text-primary-500 px-4 py-[10px] rounded-[6px] text-textSM cursor-pointer", children: "All time" })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(calendar_1.Calendar, { initialFocus: true, mode: "range", defaultMonth: datePicker?.from, selected: datePicker, onSelect: setDatePicker, numberOfMonths: 2, className: "border-b-[1px] border-gray-300" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-end items-center flex-row gap-4 px-4 py-3", children: [(0, jsx_runtime_1.jsx)(__1.Button, { content: "Cancel", color: "gray", hierarchy: "secondary", size: "md", onClick: () => {
                                                    setOpen(false);
                                                    setDatePicker(date);
                                                } }), (0, jsx_runtime_1.jsx)(__1.Button, { content: "Apply", color: "blue", hierarchy: "primary", size: "md", onClick: () => {
                                                    setOpen(false);
                                                    if (datePicker?.from && !datePicker?.to) {
                                                        setDate({
                                                            from: new Date(convertDate(datePicker?.from, "start")),
                                                            to: new Date(convertDate(datePicker?.from, "end")),
                                                        });
                                                        setDatePicker({
                                                            ...datePicker,
                                                            to: datePicker?.from,
                                                        });
                                                    }
                                                    else if (datePicker?.from && datePicker?.to)
                                                        setDate({
                                                            from: new Date(convertDate(datePicker.from, "start")),
                                                            to: new Date(convertDate(datePicker?.to, "end")),
                                                        });
                                                } })] })] })] }) })] }) }));
}
exports.default = RangeDatePicker;
