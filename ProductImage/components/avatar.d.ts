import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
export interface IAvatarProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
    rounded?: boolean;
    size?: number;
}
declare const Avatar: React.ForwardRefExoticComponent<IAvatarProps & React.RefAttributes<HTMLSpanElement>>;
declare const AvatarImage: React.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarImageProps & React.RefAttributes<HTMLImageElement>, "ref"> & React.RefAttributes<HTMLImageElement>>;
declare const AvatarFallback: React.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarFallbackProps & React.RefAttributes<HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
export { Avatar, AvatarImage, AvatarFallback };