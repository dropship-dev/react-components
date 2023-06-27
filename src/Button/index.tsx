import * as React from "react";
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
          "bg-destructive-500 text-white hover:bg-destructive-600 active:bg-destructive-700",
        outline:
          "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-[#4856F3] text-secondary-foreground hover:bg-secondary/80 text-white",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary",
        normal:
          "bg-white text-white-foreground hover:bg-white-foreground focus:bg-white-focus text-black",
      },
      line: {
        underline: "underline-offset-4 hover:underline",
      },
      size: {
        default:
          "py-[14px] px-[18px] h-[36px] rounded-[7px] text-[16px] leading-[24px]",
        xs: "h-[24px] rounded-[6px] py-[8px] px-[10px] text-[14px] leading-[20px]",
        xl: "h-[30px] rounded-[6px] py-[11px] px-[12px] text-[16px] leading-[24px]",
        sm: "h-[44px] rounded-[8px] py-[17px] px-[20px] text-[18px] leading-[28px]",
        lg: "h-[50px] rounded-[10px] py-[19px] px-[24px] text-[20px] leading-[30px]",
      },
      rounded: {
        full: "rounded-full",
        none: "rounded-none",
      },
      border: {
        normal: "border border-solid ",
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
const iconButtonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:bg-primary/90 focus:bg-primary-focus text-white",
        destructive:
          "bg-destructive-500 text-white hover:bg-destructive-600 active:bg-destructive-700",
        outline:
          "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-[#4856F3] text-secondary-foreground hover:bg-secondary/80 text-white",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary",
        normal:
          "bg-white text-white-foreground hover:bg-white-foreground focus:bg-white-focus text-black",
      },
      line: {
        underline: "underline-offset-4 hover:underline",
      },
      size: {
        default:
          "py-[14px] px-[18px] h-[36px] rounded-[7px] text-[16px] leading-[24px]",
        xs: "h-[24px] rounded-[6px] py-[8px] px-[10px] text-[14px] leading-[20px]",
        xl: "h-[30px] rounded-[6px] py-[11px] px-[12px] text-[16px] leading-[24px]",
        sm: "h-[44px] rounded-[8px] py-[17px] px-[20px] text-[18px] leading-[28px]",
        lg: "h-[50px] rounded-[10px] py-[19px] px-[24px] text-[20px] leading-[30px]",
      },

      border: {
        normal: "border border-solid ",
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
  content?: string;
}

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  child?: React.ReactNode;
  rounded?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, content, border, rounded, ...props }, ref) => {
    const Comp = "button";
    return (
      <Comp
        style={{ borderRadius: rounded ? "50%" : "0" }}
        className={cn(
          buttonVariants({ variant, size, border, rounded, className })
        )}
        ref={ref}
        {...props}
      >
        {content}
      </Comp>
    );
  }
);

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant, size, child, border, ...props }, ref) => {
    const Comp = "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, border, className }))}
        ref={ref}
        {...props}
      >
        {child}
      </Comp>
    );
  }
);

Button.displayName = "Button";
IconButton.displayName = "IconButton";

export { Button, buttonVariants, IconButton };
