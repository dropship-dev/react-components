import { type VariantProps } from "class-variance-authority";
declare const alertVariants: (props?: ({
    status?: "success" | "warning" | "error" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface AlertProps extends VariantProps<typeof alertVariants> {
    content: string;
    header: string;
    open: boolean;
    timeOut?: number;
}
declare const Alert: {
    ({ status, content, header, open, timeOut, ...props }: AlertProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default Alert;
