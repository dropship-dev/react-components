import * as React from "react";
import { type VariantProps } from "class-variance-authority";
declare const alertVariants: (props?: ({
    status?: "success" | "warning" | "error" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface AlertProps extends VariantProps<typeof alertVariants> {
    content: string;
    header: string;
    disabled?: boolean;
    onCancel?: any;
    className?: string;
    open: boolean;
}
declare const Alert: React.ForwardRefExoticComponent<AlertProps & React.RefAttributes<HTMLButtonElement>>;
export default Alert;
