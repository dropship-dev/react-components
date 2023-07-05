import RangeSlider from "./components/rangeslider";
export interface IRangeSlider {
  className?: string;
  onChange?: any;
  min: number;
  max: number;
  defaultValue?: number[];
}

export function Slider(props: IRangeSlider) {
  const { min, max, className, onChange, defaultValue } = props;
  return (
    <RangeSlider
      className="w-full h-[16px]"
      min={min}
      max={max}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  );
}
