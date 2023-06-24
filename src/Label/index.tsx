"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../lib/utils";

const labelVariants = cva(
  "peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

// xs: ['14px', '20px'],
// lg: ['16px', '24px'],
// xl: ['20px', '28px'],
// sm: ['24px', '32px'],

// fontSize: {
//   sm: '0.8rem',
//   base: '1rem',
//   xl: '1.25rem',
//   '2xl': '1.563rem',
//   '3xl': '1.953rem',
//   '4xl': '2.441rem',
//   '5xl': '3.052rem',
// }

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
