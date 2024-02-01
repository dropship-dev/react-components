import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
export interface ISwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
    danger?: boolean;
}
declare const Switch: React.ForwardRefExoticComponent<ISwitchProps & React.RefAttributes<HTMLButtonElement>>;
export { Switch };
