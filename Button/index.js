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
exports.buttonVariants = exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const react_slot_1 = require("@radix-ui/react-slot");
const class_variance_authority_1 = require("class-variance-authority");
const utils_1 = require("../lib/utils");
const buttonVariants = (0, class_variance_authority_1.cva)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background", {
    variants: {
        variant: {
            primary: "bg-primary text-primary-foreground hover:bg-primary/90 focus:bg-primary-focus text-white",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-[#4856F3] text-secondary-foreground hover:bg-secondary/80 text-white",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "underline-offset-4 hover:underline text-primary ",
            gradient: "bg-indigo-500 text-white",
            normal: "bg-white text-white-foreground hover:bg-white-foreground focus:bg-white-focus text-black",
        },
        size: {
            default: "py-[14px] px-[18px] h-[48px]",
            xs: "h-[36px] rounded-md py-[8px] px-[10px]",
            xl: "h-[42px] rounded-md py-[11px] px-[12px]",
            sm: "h-[42px] rounded-md py-[17px] px-[20px]",
            lg: "h-[42px] rounded-md py-[19px] px-[24px]",
        },
        rounded: {
            roundedFull: "rounded-full",
            none: "rounded-none",
        },
        border: {
            normal: "border border-solid",
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
const Button = React.forwardRef(({ className, variant, size, content, border, rounded, asChild = false, ...props }, ref) => {
    const Comp = asChild ? react_slot_1.Slot : "button";
    return ((0, jsx_runtime_1.jsx)(Comp, { className: (0, utils_1.cn)(buttonVariants({ variant, size, rounded, border, className })), ref: ref, ...props, children: content }));
});
exports.Button = Button;
Button.displayName = "Button";
