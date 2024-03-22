import * as React from "react";
import { type VariantProps } from "class-variance-authority";
declare const buttonVariantsPrimary: (props?: ({
    color?: "blue" | "destructive" | "gray" | null | undefined;
    hierarchy?: "link" | "primary" | "secondary" | "tertiary" | null | undefined;
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface ButtonProps extends VariantProps<typeof buttonVariantsPrimary> {
    content?: string | React.ReactNode;
    disabled?: boolean;
    onClick?: any;
    className?: string;
    role?: string;
    loading?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default Button;
