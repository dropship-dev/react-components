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
exports.Chip = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const LabelPrimitive = __importStar(require("@radix-ui/react-label"));
const class_variance_authority_1 = require("class-variance-authority");
const utils_1 = require("../lib/utils");
const ChipVariants = (0, class_variance_authority_1.cva)("peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[14px] font-medium ", {
    variants: {
        variant: {
            success: "bg-success-100 text-success-700 border-success-400",
            danger: "bg-destructive-100 text-destructive-700 border-destructive-400",
            warning: "bg-warning-100 text-warning-700 border-warning-400",
            gray: "bg-gray-300 text-gray-900 border-gray-400",
            primary: "bg-primary-100 text-primary-500 border-primary-400",
        },
        status: {
            active: "opacity-100",
            deactivate: "opacity-50",
        },
        size: {
            sm: "h-[24px] px-[8px] py-[3px] rounded-[12px]",
            md: "h-[40px] px-[12px] py-[6px] rounded-[15px] border-solid border-[1px]",
        },
    },
});
const Chip = React.forwardRef(({ className, content, variant, status, size, ...props }, ref) => ((0, jsx_runtime_1.jsx)(LabelPrimitive.Root, { ref: ref, className: (0, utils_1.cn)(ChipVariants({ variant, status, size, className })), ...props, children: content })));
exports.Chip = Chip;
Chip.displayName = LabelPrimitive.Root.displayName;
