import { useState } from "react";
import { Switch as SwitchComponent } from "./components/switch";

export default function Switch(props: {
  initialValue?: boolean;
  onCheckedChange?: (e: boolean) => void;
  danger?: boolean;
  checked?: boolean;
  disabled?: boolean;
}) {
  const { initialValue, onCheckedChange, danger, checked, disabled } = props;
  return (
    <div className="flex items-center space-x-2">
      <SwitchComponent
        defaultChecked={initialValue}
        onCheckedChange={onCheckedChange}
        danger={danger ?? false}
        checked={checked}
        disabled={disabled}
      />
    </div>
  );
}
