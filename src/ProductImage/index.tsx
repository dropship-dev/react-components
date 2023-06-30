import {
  Avatar as AvatarUI,
  AvatarFallback,
  AvatarImage,
} from "./components/avatar";
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../lib/utils";

import { Skeleton } from "../SkeletonLoading";

const ProductVariants = cva("flex items-center justify-center", {
  variants: {
    size: {
      xs: "w-[24px] h-[24px] rounded-[3px]",
      sm: "w-[36px] h-[36px] rounded-[4px]",
      md: "w-[42px] h-[42px] rounded-[4px]",
      lg: "w-[48px] h-[48px] rounded-[4px]",
      xl: "w-[54px] h-[54px] rounded-[4px]",
      "2xl": "w-[62px] h-[62px] rounded-[5px]",
      "3xl": "w-[72px] h-[72px] rounded-[6px]",
      "4xl": "w-[120px] h-[120px] rounded-[8px]",
    },
    status: {
      offline: "",
      online: "",
      instance: "",
    },
  },
});

const AvatarVariants = cva("flex items-center justify-center rounded-full", {
  variants: {
    size: {
      xs: "w-[24px] h-[24px]",
      sm: "w-[36px] h-[36px]",
      md: "w-[42px] h-[42px]",
      lg: "w-[48px] h-[48px]",
      xl: "w-[54px] h-[54px]",
      "2xl": "w-[62px] h-[62px]",
    },
    status: {
      offline: "",
      online: "",
      instance: "",
    },
  },
});

const statusVariant = cva(
  "rounded-full z-20 absolute bottom-0 right-0 border-[2px] border-white",
  {
    variants: {
      size: {
        xs: "w-[6px] h-[6px]",
        sm: "w-[8px] h-[8px]",
        md: "w-[10px] h-[10px]",
        lg: "w-[12px] h-[12px]",
        xl: "w-[14px] h-[14px]",
        "2xl": "w-[16px] h-[16px]",
      },
      status: {
        offline: "bg-gray-400",
        online: "bg-success-500",
        instance: "bg-destructive-500",
      },
    },
  }
);

export interface ILabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
  src: string;
  alt: string;
}

