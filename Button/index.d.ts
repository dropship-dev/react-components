import * as React from "react";
import { type VariantProps } from "class-variance-authority";
declare const buttonVariants: (props?: ({
    bgColor?: "normal" | "primary" | "destructive" | "secondary" | null | undefined;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined;
    border?: "normal" | "none" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const iconButtonVariants: (props?: ({
    bgColor?: "normal" | "primary" | "destructive" | "secondary" | null | undefined;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined;
    border?: "normal" | "none" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    content?: string;
    bgType: boolean;
}
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof iconButtonVariants> {
    child?: React.ReactNode | string;
    roundedFull?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Button, buttonVariants, IconButton };
