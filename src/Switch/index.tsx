import { Switch as SwitchComponent } from "./components/switch";

export default function Switch(props: {
  initialValue?: boolean;
  onCheckedChange?: (e: boolean) => void;
  danger?: boolean;
  checked?: boolean;
  disabled?: boolean;
  primary?: boolean;
}) {
  const { initialValue, onCheckedChange, danger, checked, disabled, primary } =
    props;
  return (
    <div className="flex items-center space-x-2">
      <SwitchComponent
        defaultChecked={initialValue}
        onCheckedChange={onCheckedChange}
        danger={danger ?? false}
        checked={checked}
        disabled={disabled}
        className={`${primary ? "data-[state=checked]:bg-primary-500" : ""}`}
      />
    </div>
  );
}
