import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { type VariantProps } from "class-variance-authority";
export interface ILabelProps extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
    content: string;
    onClick?: () => void;
}
declare const ToggleTag: React.ForwardRefExoticComponent<ILabelProps & VariantProps<(props?: ({
    variant?: "success" | "danger" | "gradientSuccess" | "gradientDanger" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string> & React.RefAttributes<HTMLLabelElement>>;
export default ToggleTag;
