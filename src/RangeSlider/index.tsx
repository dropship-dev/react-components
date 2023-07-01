import RangeSlider from "./components/rangeslider";
export interface IRangeSlider {
  className?: string;
  onChange?: any;
  min: number;
  max: number;
}

export function Slider(props: IRangeSlider) {
  const { min, max, className, onChange } = props;
  return (
    <RangeSlider
      className="w-full h-[16px]"
      defaultValue={[min, max]}
      onChange={onChange}
    />
  );
}
