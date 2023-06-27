import * as React from "react";
import { type VariantProps } from "class-variance-authority";
declare const buttonVariants: (props?: ({
    variant?: "primary" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "gradient" | "normal" | null | undefined;
    size?: "default" | "xs" | "xl" | "sm" | "lg" | null | undefined;
    border?: "normal" | "default" | null | undefined;
    rounded?: "full" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    content?: string;
    child?: React.ReactNode;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
declare const IconButton: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Button, buttonVariants, IconButton };
