import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { type VariantProps } from "class-variance-authority";
declare const ProductVariants: (props?: ({
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "xs" | "3xl" | "4xl" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const AvatarVariants: (props?: ({
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "xs" | null | undefined;
    status?: "offline" | "online" | "instance" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface ILabelProps extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
    src: string;
    alt: string;
    onCancel?: () => void;
    type?: "scale" | "zoomIn" | "normal";
}
declare const ProductImage: {
    ({ className, content, size, src, alt, type, onCancel, ...props }: ILabelProps & VariantProps<typeof ProductVariants>): import("react/jsx-runtime").JSX.Element;
    displayName: string | undefined;
};
declare const Avatar: {
    ({ className, size, src, alt, status, }: ILabelProps & VariantProps<typeof AvatarVariants>): import("react/jsx-runtime").JSX.Element;
    displayName: string | undefined;
};
export { ProductImage, Avatar };
