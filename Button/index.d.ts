import * as React from "react";
import { type VariantProps } from "class-variance-authority";
declare const buttonVariants: (props?: ({
    variant?: "link" | "normal" | "primary" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
    line?: "underline" | null | undefined;
    size?: "default" | "xs" | "xl" | "sm" | "lg" | null | undefined;
    rounded?: "none" | "full" | null | undefined;
    border?: "normal" | "default" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const iconButtonVariants: (props?: ({
    variant?: "link" | "normal" | "primary" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
    line?: "underline" | null | undefined;
    size?: "default" | "xs" | "xl" | "sm" | "lg" | null | undefined;
    border?: "normal" | "default" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    content?: string;
}
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof iconButtonVariants> {
    child?: React.ReactNode;
    rounded?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Button, buttonVariants, IconButton };
