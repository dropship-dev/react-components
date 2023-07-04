import RangeSlider from "./components/rangeslider";
export interface IRangeSlider {
  className?: string;
  onChange?: any;
  min: number;
  max: number;
  defaultValue?: number[];
  value?: number[];
}

export default function Slider(props: IRangeSlider) {
  const { min, max, className, onChange, defaultValue, value } = props;
  return (
    <RangeSlider
      className="w-full h-[16px]"
      min={min}
      max={max}
      defaultValue={defaultValue}
      onChange={onChange}
      value={value}
    />
  );
}
