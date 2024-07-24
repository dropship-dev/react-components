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
const popover_1 = require("../ComboBox/components/popover");
const calendar_1 = require("../RangeDatePicker/components/calendar");
const __1 = require("..");
require("moment-timezone");
const DatePicker = (props) => {
    const { date, setDate, timezone, showOutsideDays, disable, isPopup } = props;
    const moment = require("moment-timezone");
    const [value, setValue] = React.useState(moment()
        .tz(timezone ?? "America/Los_Angeles")
        .startOf("day")
        .toDate());
    React.useEffect(() => {
        setValue(moment(date)
            .tz(timezone ?? "America/Los_Angeles")
            .startOf("day")
            .toDate());
    }, [date]);
    if (isPopup)
        return ((0, jsx_runtime_1.jsx)(calendar_1.Calendar, { disabled: disable, mode: "single", selected: value, onSelect: (d) => {
                setValue(d);
                setDate(moment(value)
                    .tz(timezone ?? "America/Los_Angeles")
                    .startOf("day")
                    .toDate());
            }, initialFocus: true, className: "z-50", showOutsideDays: showOutsideDays }));
    return ((0, jsx_runtime_1.jsxs)(popover_1.Popover, { children: [(0, jsx_runtime_1.jsx)(popover_1.PopoverTrigger, { asChild: true, style: { borderRadius: "6px" }, className: "w-full border-[1px] border-gray-300 rounded-[6px] h-10 flex items-center justify-start px-4 py-2", children: (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(__1.Button, { content: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row items-center w-full float-left", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Calendar, { className: "mr-2 h-4 w-4" }), (0, jsx_runtime_1.jsx)("div", { className: "text-textSM font-normal", children: date
                                        ? date.toLocaleDateString().replaceAll("-", "/")
                                        : "Pick a date" })] }) }) }) }), (0, jsx_runtime_1.jsx)(popover_1.PopoverContent, { className: "w-auto p-0", children: (0, jsx_runtime_1.jsx)(calendar_1.Calendar, { disabled: disable, mode: "single", selected: value, onSelect: (d) => {
                        setValue(d);
                        setDate(moment(value)
                            .tz(timezone ?? "America/Los_Angeles")
                            .startOf("day")
                            .toDate());
                    }, initialFocus: true, className: "z-50", showOutsideDays: showOutsideDays }) })] }));
};
exports.default = DatePicker;
