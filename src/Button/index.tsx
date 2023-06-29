import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center font-semibold justify-center rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      bgColor: {
        primary:
          "bg-primary-500 hover:bg-primary-400 active:bg-primary-500 border-primary-500 focus:shadow-[#DBDDFF] text-white",
        destructive:
          "bg-destructive-500 hover:bg-destructive-600 active:bg-destructive-700 border-destructive-400 focus:shadow-[#FDE4F2] text-white",
        // danger:
        //   "bg-inherit hover:bg-destructive-100 active:bg-destructive-400 border-destructive-400 focus:shadow-[#FDE4F2] focus:shadow-[0_0_0_4px] text-destructive-500",
        secondary:
          "bg-primary-25 hover:bg-primary-50 active:bg-primary-100 focus:shadow-[#DBDDFF] border-primary-500 text-primary-500",
        normal:
          "bg-white hover:bg-gray-100 active:bg-gray-300 border-gray-400 focus:shadow-[#EAECF0] text-black",
        // normalPrimary:
        //   "text-primary-500 focus:text-primary-600 active:text-primary-700 border-primary-500",
        // normalDestructive:
        //   "text-destructive-500 focus:text-destructive-600 active:text-destructive-700 border-destructive-400",
      },

      size: {
        xs: "h-[24px] rounded-[6px] py-[8px] px-[10px] text-[14px] leading-[20px]",
        sm: "h-[30px] rounded-[6px] py-[11px] px-[12px] text-[16px] leading-[24px]",
        md: "h-[36px] rounded-[7px] py-[14px] px-[18px] text-[16px] leading-[24px]",
        lg: "h-[44px] rounded-[8px] py-[17px] px-[20px] text-[18px] leading-[28px]",
        xl: "h-[50px] rounded-[10px] py-[19px] px-[24px] text-[20px] leading-[30px]",
      },

      border: {
        normal: "border border-solid focus:shadow-[0_0_0_4px]",
        none: "border-0",
      },
    },
    defaultVariants: {
      bgColor: "primary",
      size: "md",
      border: "none",
    },
  }
);

const buttonVariantsType = cva(
  "inline-flex items-center font-semibold justify-center rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      bgColor: {
        primary:
          "bg-inherit hover:bg-primary-50 active:bg-primary-100 border-primary-500 focus:shadow-[#DBDDFF] text-primary",
        destructive:
          "bg-inherit hover:bg-destructive-100 active:bg-destructive-200 border-destructive-400 focus:shadow-[#FDE4F2] text-destructive-500",
        secondary:
          "bg-inherit hover:bg-primary-50 active:bg-primary-100 focus:shadow-[#DBDDFF] border-primary-500 text-primary-500",
        normal:
          "bg-inherit hover:bg-gray-100 active:bg-gray-300 border-gray-400 focus:shadow-[#EAECF0] text-black",
      },

      size: {
        xs: "h-[24px] rounded-[6px] py-[8px] px-[10px] text-[14px] leading-[20px]",
        sm: "h-[30px] rounded-[6px] py-[11px] px-[12px] text-[16px] leading-[24px]",
        md: "h-[36px] rounded-[7px] py-[14px] px-[18px] text-[16px] leading-[24px]",
        lg: "h-[44px] rounded-[8px] py-[17px] px-[20px] text-[18px] leading-[28px]",
        xl: "h-[50px] rounded-[10px] py-[19px] px-[24px] text-[20px] leading-[30px]",
      },

      border: {
        normal: "border border-solid focus:shadow-[0_0_0_4px]",
        none: "border-0",
      },
    },
    defaultVariants: {
      bgColor: "primary",
      size: "md",
      border: "none",
    },
  }
);

const iconButtonVariants = cva("inline-flex items-center justify-center", {
  variants: {
    bgColor: {
      primary:
        "bg-primary-100 hover:bg-primary-400 active:bg-primary-500 border-primary-500p focus:shadow-[#EAECF0] focus:shadow-[0_0_0_4px]",
      destructive:
        "bg-destructive-500 hover:bg-destructive-600 active:bg-destructive-700 border-destructive-400 focus:shadow-[#FDE4F2] focus:shadow-[0_0_0_4px]",
      secondary:
        "bg-white hover:bg-primary-50 shadow-none active:bg-primary-100 focus:shadow-[#DBDDFF] border-primary-500 focus:shadow-[0_0_0_4px] text-white",
      normal:
        "bg-white hover:bg-white-foreground shadow-none focus:bg-white-focus border-gray-400 focus:shadow-[#EAECF0] focus:shadow-[0_0_0_4px]",
    },

    size: {
      xs: "h-[24px] w-[24px] rounded-[6px] ",
      sm: "h-[30px] w-[30px] rounded-[6px] ",
      md: "h-[36px] w-[36px] rounded-[7px] ",
      lg: "h-[44px] w-[44px] rounded-[8px] ",
      xl: "h-[50px] w-[50px] rounded-[10px] ",
    },

    border: {
      normal: "border border-solid",
      none: "border-0",
    },
  },
  defaultVariants: {
    bgColor: "primary",
    size: "md",
    border: "none",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  content?: string;
  bgType: boolean;
}

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  child?: React.ReactNode | string;
  roundedFull?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, bgColor, size, border, content, bgType, ...props }, ref) => {
    const Comp = "button";
    console.log();

    return (
      <Comp
        className={cn(
          bgType
            ? buttonVariants({
                bgColor,
                size,
                border,
                className,
              })
            : buttonVariantsType({
                bgColor,
                size,
                border,
                className,
              })
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
  ({ className, bgColor, size, child, border, roundedFull, ...props }, ref) => {
    const Comp = "button";
    console.log();

    return (
      <Comp
        style={{
          borderRadius: roundedFull ? "50%" : "",
          backgroundColor: bgColor ? "white" : "",
        }}
        className={cn(iconButtonVariants({ bgColor, size, border, className }))}
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
