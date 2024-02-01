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
const LabelPrimitive = __importStar(require("@radix-ui/react-label"));
const class_variance_authority_1 = require("class-variance-authority");
const utils_1 = require("../lib/utils");
const labelVariants = (0, class_variance_authority_1.cva)("peer-disabled:cursor-not-allowed peer-disabled:opacity-70 h-[48px] px-[12px] py-[14px] text-[14px] font-medium rounded-[6px] cursor-pointer", {
    variants: {
        variant: {
            success: "bg-success-50 text-success-600",
            danger: "bg-destructive-50 text-destructive-500",
            gradientSuccess: "bg-success text-success-950",
            gradientDanger: "bg-destructive-400 text-destructive-950",
        },
    },
});
const ToggleTag = React.forwardRef(({ className, content, variant, onClick, ...props }, ref) => ((0, jsx_runtime_1.jsx)(LabelPrimitive.Root, { ref: ref, onClick: onClick, className: (0, utils_1.cn)(labelVariants({ variant, className })), ...props, children: content })));
ToggleTag.displayName = LabelPrimitive.Root.displayName;
exports.default = ToggleTag;
