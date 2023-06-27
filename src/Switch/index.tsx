import { useState } from "react";
import { Switch as SwitchComponets } from "./components/switch";

export function Switch(props: {
  initialValue?: boolean;
  onCheckedChange?: any;
}) {
  const { initialValue, onCheckedChange } = props;
  return (
    <div className="flex items-center space-x-2">
      <SwitchComponets
        defaultChecked={initialValue}
        onCheckedChange={onCheckedChange}
      />
    </div>
  );
}
