import { useState } from "react";
import { Switch } from "./components/switch";

export function ToggerSwitch(props: {
  initialValue?: boolean;
  onCheckedChange?: any;
}) {
  const { initialValue, onCheckedChange } = props;
  return (
    <div className="flex items-center space-x-2">
      <Switch
        defaultChecked={initialValue}
        id="airplane-mode"
        onCheckedChange={onCheckedChange}
      />
    </div>
  );
}
