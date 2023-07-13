import React from "react";
import { ComboBox, Drawer } from "..";

export default function Test() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>("");
  return (
    <ComboBox
      content="123"
      data={[
        {
          value: "next.js",
          label: "Next.js",
        },
        {
          value: "sveltekit",
          label: "SvelteKit",
        },
        {
          value: "nuxt.js",
          label: "Nuxt.js",
        },
      ]}
      onChangeValue={(e: any) => {
        console.log(e.target.value);
        setValue(e.target.value);
        if (e.target.value === "") {
          setOpen(false);
        } else setOpen(true);
      }}
      onSelect={(e: string) => {
        console.log(e);
        setOpen(false);
        setValue("");
      }}
      open={open}
      setOpen={setOpen}
      value={value}
      setValue={setValue}
    />
  );
}
