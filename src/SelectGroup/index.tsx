export default function SelectGroup(props: {
  data: { name: string; value: string[] }[];
  placeholder?: string;
  width?: string;
  icon?: React.ReactNode;
  label?: string;
  onSelected?: (value: any) => void;
  defaultValue?: string;
  size?: "xs" | "sm" | "md";
  optionTop?: string;
}) {
  const { data, placeholder, optionTop, onSelected, width, size } = props;

  return (
    <select
      className={`${width} ${
        size === "xs" ? "h-10" : size === "md" ? "h-12" : "h-11"
      } border-gray-300 select w-full max-w-xs py-2 border-[1px] border-solid rounded-[8px] gap-[8px] flex justify-start focus:outline-none`}
      //   className="select w-full max-w-xs focus:outline-none"
      placeholder={placeholder}
      onChange={onSelected}
    >
      {optionTop && <option selected>{optionTop}</option>}
      {data.map((i) => {
        return (
          <>
            <option disabled>{i.name}</option>
            {i.value.map((i) => (
              <option>{i}</option>
            ))}
          </>
        );
      })}
    </select>
  );
}
