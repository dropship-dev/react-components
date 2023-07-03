"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../lib/utils";

const ChipVariants = cva(
  "text-[12px] leading-[18px] font-[400] flex items-center w-fit rounded-r-full rounded-l-full",
  {
    variants: {
      variant: {
        success: "bg-success-100 text-success-700 border-success-400",
        danger:
          "bg-destructive-100 text-destructive-700 border-destructive-400",
        warning: "bg-warning-100 text-warning-700 border-warning-400",
        gray: "bg-gray-300 text-gray-900 border-gray-400",
        primary: "bg-primary-100 text-primary-500 border-primary-400",
      },
      size: {
        sm: "h-[24px] px-[8px] py-[3px]",
        md: "h-[40px] px-[12px] py-[6px] border-solid border-[1px]",
      },
    },
  }
);

export interface ILabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
  content: string;
  disabled?: boolean;
}

const Chip = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  ILabelProps & VariantProps<typeof ChipVariants>
>(({ className, content, variant, disabled, size, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      `${disabled && "opacity-50"}`,
      ChipVariants({ variant, size, className })
    )}
    {...props}
  >
    {content}
  </LabelPrimitive.Root>
));
Chip.displayName = LabelPrimitive.Root.displayName;

export { Chip };
