"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../lib/utils";

const labelVariants = cva(
  "peer-disabled:cursor-not-allowed peer-disabled:opacity-70 h-[48px] px-[12px] py-[14px]"
);

export interface ILabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
  size?: "sm" | "base" | "xl" | "2xl" | "3xl" | "5xl";
  frontWeight?:
    | "thin"
    | "extralight"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black";
  content: string;
}

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  ILabelProps & VariantProps<typeof labelVariants>
>(({ className, size, frontWeight, content, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      labelVariants(),
      `text-${size}`,
      `font-${frontWeight}`,
      className
    )}
    {...props}
  >
    {content}
  </LabelPrimitive.Root>
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
