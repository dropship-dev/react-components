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
const labelVariants = (0, class_variance_authority_1.cva)("peer-disabled:cursor-not-allowed peer-disabled:opacity-70", {
    variants: {
        frontWeight: {
            thin: "font-[100]",
            extralight: "font-[200]",
            light: "font-[300]",
            normal: "font-[400]",
            medium: "font-[500]",
            semibold: "font-[600]",
            bold: "font-[700]",
            extrabold: "font-[800]",
            black: "font-[900]",
        },
        size: {
            textxs: "text-textxs",
            textsm: "text-textsm",
            textmd: "text-textmd",
            textlg: "text-textlg",
            textxl: "text-textxl",
            displayxs: "text-displayxs",
            displaysm: "text-displaysm",
            displaymd: "text-displaymd",
            displaylg: "text-displaylg",
            displayxl: "text-displayxl",
            display2xl: "text-display2xl",
        },
    },
});
const Label = React.forwardRef(({ className, size, frontWeight, content, ...props }, ref) => ((0, jsx_runtime_1.jsx)(LabelPrimitive.Root, { ref: ref, className: (0, utils_1.cn)(labelVariants({ frontWeight, size }), className), ...props, children: content })));
Label.displayName = LabelPrimitive.Root.displayName;
exports.default = Label;
