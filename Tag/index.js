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
const react_icons_1 = require("@radix-ui/react-icons");
const utils_1 = require("../lib/utils");
const TagVariants = (0, class_variance_authority_1.cva)("leading-[20px] font-[400] border-[1px] border-solid hover:bg-primary-25 hover:border-primary-500 active:bg-primary-100 flex flex-row gap-[8px] items-center w-fit py-[6px] px-[10px] focus:shadow-[#EAECF0] focus:shadow-[0_0_0_4px]", {
    variants: {
        size: {
            sm: "h-[34px] text-[12px] rounded-[16px]",
            md: "h-[44px] text-[16px] rounded-[21px]",
        },
    },
});
const Tag = React.forwardRef(({ className, content, size, onCancel, ...props }, ref) => ((0, jsx_runtime_1.jsxs)(LabelPrimitive.Root, { ref: ref, className: (0, utils_1.cn)(TagVariants({ size, className })), ...props, children: [content, (0, jsx_runtime_1.jsx)(react_icons_1.Cross1Icon, { onClick: onCancel })] })));
Tag.displayName = LabelPrimitive.Root.displayName;
exports.default = Tag;
