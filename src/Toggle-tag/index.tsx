"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../lib/utils";

const labelVariants = cva(
  "peer-disabled:cursor-not-allowed peer-disabled:opacity-70 h-[48px] px-[12px] py-[14px] text-[14px] font-medium rounded-[6px]",
  {
    variants: {
      variant: {
        success: "bg-success-50 text-success-600",
        danger: "bg-destructive-50 text-destructive-500",
        gradientSuccess: "bg-success text-success-950",
        gradientdanger: "bg-destructive-400 text-destructive-950",
      },
    },
  }
);

export interface ILabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
  content: string;
}

const ToggleTag = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  ILabelProps & VariantProps<typeof labelVariants>
>(({ className, content, variant, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants({ variant, className }))}
    {...props}
  >
    {content}
  </LabelPrimitive.Root>
));
ToggleTag.displayName = LabelPrimitive.Root.displayName;

export default ToggleTag;
