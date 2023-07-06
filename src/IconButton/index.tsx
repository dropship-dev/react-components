import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../lib/utils";

const variantsPrimary = {
  color: {
    blue: "bg-primary-500 hover:bg-primary-600 active:bg-primary-700 border-primary-500 focus:shadow-[#DBDDFF] text-white focus:shadow-[0_0_0_4px]",
    destructive:
      "bg-destructive-500 hover:bg-destructive-600 active:bg-destructive-700 border-destructive-400 focus:shadow-[#FDE4F2] text-white focus:shadow-[0_0_0_4px]",

    gray: "text-white bg-gray-500 hover:bg-gray-600 active:bg-gray-700 border-gray-500 focus:shadow-[#EAECF0] focus:shadow-[0_0_0_4px]",
  },
  hierachy: {
    primary: "",
    secondary: "",
    tertiary: "",
    link: "",
  },
  size: {
    xs: "h-[24px] w-[24px] rounded-[6px]",
    sm: "h-[36px] w-[36px] rounded-[6px]",
    md: "h-[42px] w-[42px] rounded-[7px]",
    lg: "h-[48px] w-[48px] rounded-[8px]",
    xl: "h-[54px] w-[54px] rounded-[10px]",
    "2xl": "h-[62px] w-[62px] rounded-[10px]",
  },
};

const variantsSecondary = {
  ...variantsPrimary,
  color: {
    blue: "bg-primary-25 hover:bg-primary-50 active:bg-primary-100 focus:shadow-[#DBDDFF] border-primary-500 text-primary-500 border border-solid focus:shadow-[0_0_0_4px]",
    destructive:
      "bg-inherit hover:bg-destructive-100 active:bg-destructive-200 border-destructive-400 focus:shadow-[#FDE4F2] text-destructive-500 border border-solid focus:shadow-[0_0_0_4px]",
    gray: "bg-inherit hover:bg-gray-100 active:bg-gray-300 border-gray-400 focus:shadow-[#EAECF0] text-black border border-solid focus:shadow-[0_0_0_4px]",
  },
};

const variantsTertiary = {
  ...variantsPrimary,
  color: {
    blue: "bg-inherit hover:bg-primary-50 active:bg-primary-100 focus:shadow-[#DBDDFF] border-primary-500 text-primary-500 ",
    destructive:
      "bg-inherit hover:bg-destructive-100 active:bg-destructive-200 border-destructive-400 focus:shadow-[#FDE4F2] text-destructive-500",
    gray: "bg-inherit hover:bg-gray-100 active:bg-gray-300 border-gray-400 focus:shadow-[#EAECF0] text-black",
  },
};

const variantsLink = {
  ...variantsPrimary,
  color: {
    blue: "bg-inherit text-primary-500 hover:text-primary-700 active:text-primary-700 underline-offset-4 hover:underline",
    destructive:
      "bg-inherit text-destructive-500 hover:text-destructive-600 active:text-destructive-700 underline-offset-4 hover:underline",
    gray: "bg-inherit hover:text-gray-950 active:text-gray-950 text-gray-700 underline-offset-4 hover:underline",
  },
};

const buttonVariantsPrimary = cva(
  "flex items-center font-semibold justify-center rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: variantsPrimary,
  }
);
const buttonVariantsSeCondary = cva(
  "flex items-center font-semibold justify-center rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: variantsSecondary,
  }
);
const buttonVariantsTetryary = cva(
  "flex items-center font-semibold justify-center rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: variantsTertiary,
  }
);
const buttonVariantsLink = cva(
  "flex items-center font-semibold justify-center rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: variantsLink,
  }
);

export interface IconButtonProps
  extends VariantProps<typeof buttonVariantsPrimary> {
  content: string | React.ReactNode;
  disabled?: boolean;
  onClick?: any;
  roundedFull?: boolean;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      color,
      size,
      hierachy,
      content,
      disabled,
      onClick,
      roundedFull,
      ...props
    },
    ref
  ) => {
    const Comp = "button";
    return (
      <Comp
        style={{
          borderRadius: roundedFull ? "50%" : "",
        }}
        disabled={disabled}
        onClick={onClick}
        className={cn(
          hierachy === "primary"
            ? buttonVariantsPrimary({
                color,
                size,
                hierachy,
              })
            : hierachy === "secondary"
            ? buttonVariantsSeCondary({
                color,
                size,
                hierachy,
              })
            : hierachy === "tertiary"
            ? buttonVariantsTetryary({
                color,
                size,
                hierachy,
              })
            : buttonVariantsLink({
                color,
                size,
                hierachy,
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

IconButton.displayName = "IconButton";

export default IconButton;