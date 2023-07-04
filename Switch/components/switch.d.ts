import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
export interface ISwichProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
    danger?: boolean;
}
declare const Switch: React.ForwardRefExoticComponent<ISwichProps & React.RefAttributes<HTMLButtonElement>>;
export { Switch };
