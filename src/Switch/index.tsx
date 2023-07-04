import { useState } from "react";
import { Switch as SwitchComponets } from "./components/switch";

export default function Switch(props: {
  initialValue?: boolean;
  onCheckedChange?: any;
  danger?: boolean;
}) {
  const { initialValue, onCheckedChange, danger } = props;
  return (
    <div className="flex items-center space-x-2">
      <SwitchComponets
        defaultChecked={initialValue}
        onCheckedChange={onCheckedChange}
        danger={danger ?? false}
      />
    </div>
  );
}
