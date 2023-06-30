import * as React from "react";
import { type VariantProps } from "class-variance-authority";
declare const buttonVariantsPrimary: (props?: ({
    color?: "blue" | "gray" | "destructive" | null | undefined;
    hierachy?: "link" | "primary" | "secondary" | "tertiary" | null | undefined;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const iconButtonVariants: (props?: ({
    bgColor?: "normal" | "destructive" | "primary" | "secondary" | null | undefined;
    hierachy?: "link" | "primary" | "secondary" | "tertiary" | null | undefined;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined;
    border?: "normal" | "none" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface ButtonProps extends VariantProps<typeof buttonVariantsPrimary> {
    content?: string;
    disabled?: boolean;
    onClick?: any;
}
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof iconButtonVariants> {
    child?: React.ReactNode | string;
    disabled?: boolean;
    roundedFull?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Button, IconButton };
