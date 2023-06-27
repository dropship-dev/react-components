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
const buttonVariants = (0, class_variance_authority_1.cva)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background", {
    variants: {
        variant: {
            primary: "bg-primary text-primary-foreground hover:bg-primary/90 focus:bg-primary-focus text-white",
            destructive: "bg-destructive-500 text-white hover:bg-destructive-600 active:bg-destructive-700",
            outline: "border border-input hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-[#4856F3] text-secondary-foreground hover:bg-secondary/80 text-white",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary",
            normal: "bg-white text-white-foreground hover:bg-white-foreground focus:bg-white-focus text-black",
        },
        line: {
            underline: "underline-offset-4 hover:underline",
        },
        size: {
            default: "py-[14px] px-[18px] h-[36px] rounded-[7px] text-[16px] leading-[24px]",
            xs: "h-[24px] rounded-[6px] py-[8px] px-[10px] text-[14px] leading-[20px]",
            xl: "h-[30px] rounded-[6px] py-[11px] px-[12px] text-[16px] leading-[24px]",
            sm: "h-[44px] rounded-[8px] py-[17px] px-[20px] text-[18px] leading-[28px]",
            lg: "h-[50px] rounded-[10px] py-[19px] px-[24px] text-[20px] leading-[30px]",
        },
        rounded: {
            full: "rounded-full",
            none: "rounded-none",
        },
        border: {
            normal: "border border-solid ",
            default: "border-0 ",
        },
    },
    defaultVariants: {
        variant: "primary",
        size: "default",
        border: "normal",
    },
});
exports.buttonVariants = buttonVariants;
const iconButtonVariants = (0, class_variance_authority_1.cva)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background", {
    variants: {
        variant: {
            primary: "bg-primary text-primary-foreground hover:bg-primary/90 focus:bg-primary-focus text-white",
            destructive: "bg-destructive-500 text-white hover:bg-destructive-600 active:bg-destructive-700",
            outline: "border border-input hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-[#4856F3] text-secondary-foreground hover:bg-secondary/80 text-white",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary",
            normal: "bg-white text-white-foreground hover:bg-white-foreground focus:bg-white-focus text-black",
        },
        line: {
            underline: "underline-offset-4 hover:underline",
        },
        size: {
            default: "py-[14px] px-[18px] h-[36px] rounded-[7px] text-[16px] leading-[24px]",
            xs: "h-[24px] rounded-[6px] py-[8px] px-[10px] text-[14px] leading-[20px]",
            xl: "h-[30px] rounded-[6px] py-[11px] px-[12px] text-[16px] leading-[24px]",
            sm: "h-[44px] rounded-[8px] py-[17px] px-[20px] text-[18px] leading-[28px]",
            lg: "h-[50px] rounded-[10px] py-[19px] px-[24px] text-[20px] leading-[30px]",
        },
        border: {
            normal: "border border-solid ",
            default: "border-0 ",
        },
    },
    defaultVariants: {
        variant: "primary",
        size: "default",
        border: "normal",
    },
});
const Button = React.forwardRef(({ className, variant, size, content, border, rounded, ...props }, ref) => {
    const Comp = "button";
    return ((0, jsx_runtime_1.jsx)(Comp, { style: { borderRadius: rounded ? "50%" : "0" }, className: (0, utils_1.cn)(buttonVariants({ variant, size, border, rounded, className })), ref: ref, ...props, children: content }));
});
exports.Button = Button;
const IconButton = React.forwardRef(({ className, variant, size, child, border, ...props }, ref) => {
    const Comp = "button";
    return ((0, jsx_runtime_1.jsx)(Comp, { className: (0, utils_1.cn)(buttonVariants({ variant, size, border, className })), ref: ref, ...props, children: child }));
});
exports.IconButton = IconButton;
Button.displayName = "Button";
IconButton.displayName = "IconButton";
