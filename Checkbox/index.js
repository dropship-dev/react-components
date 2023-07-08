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
const CheckboxPrimitive = __importStar(require("@radix-ui/react-checkbox"));
const lucide_react_1 = require("lucide-react");
const utils_1 = require("../lib/utils");
const Checkbox = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)(CheckboxPrimitive.Root, { ref: ref, className: (0, utils_1.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-neutral-200 border-gray-400 data-[state=checked]:border-primary-500 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-500 data-[state=checked]:text-neutral-50 dark:border-neutral-800 dark:border-neutral-50 dark:ring-offset-primary-500 dark:focus-visible:ring-primary-500 dark:data-[state=checked]:bg-neutral-50 dark:data-[state=checked]:text-white", className), ...props, children: (0, jsx_runtime_1.jsx)(CheckboxPrimitive.Indicator, { className: (0, utils_1.cn)("flex items-center justify-center text-current"), children: (0, jsx_runtime_1.jsx)(lucide_react_1.Check, { className: "h-3 w-3" }) }) })));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
exports.default = Checkbox;
