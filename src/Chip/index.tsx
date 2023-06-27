"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../lib/utils";

const ChipVariants = cva(
  "peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[14px] font-medium ",
  {
    variants: {
      variant: {
        success: "bg-success-100 text-success-700 border-success-400",
        danger:
          "bg-destructive-100 text-destructive-700 border-destructive-400",
        warning: "bg-warning-100 text-warning-700 border-warning-400",
        gray: "bg-gray-300 text-gray-900 border-gray-400",
        primary: "bg-primary-100 text-primary-500p border-primary-400",
      },
      status: {
        active: "opacity-100",
        deactivate: "opacity-50",
      },
      size: {
        sm: "h-[24px] px-[8px] py-[3px] rounded-[12px]",
        md: "h-[40px] px-[12px] py-[6px] rounded-[15px] border-solid border-[1px]",
      },
    },
  }
);

export interface ILabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
  content: string;
}

const Chip = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  ILabelProps & VariantProps<typeof ChipVariants>
>(({ className, content, variant, status, size, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(ChipVariants({ variant, status, size, className }))}
    {...props}
  >
    {content}
  </LabelPrimitive.Root>
));
Chip.displayName = LabelPrimitive.Root.displayName;

export { Chip };
