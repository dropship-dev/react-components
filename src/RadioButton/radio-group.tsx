"use client";

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import * as React from "react";

import { cn } from "../lib/utils";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "z-10 h-5 w-5 rounded-full border border-neutral-900 text-neutral-900 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="w-full h-full border-[1px] border-primary-500 bg-primary-500 rounded-full z-20 flex justify-center items-center">
        <svg
          width="10"
          height="8"
          viewBox="0 0 10 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.33922 0.910582C9.66465 1.23602 9.66465 1.76366 9.33922 2.08909L4.33922 7.08909C4.01378 7.41453 3.48614 7.41453 3.1607 7.08909L0.660704 4.58909C0.335267 4.26366 0.335267 3.73602 0.660704 3.41058C0.986141 3.08514 1.51378 3.08514 1.83922 3.41058L3.74996 5.32133L8.1607 0.910582C8.48614 0.585145 9.01378 0.585145 9.33922 0.910582Z"
            fill="white"
          />
        </svg>
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem, RadioGroupPrimitive };
