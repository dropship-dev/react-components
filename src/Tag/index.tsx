"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import { Cross1Icon } from "@radix-ui/react-icons";

import { cn } from "../lib/utils";

const TagVariants = cva(
  "leading-[20px] font-[400] h-fit flex flex-wrap item-center border-[1px] border-solid hover:bg-primary-25 hover:border-primary-500 active:bg-primary-100 flex flex-row gap-[8px] items-center w-fit py-[6px] px-[10px] focus:shadow-[#EAECF0] focus:shadow-[0_0_0_4px]",
  {
    variants: {
      size: {
        sm: "text-[14px] rounded-[16px]",
        md: "text-[16px] rounded-[21px]",
      },
    },
  },
);

export interface ITagProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
  content: string;
  onCancel?: any;
  onSelectTag?: any;
}

const Tag = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  ITagProps & VariantProps<typeof TagVariants>
>(({ className, content, size, onCancel, onSelectTag, ...props }, ref) => (
  <LabelPrimitive.Root
    onClick={onSelectTag ?? undefined}
    ref={ref}
    className={cn(TagVariants({ size, className }))}
    {...props}
  >
    {content}
    {onCancel && <Cross1Icon onClick={onCancel} />}
  </LabelPrimitive.Root>
));
Tag.displayName = LabelPrimitive.Root.displayName;

export default Tag;
