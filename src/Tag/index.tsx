"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import { Cross1Icon } from "@radix-ui/react-icons";

import { cn } from "../lib/utils";

const TagVariants = cva(
  "leading-[20px] font-[400] border-[1px] border-solid hover:bg-primary-25 hover:border-primary-500 active:bg-primary-100 flex flex-row gap-[8px] items-center w-fit py-[6px] px-[10px] focus:shadow-[#EAECF0] focus:shadow-[0_0_0_4px]",
  {
    variants: {
      size: {
        sm: "h-[34px] text-[12px] rounded-[16px]",
        md: "h-[44px] text-[16px] rounded-[21px]",
      },
    },
  }
);

export interface ITagProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
  content: string;
  onCancle?: any;
}

const Tag = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  ITagProps & VariantProps<typeof TagVariants>
>(({ className, content, size, onCancle, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(TagVariants({ size, className }))}
    {...props}
  >
    {content}
    <Cross1Icon onClick={onCancle} />
  </LabelPrimitive.Root>
));
Tag.displayName = LabelPrimitive.Root.displayName;

export default Tag;
