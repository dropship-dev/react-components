import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { type VariantProps } from "class-variance-authority";
export interface ILabelProps extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
    content: string;
}
declare const Label: React.ForwardRefExoticComponent<ILabelProps & VariantProps<(props?: ({
    frontWeight?: "bold" | "thin" | "extralight" | "light" | "normal" | "medium" | "semibold" | "extrabold" | "black" | null | undefined;
    size?: "textxs" | "textsm" | "textmd" | "textlg" | "textxl" | "displayxs" | "displaysm" | "displaymd" | "displaylg" | "displayxl" | "display2xl" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string> & React.RefAttributes<HTMLLabelElement>>;
export default Label;
