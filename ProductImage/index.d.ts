import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { type VariantProps } from "class-variance-authority";
export interface ILabelProps extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
    src: string;
    alt: string;
    onCancel?: () => void;
}
declare const ProductImage: React.ForwardRefExoticComponent<ILabelProps & VariantProps<(props?: ({
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "xs" | "3xl" | "4xl" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string> & React.RefAttributes<HTMLLabelElement>>;
declare const Avatar: React.ForwardRefExoticComponent<ILabelProps & VariantProps<(props?: ({
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "xs" | null | undefined;
    status?: "offline" | "online" | "instance" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string> & React.RefAttributes<HTMLLabelElement>>;
export { ProductImage, Avatar };
