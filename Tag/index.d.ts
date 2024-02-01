import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { type VariantProps } from "class-variance-authority";
export interface ITagProps extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
    content: string;
    onCancel?: any;
    onSelectTag?: any;
}
declare const Tag: React.ForwardRefExoticComponent<ITagProps & VariantProps<(props?: ({
    size?: "sm" | "md" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string> & React.RefAttributes<HTMLLabelElement>>;
export default Tag;
