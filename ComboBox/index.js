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
const react_icons_1 = require("@radix-ui/react-icons");
const utils_1 = require("../lib/utils");
const __1 = require("../");
const command_1 = require("./components/command");
const popover_1 = require("./components/popover");
function Combobox(props) {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");
    const { data, content } = props;
    return ((0, jsx_runtime_1.jsxs)(popover_1.Popover, { open: open, onOpenChange: setOpen, children: [(0, jsx_runtime_1.jsx)(popover_1.PopoverTrigger, { asChild: true, children: (0, jsx_runtime_1.jsx)(__1.Button, { role: "combobox", className: "w-full justify-between", content: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row gap-8 items-center border-[1px] border-solid border-gray-400 px-3 py-4 rounded-[6px] min-w-[200px] text-textmd font-medium", children: [value
                                ? data.find((item) => item.value === value)?.label
                                : `Select ${content}...`, (0, jsx_runtime_1.jsx)(react_icons_1.CaretSortIcon, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })] }) }) }), (0, jsx_runtime_1.jsx)(popover_1.PopoverContent, { className: "w-[200px] px-2 py-1 text-textmd font-medium", children: (0, jsx_runtime_1.jsxs)(command_1.Command, { children: [(0, jsx_runtime_1.jsx)(command_1.CommandInput, { placeholder: `Search ${content} ...`, className: "h-9" }), (0, jsx_runtime_1.jsxs)(command_1.CommandEmpty, { children: ["No ", content, " found."] }), (0, jsx_runtime_1.jsx)(command_1.CommandGroup, { children: data.map((item) => ((0, jsx_runtime_1.jsxs)(command_1.CommandItem, { onSelect: (currentValue) => {
                                    setValue(currentValue === value ? "" : currentValue);
                                    setOpen(false);
                                }, children: [item.label, (0, jsx_runtime_1.jsx)(react_icons_1.CheckIcon, { className: (0, utils_1.cn)("ml-auto h-4 w-4", value === item.value ? "opacity-100" : "opacity-0") })] }, item.value))) })] }) })] }));
}
exports.default = Combobox;
