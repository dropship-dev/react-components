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
exports.Input = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const utils_1 = require("../lib/utils");
const Input = React.forwardRef(({ className, type, small, label, subLabel, iconPre, iconAfter, placeholder, ...props }, ref) => {
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { className: `text-[14px]  ${small ? "w-[107px] h-[20px]" : "w-[262px] h-[24px]"}  h-[24px] font-medium	leading-[20px] text-slate-500	`, children: label ?? "" }), (0, jsx_runtime_1.jsxs)("div", { className: (0, utils_1.cn)(`bg-transparent flex justify-between items-center py-[9px] px-[12px] border border-solid  rounded-[8px] `), children: [iconPre, (0, jsx_runtime_1.jsx)("input", { placeholder: placeholder, type: type, className: (0, utils_1.cn)(`flex h-[24px] w-full rounded-md focus:outline-none bg-transparent px-3 py-2 text-sm ring-offset-background file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground    disabled:cursor-not-allowed disabled:opacity-50 `), ref: ref, ...props }), iconAfter] }), (0, jsx_runtime_1.jsx)("p", { className: "text=[12px] font-normal\tleading-[28px] text-slate-400\t", children: subLabel ?? "" })] }));
});
exports.Input = Input;
Input.displayName = "Input";
