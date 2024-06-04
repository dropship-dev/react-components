import * as SwitchPrimitives from "@radix-ui/react-switch";
import * as React from "react";
export interface ISwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
    danger?: boolean;
}
declare const Switch: React.ForwardRefExoticComponent<ISwitchProps & React.RefAttributes<HTMLButtonElement>>;
export { Switch, SwitchPrimitives };
