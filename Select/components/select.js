"use strict";
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
exports.SelectValue = exports.SelectTrigger = exports.SelectSeparator = exports.SelectPrimitive = exports.SelectLabel = exports.SelectItem = exports.SelectGroup = exports.SelectContent = exports.Select = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const SelectPrimitive = __importStar(require("@radix-ui/react-select"));
exports.SelectPrimitive = SelectPrimitive;
const lucide_react_1 = require("lucide-react");
const React = __importStar(require("react"));
const utils_1 = require("../../lib/utils");
const Select = SelectPrimitive.Root;
exports.Select = Select;
const SelectGroup = SelectPrimitive.Group;
exports.SelectGroup = SelectGroup;
const SelectValue = SelectPrimitive.Value;
exports.SelectValue = SelectValue;
const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => ((0, jsx_runtime_1.jsxs)(SelectPrimitive.Trigger, { ref: ref, className: (0, utils_1.cn)("flex focus:outline-none flex-row w-full items-center justify-between rounded-md bg-transparent px-3 py-2 text-[14px] placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className), ...props, children: [children, (0, jsx_runtime_1.jsx)(SelectPrimitive.Icon, { asChild: true, children: (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronDown, { className: "h-[20px] w-[20px] disabled:opacity-50 flex items-center" }) })] })));
exports.SelectTrigger = SelectTrigger;
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => ((0, jsx_runtime_1.jsx)(SelectPrimitive.Portal, { children: (0, jsx_runtime_1.jsx)(SelectPrimitive.Content, { ref: ref, className: (0, utils_1.cn)("relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80", position === "popper" && "translate-y-1", className), position: position, ...props, children: (0, jsx_runtime_1.jsx)(SelectPrimitive.Viewport, { className: (0, utils_1.cn)("py-1", position === "popper" &&
                "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"), children: children }) }) })));
exports.SelectContent = SelectContent;
SelectContent.displayName = SelectPrimitive.Content.displayName;
const SelectLabel = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)(SelectPrimitive.Label, { ref: ref, className: (0, utils_1.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold", className), ...props })));
exports.SelectLabel = SelectLabel;
SelectLabel.displayName = SelectPrimitive.Label.displayName;
const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => ((0, jsx_runtime_1.jsxs)(SelectPrimitive.Item, { ref: ref, className: (0, utils_1.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-[6px] text-[14px] outline-none  data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className), ...props, children: [(0, jsx_runtime_1.jsx)("span", { className: "absolute right-2 pr-[10px] flex h-3.5 w-3.5 items-center justify-center", children: (0, jsx_runtime_1.jsx)(SelectPrimitive.ItemIndicator, { children: (0, jsx_runtime_1.jsx)(lucide_react_1.Check, { className: "h-[20px] w-[20px]" }) }) }), (0, jsx_runtime_1.jsx)(SelectPrimitive.ItemText, { children: children })] })));
exports.SelectItem = SelectItem;
SelectItem.displayName = SelectPrimitive.Item.displayName;
const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)(SelectPrimitive.Separator, { ref: ref, className: (0, utils_1.cn)("-mx-1 my-1 h-px bg-muted", className), ...props })));
exports.SelectSeparator = SelectSeparator;
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
