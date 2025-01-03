import * as React from "react";
import { type VariantProps } from "class-variance-authority";
declare const buttonVariantsPrimary: (props?: ({
    color?: "blue" | "destructive" | "gray" | null | undefined;
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface RadixButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariantsPrimary> {
    disabled?: boolean;
    asChild?: boolean;
    isLoading?: boolean;
    color?: "blue" | "destructive" | "gray";
    hierarchy?: "primary" | "secondary" | "tertiary" | "link";
}
declare const RadixButton: React.ForwardRefExoticComponent<RadixButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default RadixButton;
