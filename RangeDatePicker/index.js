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
const React = __importStar(require("react"));
const date_fns_1 = require("date-fns");
const lucide_react_1 = require("lucide-react");
const utils_1 = require("../lib/utils");
const calendar_1 = require("./components/calendar");
const popover_1 = require("../ComboBox/components/popover");
const __1 = require("..");
const moment_1 = __importDefault(require("moment"));
function RangeDatePicker(props) {
    const { date, setDate } = props;
    // const [date, setDate] = React.useState<DateRange | undefined>();
    const [open, setOpen] = React.useState(false);
    var startOfWeek = (0, moment_1.default)().startOf("week").toDate();
    var endOfWeek = (0, moment_1.default)().endOf("week").toDate();
    var startOfMonth = (0, moment_1.default)().startOf("month").toDate();
    var endOfMonth = (0, moment_1.default)().endOf("month").toDate();
    var startOfYear = (0, moment_1.default)().startOf("year").toDate();
    var endOfYear = (0, moment_1.default)().endOf("year").toDate();
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("grid gap-2"), children: (0, jsx_runtime_1.jsxs)(popover_1.Popover, { open: open, onOpenChange: (open) => setOpen(open), children: [(0, jsx_runtime_1.jsx)(popover_1.PopoverTrigger, { children: (0, jsx_runtime_1.jsxs)("div", { id: "date", className: (0, utils_1.cn)("w-full justify-start text-left font-normal px-4 py-2 rounded-[6px] border-[1px] border-gray-300 flex items-center", !date && "text-muted-foreground"), children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Calendar, { className: "mr-2 h-4 w-4" }), date?.from ? (date.to ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, date_fns_1.format)(date.from, "dd/MM/yyyy"), " -", " ", (0, date_fns_1.format)(date.to, "dd/MM/yyyy")] })) : ((0, date_fns_1.format)(date.from, "dd/MM/yyyy"))) : ((0, jsx_runtime_1.jsx)("span", { children: "All time" }))] }) }), (0, jsx_runtime_1.jsx)(popover_1.PopoverContent, { className: "w-auto p-0", align: "start", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex rounded-[10px]", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col px-4 py-3 border-r-[1px] border-gray-100", children: [(0, jsx_runtime_1.jsx)("div", { onClick: () => setDate({
                                            from: new Date(),
                                            to: new Date(),
                                        }), className: "w-full text-gray-900 hover:bg-primary-25 hover:text-primary-500 px-4 py-[10px] rounded-[6px] text-textSM cursor-pointer", children: "Today" }), (0, jsx_runtime_1.jsx)("div", { onClick: () => setDate({
                                            from: startOfWeek,
                                            to: endOfWeek,
                                        }), className: "w-full text-gray-900 hover:bg-primary-25 hover:text-primary-500 px-4 py-[10px] rounded-[6px] text-textSM cursor-pointer", children: "This week" }), (0, jsx_runtime_1.jsx)("div", { onClick: () => setDate({
                                            from: startOfMonth,
                                            to: endOfMonth,
                                        }), className: "w-full text-gray-900 hover:bg-primary-25 hover:text-primary-500 px-4 py-[10px] rounded-[6px] text-textSM cursor-pointer", children: "This month" }), (0, jsx_runtime_1.jsx)("div", { onClick: () => setDate({
                                            from: startOfYear,
                                            to: endOfYear,
                                        }), className: "w-full text-gray-900 hover:bg-primary-25 hover:text-primary-500 px-4 py-[10px] rounded-[6px] text-textSM cursor-pointer", children: "This year" }), (0, jsx_runtime_1.jsx)("div", { onClick: () => setDate(undefined), className: "w-full text-gray-900 hover:bg-primary-25 hover:text-primary-500 px-4 py-[10px] rounded-[6px] text-textSM cursor-pointer", children: "All time" })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(calendar_1.Calendar, { initialFocus: true, mode: "range", defaultMonth: date?.from, selected: date, onSelect: setDate, numberOfMonths: 2, className: "border-b-[1px] border-gray-300" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-end items-center flex-row gap-4 px-4 py-3", children: [(0, jsx_runtime_1.jsx)(__1.Button, { content: "Cancle", color: "gray", hierarchy: "secondary", size: "md", onClick: () => {
                                                    setOpen(false);
                                                    setDate(undefined);
                                                } }), (0, jsx_runtime_1.jsx)(__1.Button, { content: "Apply", color: "blue", hierarchy: "primary", size: "md", onClick: () => setOpen(false) })] })] })] }) })] }) }));
}
exports.default = RangeDatePicker;
