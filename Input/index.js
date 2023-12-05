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
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const Input = React.forwardRef(({ className, type, small, label, subLabel, iconPre, iconAfter, placeholder, error, errorMessage, labelClassName, ...props }, ref) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "gap-[6px] flex flex-col", children: [label && ((0, jsx_runtime_1.jsx)("div", { className: `font-medium text-textSM text-gray-500 ${labelClassName}`, children: label })), (0, jsx_runtime_1.jsxs)("div", { className: `bg-transparent flex justify-between items-center py-2 px-3 rounded-[8px] border border-solid focus-within:shadow-[#DBDDFF] focus-within:shadow-[0_0_0_3px]  ${errorMessage || error ? "border-red-500" : "border-gray-300"} `, children: [iconPre, (0, jsx_runtime_1.jsx)("input", { placeholder: placeholder, type: type, className: `flex h-[26px] w-full text-[16px] font-medium text-black leading-[24px] bg-transparent focus:outline-none my-auto ${iconPre ? "pl-2" : ""} pr-3 py-2 ring-offset-background file:bg-transparent file:text-sm file:font-semibold placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 `, ref: ref, ...props }), iconAfter] }), errorMessage && ((0, jsx_runtime_1.jsx)("div", { className: "font-normal text-textXS text-destructive-500", children: errorMessage })), subLabel && ((0, jsx_runtime_1.jsx)("div", { className: "text-textXS font-normal text-gray-700", children: subLabel }))] }));
});
Input.displayName = "Input";
exports.default = Input;
