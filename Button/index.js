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
exports.IconButton = exports.buttonVariants = exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const class_variance_authority_1 = require("class-variance-authority");
const utils_1 = require("../lib/utils");
const buttonVariants = (0, class_variance_authority_1.cva)("inline-flex items-center font-semibold justify-center rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background", {
    variants: {
        bgColor: {
            primary: "bg-primary-500 hover:bg-primary-400 active:bg-primary-500 border-primary-500 focus:shadow-[#EAECF0] text-white",
            destructive: "bg-destructive-500 hover:bg-destructive-600 active:bg-destructive-700 border-destructive-400 focus:shadow-[#FDE4F2] text-white",
            // danger:
            //   "bg-inherit hover:bg-destructive-100 active:bg-destructive-400 border-destructive-400 focus:shadow-[#FDE4F2] focus:shadow-[0_0_0_4px] text-destructive-500",
            secondary: "bg-primary-25 hover:bg-primary-50 active:bg-primary-100 focus:shadow-[#DBDDFF] border-primary-500 text-primary-500",
            normal: "bg-white hover:bg-gray-100 active:bg-gray-300 border-gray-400 focus:shadow-[#EAECF0] text-black",
            // normalPrimary:
            //   "text-primary-500 focus:text-primary-600 active:text-primary-700 border-primary-500",
            // normalDestructive:
            //   "text-destructive-500 focus:text-destructive-600 active:text-destructive-700 border-destructive-400",
        },
        size: {
            xs: "h-[24px] rounded-[6px] py-[8px] px-[10px] text-[14px] leading-[20px]",
            sm: "h-[30px] rounded-[6px] py-[11px] px-[12px] text-[16px] leading-[24px]",
            md: "h-[36px] rounded-[7px] py-[14px] px-[18px] text-[16px] leading-[24px]",
            lg: "h-[44px] rounded-[8px] py-[17px] px-[20px] text-[18px] leading-[28px]",
            xl: "h-[50px] rounded-[10px] py-[19px] px-[24px] text-[20px] leading-[30px]",
        },
        border: {
            normal: "border border-solid focus:shadow-[0_0_0_4px]",
            none: "border-0",
        },
    },
    defaultVariants: {
        bgColor: "primary",
        size: "md",
        border: "none",
    },
});
exports.buttonVariants = buttonVariants;
const buttonVariantsType = (0, class_variance_authority_1.cva)("inline-flex items-center font-semibold justify-center rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background", {
    variants: {
        bgColor: {
            primary: "bg-inherit hover:bg-primary-50 active:bg-primary-100 border-primary-500 focus:shadow-[##DBDDFF] text-primary",
            destructive: "bg-inherit hover:bg-destructive-100 active:bg-destructive-200 border-destructive-400 focus:shadow-[#FDE4F2] text-destructive-500",
            secondary: "bg-inherit hover:bg-primary-50 active:bg-primary-100 focus:shadow-[#DBDDFF] border-primary-500 text-primary-500",
            normal: "bg-inherit hover:bg-gray-100 active:bg-gray-300 border-gray-400 focus:shadow-[#EAECF0] text-black",
        },
        size: {
            xs: "h-[24px] rounded-[6px] py-[8px] px-[10px] text-[14px] leading-[20px]",
            sm: "h-[30px] rounded-[6px] py-[11px] px-[12px] text-[16px] leading-[24px]",
            md: "h-[36px] rounded-[7px] py-[14px] px-[18px] text-[16px] leading-[24px]",
            lg: "h-[44px] rounded-[8px] py-[17px] px-[20px] text-[18px] leading-[28px]",
            xl: "h-[50px] rounded-[10px] py-[19px] px-[24px] text-[20px] leading-[30px]",
        },
        border: {
            normal: "border border-solid focus:shadow-[0_0_0_4px]",
            none: "border-0",
        },
    },
    defaultVariants: {
        bgColor: "primary",
        size: "md",
        border: "none",
    },
});
const iconButtonVariants = (0, class_variance_authority_1.cva)("inline-flex items-center justify-center", {
    variants: {
        bgColor: {
            primary: "bg-primary-100 hover:bg-primary-400 active:bg-primary-500 border-primary-500p focus:shadow-[#EAECF0] focus:shadow-[0_0_0_4px]",
            destructive: "bg-destructive-500 hover:bg-destructive-600 active:bg-destructive-700 border-destructive-400 focus:shadow-[#FDE4F2] focus:shadow-[0_0_0_4px]",
            secondary: "bg-white hover:bg-primary-50 shadow-none active:bg-primary-100 focus:shadow-[#DBDDFF] border-primary-500 focus:shadow-[0_0_0_4px] text-white",
            normal: "bg-white hover:bg-white-foreground shadow-none focus:bg-white-focus border-gray-400 focus:shadow-[#EAECF0] focus:shadow-[0_0_0_4px]",
        },
        size: {
            xs: "h-[24px] w-[24px] rounded-[6px] ",
            sm: "h-[30px] w-[30px] rounded-[6px] ",
            md: "h-[36px] w-[36px] rounded-[7px] ",
            lg: "h-[44px] w-[44px] rounded-[8px] ",
            xl: "h-[50px] w-[50px] rounded-[10px] ",
        },
        border: {
            normal: "border border-solid",
            none: "border-0",
        },
    },
    defaultVariants: {
        bgColor: "primary",
        size: "md",
        border: "none",
    },
});
const Button = React.forwardRef(({ className, bgColor, size, border, content, bgType, ...props }, ref) => {
    const Comp = "button";
    console.log();
    return ((0, jsx_runtime_1.jsx)(Comp, { className: (0, utils_1.cn)(bgType
            ? buttonVariants({
                bgColor,
                size,
                border,
                className,
            })
            : buttonVariantsType({
                bgColor,
                size,
                border,
                className,
            })), ref: ref, ...props, children: content }));
});
exports.Button = Button;
const IconButton = React.forwardRef(({ className, bgColor, size, child, border, roundedFull, ...props }, ref) => {
    const Comp = "button";
    console.log();
    return ((0, jsx_runtime_1.jsx)(Comp, { style: {
            borderRadius: roundedFull ? "50%" : "",
            backgroundColor: bgColor ? "white" : "",
        }, className: (0, utils_1.cn)(iconButtonVariants({ bgColor, size, border, className })), ref: ref, ...props, children: child }));
});
exports.IconButton = IconButton;
Button.displayName = "Button";
IconButton.displayName = "IconButton";
