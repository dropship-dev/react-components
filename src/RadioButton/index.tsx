import { Label } from "..";
import { RadioGroup, RadioGroupItem, RadioGroupPrimitive } from "./radio-group";

interface IRadioButton {
  data: { id: string; value: string }[];
  defaultValue?: string;
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const RadioButton = (props: IRadioButton) => {
  const { data, defaultValue, value, setValue } = props;
  return (
    <RadioGroup defaultValue={defaultValue} value={value}>
      {data.map((item) => (
        <div className="flex flex-row gap-3 items-center" key={item.id}>
          <RadioGroupItem
            value={item.value}
            id={item.id}
            className="translate-y-[-2px]"
            onClick={() => setValue && setValue(item.value)}
          />
          <div>
            <Label
              htmlFor={item.id}
              content={item.value}
              className="text-textSM font-medium"
            />
          </div>
        </div>
      ))}
    </RadioGroup>
  );
};

export default RadioButton;
export { RadioGroupPrimitive };
