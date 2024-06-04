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
exports.SwitchPrimitives = exports.Switch = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const SwitchPrimitives = __importStar(require("@radix-ui/react-switch"));
exports.SwitchPrimitives = SwitchPrimitives;
const React = __importStar(require("react"));
const utils_1 = require("../../lib/utils");
const Switch = React.forwardRef(({ className, danger, ...props }, ref) => ((0, jsx_runtime_1.jsx)(SwitchPrimitives.Root, { className: (0, utils_1.cn)(`peer inline-flex h-[20px] w-[32px] shrink-0 cursor-pointer items-center rounded-full border-[3px] border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-success ${danger
        ? " data-[state=unchecked]:bg-red-500"
        : " data-[state=unchecked]:bg-switch"}`, className), ...props, ref: ref, children: (0, jsx_runtime_1.jsx)(SwitchPrimitives.Thumb, { className: (0, utils_1.cn)("pointer-events-none block h-[14px] w-[14px] rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-[12px] data-[state=unchecked]:translate-x-0") }) })));
exports.Switch = Switch;
Switch.displayName = SwitchPrimitives.Root.displayName;
