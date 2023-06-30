import * as React from "react";
import { type VariantProps } from "class-variance-authority";
declare const buttonVariantsPrimary: (props?: ({
    color?: "blue" | "destructive" | "gray" | null | undefined;
    hierachy?: "primary" | "secondary" | "tertiary" | "link" | null | undefined;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface ButtonProps extends VariantProps<typeof buttonVariantsPrimary> {
    content?: string;
    disabled?: boolean;
    onClick?: any;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Button };
