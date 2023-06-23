import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:bg-primary/90 focus:bg-primary-focus text-white",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-[#4856F3] text-secondary-foreground hover:bg-secondary/80 text-white",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary ",
        gradient: "bg-indigo-500 text-white",
        normal:
          "bg-white text-white-foreground hover:bg-white-foreground focus:bg-white-focus text-black",
      },
      size: {
        default: "py-[14px] px-[18px] h-[48px]",
        xs: "h-[36px] rounded-md py-[8px] px-[10px]",
        xl: "h-[42px] rounded-md py-[11px] px-[12px]",
        sm: "h-[42px] rounded-md py-[17px] px-[20px]",
        lg: "h-[42px] rounded-md py-[19px] px-[24px]",
      },
      rounded: {
        roundedFull: "rounded-full",
        none: "rounded-none",
      },
      border: {
        normal: "border border-solid",
        default: "border-0 ",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      border: "normal",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  content?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      content,
      border,
      rounded,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, rounded, border, className })
        )}
        ref={ref}
        {...props}
      >
        {content}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
