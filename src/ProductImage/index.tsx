import {
  Avatar as AvatarUI,
  AvatarFallback,
  AvatarImage,
} from "./components/avatar";
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../lib/utils";

import { IconButton, Skeleton } from "..";

const ProductVariants = cva("flex items-center justify-center z-0", {
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
  "absolute bottom-[-2px] right-[-2px] border-[2px] border-white rounded-full z-10",
  {
    variants: {
      size: {
        xs: "w-[10px] h-[10px]",
        sm: "w-[12px] h-[12px]",
        md: "w-[14px] h-[14px]",
        lg: "w-[16px] h-[16px]",
        xl: "w-[18px] h-[18px]",
        "2xl": "w-[20px] h-[20px]",
      },
      status: {
        offline: "bg-gray-400",
        online: "bg-success-500",
        instance: "bg-destructive-500",
      },
    },
  },
);

export interface ILabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
  src: string;
  alt: string;
  onCancel?: () => void;
}

const ProductImage = ({
  className,
  content,
  size,
  src,
  alt,
  onCancel,
  ...props
}: ILabelProps & VariantProps<typeof ProductVariants>) => (
  <div className="relative w-fit">
    {onCancel && (
      <IconButton
        content={
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.52925 3.52729C3.7896 3.26694 4.21171 3.26694 4.47206 3.52729L8.00065 7.05589L11.5292 3.52729C11.7896 3.26694 12.2117 3.26694 12.4721 3.52729C12.7324 3.78764 12.7324 4.20975 12.4721 4.4701L8.94346 7.9987L12.4721 11.5273C12.7324 11.7876 12.7324 12.2098 12.4721 12.4701C12.2117 12.7305 11.7896 12.7305 11.5292 12.4701L8.00065 8.94151L4.47206 12.4701C4.21171 12.7305 3.7896 12.7305 3.52925 12.4701C3.2689 12.2098 3.2689 11.7876 3.52925 11.5273L7.05784 7.9987L3.52925 4.4701C3.2689 4.20975 3.2689 3.78764 3.52925 3.52729Z"
              fill="white"
            />
          </svg>
        }
        color="destructive"
        size="xs"
        hierarchy="primary"
        className="absolute top-[-8px] right-[-8px] z-30"
        onClick={(e: any) => {
          onCancel();
          e.stopPropagation();
        }}
        roundedFull
      />
    )}
    <AvatarUI className={cn(ProductVariants({ size, className }))}>
      {src ? (
        <>
          <AvatarImage src={src} alt={`@${alt}`} />
          <Skeleton className="w-full h-full rounded-none" />
        </>
      ) : (
        <button
          className={cn(
            ProductVariants({ size }),
            "bg-white border-[1px] border-gray-300 hover:bg-slate-300",
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 4C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V13.5858L7.29289 10.2929L7.30661 10.2794C7.92076 9.68845 8.67726 9.33025 9.5 9.33025C10.3227 9.33025 11.0792 9.68845 11.6934 10.2794L11.7071 10.2929L14 12.5858L14.2929 12.2929L14.307 12.279C15.2097 11.4114 16.3909 11.0804 17.5437 11.5277C18.0586 11.7275 18.3141 12.3068 18.1143 12.8217C17.9145 13.3366 17.3352 13.5921 16.8203 13.3923C16.5106 13.2722 16.1341 13.3003 15.6995 13.7147L15.4142 14L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L13.2943 14.7085C13.2939 14.7081 13.2934 14.7076 13.2929 14.7071C13.2924 14.7066 13.2919 14.7061 13.2915 14.7057L10.3003 11.7146C9.98904 11.4174 9.71184 11.3302 9.5 11.3302C9.28816 11.3302 9.01096 11.4174 8.69965 11.7146L4 16.4142V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H12.5C13.0523 20 13.5 20.4477 13.5 21C13.5 21.5523 13.0523 22 12.5 22H6C4.93913 22 3.92172 21.5786 3.17157 20.8284C2.42143 20.0783 2 19.0609 2 18V16.0002C2 16.0001 2 15.9999 2 15.9998V6C2 4.93913 2.42143 3.92172 3.17157 3.17157C3.92172 2.42143 4.93913 2 6 2H18C19.0609 2 20.0783 2.42143 20.8284 3.17157C21.5786 3.92172 22 4.93913 22 6V12.5C22 13.0523 21.5523 13.5 21 13.5C20.4477 13.5 20 13.0523 20 12.5V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4H6ZM14 8C14 7.44772 14.4477 7 15 7H15.01C15.5623 7 16.01 7.44772 16.01 8C16.01 8.55228 15.5623 9 15.01 9H15C14.4477 9 14 8.55228 14 8ZM19 15C19.5523 15 20 15.4477 20 16V18H22C22.5523 18 23 18.4477 23 19C23 19.5523 22.5523 20 22 20H20V22C20 22.5523 19.5523 23 19 23C18.4477 23 18 22.5523 18 22V20H16C15.4477 20 15 19.5523 15 19C15 18.4477 15.4477 18 16 18H18V16C18 15.4477 18.4477 15 19 15Z"
              fill="#707A8F"
            />
          </svg>
        </button>
      )}
    </AvatarUI>
  </div>
);

const Avatar = ({
  className,
  size,
  src,
  alt,
  status,
}: ILabelProps & VariantProps<typeof AvatarVariants>) => (
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
);

ProductImage.displayName = LabelPrimitive.Root.displayName;
Avatar.displayName = LabelPrimitive.Root.displayName;

export { ProductImage, Avatar };
