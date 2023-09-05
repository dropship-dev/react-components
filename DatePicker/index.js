"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const lucide_react_1 = require("lucide-react");
const popover_1 = require("../ComboBox/components/popover");
const calendar_1 = require("../RangeDatePicker/components/calendar");
const __1 = require("..");
const DatePicker = (props) => {
    const { date, setDate } = props;
    return ((0, jsx_runtime_1.jsxs)(popover_1.Popover, { children: [(0, jsx_runtime_1.jsx)(popover_1.PopoverTrigger, { asChild: true, style: { borderRadius: "6px" }, className: "w-full border-[1px] border-gray-300 rounded-[6px] h-11 flex items-center justify-start px-4 py-2", children: (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(__1.Button, { content: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row items-center w-full float-left", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Calendar, { className: "mr-2 h-4 w-4" }), (0, jsx_runtime_1.jsx)("div", { className: "text-textSM font-normal", children: date
                                        ? date.toLocaleDateString().replaceAll("-", "/")
                                        : "Pick a date" })] }) }) }) }), (0, jsx_runtime_1.jsx)(popover_1.PopoverContent, { className: "w-auto p-0", children: (0, jsx_runtime_1.jsx)(calendar_1.Calendar, { mode: "single", selected: date, onSelect: setDate, initialFocus: true }) })] }));
};
exports.default = DatePicker;
