import * as React from "react";
import { type VariantProps } from "class-variance-authority";
declare const buttonVariants: (props?: ({
    variant?: "link" | "normal" | "primary" | "destructive" | "outline" | "secondary" | "ghost" | "gradient" | null | undefined;
    size?: "default" | "xs" | "xl" | "sm" | "lg" | null | undefined;
    rounded?: "none" | "roundedFull" | null | undefined;
    border?: "normal" | "default" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    content?: string;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Button, buttonVariants };
