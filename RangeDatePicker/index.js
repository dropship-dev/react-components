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
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const utils_1 = require("../lib/utils");
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
/* ---------- Helpers TZ-safe ---------- */
const nowTz = (tz) => moment_timezone_1.default.tz(tz);
const startOfDayTz = (d, tz) => moment_timezone_1.default.tz(d, tz).startOf("day").toDate();
const endOfDayTz = (d, tz) => moment_timezone_1.default.tz(d, tz).endOf("day").milliseconds(0).toDate();
const rangeFromPreset = (tz, preset) => {
    const m = nowTz(tz);
    switch (preset) {
        case RangeDatePickerDefaultValues.TODAY:
            return {
                from: m.clone().startOf("day").toDate(),
                to: m.clone().endOf("day").milliseconds(0).toDate(),
            };
        case RangeDatePickerDefaultValues.THIS_WEEK:
            return {
                from: m.clone().startOf("isoWeek").toDate(),
                to: m.clone().endOf("isoWeek").milliseconds(0).toDate(),
            };
        case RangeDatePickerDefaultValues.THIS_MONTH:
            return {
                from: m.clone().startOf("month").toDate(),
                to: m.clone().endOf("month").milliseconds(0).toDate(),
            };
        case RangeDatePickerDefaultValues.THIS_YEAR:
            return {
                from: m.clone().startOf("year").toDate(),
                to: m.clone().endOf("year").milliseconds(0).toDate(),
            };
        default:
            return { from: undefined, to: undefined };
    }
};
function RangeDatePicker(props) {
    const { date, setDate, timezone = "America/Los_Angeles", defaultValues, } = props;
    const [presetLabel, setPresetLabel] = React.useState(defaultValues ?? "");
    const [open, setOpen] = React.useState(false);
    const [datePicker, setDatePicker] = React.useState(() => rangeFromPreset(timezone, defaultValues));
    React.useEffect(() => {
        if (!defaultValues)
            return;
        const r = rangeFromPreset(timezone, defaultValues);
        setDatePicker(r);
        if (r.from && r.to) {
            setDate({
                from: startOfDayTz(r.from, timezone),
                to: endOfDayTz(r.to, timezone),
            });
        }
        else {
            setDate(undefined);
        }
    }, [defaultValues, timezone, setDate]);
    React.useEffect(() => {
        setPresetLabel(defaultValues ?? "");
    }, [defaultValues]);
    const convertRangeToTzDayBounds = React.useCallback((r) => {
        if (!r?.from && !r?.to)
            return undefined;
        if (r?.from && !r?.to) {
            return {
                from: startOfDayTz(r.from, timezone),
                to: endOfDayTz(r.from, timezone),
            };
        }
        if (r?.from && r?.to) {
            return {
                from: startOfDayTz(r.from, timezone),
                to: endOfDayTz(r.to, timezone),
            };
        }
        return undefined;
    }, [timezone]);
    const triggerLabel = React.useMemo(() => {
        if (presetLabel)
            return presetLabel;
        const fmt = (d) => d
            ? d
                .toLocaleDateString("en-GB", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
            })
                .replaceAll("-", "/")
            : "";
        if (datePicker?.from && datePicker?.to)
            return `${fmt(datePicker.from)} - ${fmt(datePicker.to)}`;
        if (datePicker?.from)
            return fmt(datePicker.from);
        return "All time";
    }, [presetLabel, datePicker]);
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("grid gap-2"), children: (0, jsx_runtime_1.jsxs)(popover_1.Popover, { open: open, onOpenChange: setOpen, children: [(0, jsx_runtime_1.jsx)(popover_1.PopoverTrigger, { children: (0, jsx_runtime_1.jsxs)("div", { id: "date", className: (0, utils_1.cn)("w-fit justify-start text-left font-normal px-4 py-2 rounded-[6px] border border-gray-300 flex items-center h-10 whitespace-nowrap", open && "shadow-[#DBDDFF] shadow-[0_0_0_4px]"), children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Calendar, { className: "mr-2 h-4 w-4" }), triggerLabel] }) }), (0, jsx_runtime_1.jsx)(popover_1.PopoverContent, { className: "w-auto p-0", align: "start", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex rounded-[10px]", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col px-4 py-3 border-r border-gray-100 min-w-[160px]", children: [(0, jsx_runtime_1.jsx)(PresetItem, { label: "Today", onClick: () => {
                                            setPresetLabel("Today");
                                            setDatePicker(rangeFromPreset(timezone, RangeDatePickerDefaultValues.TODAY));
                                        } }), (0, jsx_runtime_1.jsx)(PresetItem, { label: "This week", onClick: () => {
                                            setPresetLabel("This week");
                                            setDatePicker(rangeFromPreset(timezone, RangeDatePickerDefaultValues.THIS_WEEK));
                                        } }), (0, jsx_runtime_1.jsx)(PresetItem, { label: "This month", onClick: () => {
                                            setPresetLabel("This month");
                                            setDatePicker(rangeFromPreset(timezone, RangeDatePickerDefaultValues.THIS_MONTH));
                                        } }), (0, jsx_runtime_1.jsx)(PresetItem, { label: "This year", onClick: () => {
                                            setPresetLabel("This year");
                                            setDatePicker(rangeFromPreset(timezone, RangeDatePickerDefaultValues.THIS_YEAR));
                                        } }), (0, jsx_runtime_1.jsx)(PresetItem, { label: "All time", onClick: () => {
                                            setPresetLabel("All time");
                                            setDatePicker({ from: undefined, to: undefined });
                                        } })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(calendar_1.Calendar, { initialFocus: true, mode: "range", defaultMonth: datePicker?.from, selected: datePicker, onSelect: (r) => {
                                            setPresetLabel("");
                                            setDatePicker(r);
                                        }, numberOfMonths: 2, className: "border-b border-gray-300" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-end items-center gap-4 px-4 py-3", children: [(0, jsx_runtime_1.jsx)(__1.Button, { content: "Cancel", color: "gray", hierarchy: "secondary", size: "md", onClick: () => {
                                                    setOpen(false);
                                                    setDatePicker(date);
                                                    setPresetLabel(defaultValues ?? presetLabel);
                                                } }), (0, jsx_runtime_1.jsx)(__1.Button, { content: "Apply", color: "blue", hierarchy: "primary", size: "md", onClick: () => {
                                                    setOpen(false);
                                                    const normalized = convertRangeToTzDayBounds(datePicker);
                                                    setDate(normalized);
                                                    if (datePicker?.from && !datePicker?.to) {
                                                        setDatePicker({
                                                            from: datePicker.from,
                                                            to: datePicker.from,
                                                        });
                                                    }
                                                } })] })] })] }) })] }) }));
}
exports.default = RangeDatePicker;
function PresetItem({ label, onClick, }) {
    return ((0, jsx_runtime_1.jsx)("div", { onClick: onClick, className: "w-full text-gray-900 hover:bg-primary-25 hover:text-primary-500 px-4 py-[10px] rounded-[6px] text-textSM cursor-pointer", children: label }));
}
