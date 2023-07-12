"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../lib/utils";

const labelVariants = cva(
  "peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      frontWeight: {
        thin: "font-[100]",
        extralight: "font-[200]",
        light: "font-[300]",
        normal: "font-[400]",
        medium: "font-[500]",
        semibold: "font-[600]",
        bold: "font-[700]",
        extrabold: "font-[800]",
        black: "font-[900]",
      },
      size: {
        textxs: "text-textxs",
        textsm: "text-textsm",
        textmd: "text-textmd",
        textlg: "text-textlg",
        textxl: "text-textxl",
        displayxs: "text-displayxs",
        displaysm: "text-displaysm",
        displaymd: "text-displaymd",
        displaylg: "text-displaylg",
        displayxl: "text-displayxl",
        display2xl: "text-display2xl",
      },
    },
  }
);

export interface ILabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
  // size?: number;
  content: string;
}

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  ILabelProps & VariantProps<typeof labelVariants>
>(({ className, size, frontWeight, content, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants({ frontWeight, size }), className)}
    {...props}
  >
    {content}
  </LabelPrimitive.Root>
));
Label.displayName = LabelPrimitive.Root.displayName;

export default Label;