const ProductImage = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  ILabelProps & VariantProps<typeof ProductVariants>
>(({ className, content, size, src, alt, ...props }, ref) => (
  <AvatarUI className={cn(ProductVariants({ size, className }))}>
    {src ? (
      <>
        <AvatarImage src={src} alt={`@${alt}`} />
        <AvatarFallback>
          <Skeleton className={cn(ProductVariants({ size }))} />
        </AvatarFallback>
      </>
    ) : (
      <AvatarFallback className={cn(ProductVariants({ size }))}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.5 3C4.10218 3 3.72064 3.15804 3.43934 3.43934C3.15804 3.72064 3 4.10218 3 4.5V10.1893L5.46967 7.71967L5.47996 7.70957C5.94057 7.26634 6.50794 6.99768 7.125 6.99768C7.74206 6.99768 8.30943 7.26634 8.77004 7.70957L8.78033 7.71967L10.5 9.43934L10.7197 9.21967L10.7303 9.20928C11.4072 8.55857 12.2932 8.31033 13.1578 8.64578C13.5439 8.79561 13.7355 9.23011 13.5857 9.61628C13.4359 10.0024 13.0014 10.194 12.6152 10.0442C12.383 9.95412 12.1006 9.97521 11.7746 10.2861L11.5607 10.5L11.7803 10.7197C12.0732 11.0126 12.0732 11.4874 11.7803 11.7803C11.4874 12.0732 11.0126 12.0732 10.7197 11.7803L9.97075 11.0314C9.97039 11.031 9.97003 11.0307 9.96967 11.0303C9.96931 11.03 9.96895 11.0296 9.96859 11.0292L7.72526 8.78592C7.49178 8.56303 7.28388 8.49768 7.125 8.49768C6.96612 8.49768 6.75822 8.56303 6.52474 8.78592L3 12.3107V13.5C3 13.8978 3.15804 14.2794 3.43934 14.5607C3.72064 14.842 4.10218 15 4.5 15H9.375C9.78921 15 10.125 15.3358 10.125 15.75C10.125 16.1642 9.78921 16.5 9.375 16.5H4.5C3.70435 16.5 2.94129 16.1839 2.37868 15.6213C1.81607 15.0587 1.5 14.2956 1.5 13.5V12.0001C1.5 12 1.5 12 1.5 11.9999V4.5C1.5 3.70435 1.81607 2.94129 2.37868 2.37868C2.94129 1.81607 3.70435 1.5 4.5 1.5H13.5C14.2956 1.5 15.0587 1.81607 15.6213 2.37868C16.1839 2.94129 16.5 3.70435 16.5 4.5V9.375C16.5 9.78921 16.1642 10.125 15.75 10.125C15.3358 10.125 15 9.78921 15 9.375V4.5C15 4.10218 14.842 3.72064 14.5607 3.43934C14.2794 3.15804 13.8978 3 13.5 3H4.5ZM10.5 6C10.5 5.58579 10.8358 5.25 11.25 5.25H11.2575C11.6717 5.25 12.0075 5.58579 12.0075 6C12.0075 6.41421 11.6717 6.75 11.2575 6.75H11.25C10.8358 6.75 10.5 6.41421 10.5 6ZM14.25 11.25C14.6642 11.25 15 11.5858 15 12V13.5H16.5C16.9142 13.5 17.25 13.8358 17.25 14.25C17.25 14.6642 16.9142 15 16.5 15H15V16.5C15 16.9142 14.6642 17.25 14.25 17.25C13.8358 17.25 13.5 16.9142 13.5 16.5V15H12C11.5858 15 11.25 14.6642 11.25 14.25C11.25 13.8358 11.5858 13.5 12 13.5H13.5V12C13.5 11.5858 13.8358 11.25 14.25 11.25Z"
            fill="#707A8F"
          />
        </svg>
      </AvatarFallback>
    )}
  </AvatarUI>
));

const Avatar = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  ILabelProps & VariantProps<typeof AvatarVariants>
>(({ className, size, src, alt, status }) => (
  <div className={cn("relative", AvatarVariants({ size }))}>
    {status && <div className={cn(statusVariant({ size, status }))}></div>}
    <AvatarUI className={cn(AvatarVariants({ size, className }))}>
      <>
        <AvatarImage src={src} alt={`@${alt}`} />
        <AvatarFallback>
          <AvatarFallback className={cn(AvatarVariants({ size }))}>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 54 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="54" height="54" rx="27" />
              <path
                d="M27 17C25.6739 17 24.4021 17.5268 23.4645 18.4645C22.5268 19.4021 22 20.6739 22 22C22 23.3261 22.5268 24.5979 23.4645 25.5355C24.4021 26.4732 25.6739 27 27 27C28.3261 27 29.5979 26.4732 30.5355 25.5355C31.4732 24.5979 32 23.3261 32 22C32 20.6739 31.4732 19.4021 30.5355 18.4645C29.5979 17.5268 28.3261 17 27 17Z"
                fill="white"
              />
              <path
                d="M25 29C23.6739 29 22.4021 29.5268 21.4645 30.4645C20.5268 31.4021 20 32.6739 20 34V36C20 36.5523 20.4477 37 21 37H33C33.5523 37 34 36.5523 34 36V34C34 32.6739 33.4732 31.4021 32.5355 30.4645C31.5979 29.5268 30.3261 29 29 29H25Z"
                fill="white"
              />
            </svg>
          </AvatarFallback>
        </AvatarFallback>
      </>
    </AvatarUI>
  </div>
));

ProductImage.displayName = LabelPrimitive.Root.displayName;
Avatar.displayName = LabelPrimitive.Root.displayName;

export { ProductImage, Avatar };
