import * as React from "react";
import { type VariantProps } from "class-variance-authority";
declare const buttonVariantsPrimary: (props?: ({
    color?: "blue" | "destructive" | "gray" | null | undefined;
    hierachy?: "primary" | "secondary" | "tertiary" | "link" | null | undefined;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface IconButtonProps extends VariantProps<typeof buttonVariantsPrimary> {
    content: string | React.ReactNode;
    disabled?: boolean;
    onClick?: any;
    roundedFull?: boolean;
}
declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default IconButton;
