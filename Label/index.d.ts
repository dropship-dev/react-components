import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { type VariantProps } from "class-variance-authority";
export interface ILabelProps extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
    size?: number;
    content: string;
}
declare const Label: React.ForwardRefExoticComponent<ILabelProps & VariantProps<(props?: ({
    frontWeight?: "bold" | "black" | "normal" | "medium" | "thin" | "light" | "extralight" | "semibold" | "extrabold" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string> & React.RefAttributes<HTMLLabelElement>>;
export { Label };
