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
exports.IconButton = exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const class_variance_authority_1 = require("class-variance-authority");
const utils_1 = require("../lib/utils");
const variantsPrimary = {
    color: {
        blue: "bg-primary-500 hover:bg-primary-600 active:bg-primary-700 border-primary-500 focus:shadow-[#DBDDFF] text-white focus:shadow-[0_0_0_4px]",
        destructive: "bg-destructive-500 hover:bg-destructive-600 active:bg-destructive-700 border-destructive-400 focus:shadow-[#FDE4F2] text-white focus:shadow-[0_0_0_4px]",
        gray: "text-white bg-gray-500 hover:bg-gray-600 active:bg-gray-700 border-gray-500 focus:shadow-[#EAECF0] focus:shadow-[0_0_0_4px]",
    },
    hierachy: {
        primary: "",
        secondary: "",
        tertiary: "",
        link: "",
    },
    size: {
        xs: "h-[24px] rounded-[6px] py-[8px] px-[10px] text-[14px] leading-[20px]",
        sm: "h-[30px] rounded-[6px] py-[11px] px-[12px] text-[16px] leading-[24px]",
        md: "h-[36px] rounded-[7px] py-[14px] px-[18px] text-[16px] leading-[24px]",
        lg: "h-[44px] rounded-[8px] py-[17px] px-[20px] text-[18px] leading-[28px]",
        xl: "h-[50px] rounded-[10px] py-[19px] px-[24px] text-[20px] leading-[30px]",
    },
};
const variantsSecondary = {
    ...variantsPrimary,
    color: {
        blue: "bg-primary-25 hover:bg-primary-50 active:bg-primary-100 focus:shadow-[#DBDDFF] border-primary-500 text-primary-500 border border-solid focus:shadow-[0_0_0_4px]",
        destructive: "bg-inherit hover:bg-destructive-100 active:bg-destructive-200 border-destructive-400 focus:shadow-[#FDE4F2] text-destructive-500 border border-solid focus:shadow-[0_0_0_4px]",
        gray: "bg-inherit hover:bg-gray-100 active:bg-gray-300 border-gray-400 focus:shadow-[#EAECF0] text-black border border-solid focus:shadow-[0_0_0_4px]",
    },
};
const variantsTertiary = {
    ...variantsPrimary,
    color: {
        blue: "bg-inherit hover:bg-primary-50 active:bg-primary-100 focus:shadow-[#DBDDFF] border-primary-500 text-primary-500 ",
        destructive: "bg-inherit hover:bg-destructive-100 active:bg-destructive-200 border-destructive-400 focus:shadow-[#FDE4F2] text-destructive-500",
        gray: "bg-inherit hover:bg-gray-100 active:bg-gray-300 border-gray-400 focus:shadow-[#EAECF0] text-black",
    },
};
const variantsLink = {
    ...variantsPrimary,
    color: {
        blue: "bg-inherit text-primary-500 hover:text-primary-700 active:text-primary-700 underline-offset-4 hover:underline",
        destructive: "bg-inherit text-destructive-500 hover:text-destructive-600 active:text-destructive-700 underline-offset-4 hover:underline",
        gray: "bg-inherit hover:text-gray-950 active:text-gray-950 text-gray-700 underline-offset-4 hover:underline",
    },
};
const buttonVariantsPrimary = (0, class_variance_authority_1.cva)("inline-flex items-center font-semibold justify-center rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background", {
    variants: variantsPrimary,
});
const buttonVariantsSeCondary = (0, class_variance_authority_1.cva)("inline-flex items-center font-semibold justify-center rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background", {
    variants: variantsSecondary,
});
const buttonVariantsTetryary = (0, class_variance_authority_1.cva)("inline-flex items-center font-semibold justify-center rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background", {
    variants: variantsTertiary,
});
const buttonVariantsLink = (0, class_variance_authority_1.cva)("inline-flex items-center font-semibold justify-center rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background", {
    variants: variantsLink,
});
const iconButtonVariants = (0, class_variance_authority_1.cva)("flex items-center justify-center", {
    variants: {
        bgColor: {
            primary: "bg-primary-100 hover:bg-primary-400 active:bg-primary-500 border-primary-500p focus:shadow-[#EAECF0] focus:shadow-[0_0_0_4px]",
            destructive: "bg-destructive-500 hover:bg-destructive-600 active:bg-destructive-700 border-destructive-400 focus:shadow-[#FDE4F2] focus:shadow-[0_0_0_4px]",
            secondary: "bg-white hover:bg-primary-50 shadow-none active:bg-primary-100 focus:shadow-[#DBDDFF] border-primary-500 focus:shadow-[0_0_0_4px] text-white",
            normal: "bg-white hover:bg-white-foreground shadow-none focus:bg-white-focus border-gray-400 focus:shadow-[#EAECF0] focus:shadow-[0_0_0_4px]",
        },
        hierachy: {
            primary: "",
            secondary: "",
            tertiary: "",
            link: "",
        },
        size: {
            xs: "h-[24px] w-[24px] rounded-[6px]",
            sm: "h-[30px] w-[30px] rounded-[6px]",
            md: "h-[36px] w-[36px] rounded-[7px]",
            lg: "h-[44px] w-[44px] rounded-[8px]",
            xl: "h-[50px] w-[50px] rounded-[10px]",
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
const Button = React.forwardRef(({ color, size, hierachy, content, disabled, onClick, ...props }, ref) => {
    const Comp = "button";
    return ((0, jsx_runtime_1.jsx)(Comp, { disabled: disabled, onClick: onClick, className: (0, utils_1.cn)(hierachy === "primary"
            ? buttonVariantsPrimary({
                color,
                size,
                hierachy,
            })
            : hierachy === "secondary"
                ? buttonVariantsSeCondary({
                    color,
                    size,
                    hierachy,
                })
                : hierachy === "tertiary"
                    ? buttonVariantsTetryary({
                        color,
                        size,
                    })
                    : buttonVariantsLink({
                        color,
                        size,
                        hierachy,
                    })), ref: ref, ...props, children: content }));
});
exports.Button = Button;
const IconButton = React.forwardRef(({ className, bgColor, size, child, border, roundedFull, disabled, ...props }, ref) => {
    const Comp = "button";
    return ((0, jsx_runtime_1.jsx)(Comp, { disabled: disabled, style: {
            borderRadius: roundedFull ? "50%" : "",
            backgroundColor: bgColor ? "white" : "",
        }, className: (0, utils_1.cn)(iconButtonVariants({ bgColor, size, border, className })), ref: ref, ...props, children: child }));
});
exports.IconButton = IconButton;
Button.displayName = "Button";
IconButton.displayName = "IconButton";
