"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../lib/utils";

const labelVariants = cva(
  "peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      fontWeight: {
        thin: "font-[100]",
        extraLight: "font-[200]",
        light: "font-[300]",
        normal: "font-[400]",
        medium: "font-[500]",
        semibold: "font-[600]",
        bold: "font-[700]",
        extrabold: "font-[800]",
        black: "font-[900]",
      },
      size: {
        textXS: "text-textXS",
        textSM: "text-textSM",
        textMD: "text-textMD",
        textLG: "text-textLG",
        textXL: "text-textXL",
        displayXS: "text-displayXS",
        displaySM: "text-displaySM",
        displayMD: "text-displayMD",
        displayLG: "text-displayLG",
        displayXL: "text-displayXL",
        displayXXL: "text-displayXXL",
      },
    },
  },
);

export interface ILabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
  // size?: number;
  content: string;
}

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  ILabelProps & VariantProps<typeof labelVariants>
>(({ className, size, fontWeight, content, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants({ fontWeight, size }), className)}
    {...props}
  >
    {content}
  </LabelPrimitive.Root>
));
Label.displayName = LabelPrimitive.Root.displayName;

export default Label;
