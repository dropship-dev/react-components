import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { type VariantProps } from "class-variance-authority";
export interface ILabelProps extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
    size?: "sm" | "base" | "xl" | "2xl" | "3xl" | "5xl";
    frontWeight?: "thin" | "extralight" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black";
    content: string;
}
declare const Label: React.ForwardRefExoticComponent<ILabelProps & VariantProps<(props?: import("class-variance-authority/dist/types").ClassProp | undefined) => string> & React.RefAttributes<HTMLLabelElement>>;
export { Label };
