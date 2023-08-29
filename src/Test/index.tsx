import React from "react";
import { ComboBox, Dialog, Drawer, RangeDatePicker, Rating, Slider } from "..";
import { DateRange } from "react-day-picker";

export default function Test(props: { sizePopup?: boolean }) {
  const [open, setOpen] = React.useState(false);
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const [date, setDate] = React.useState<DateRange | undefined>();
  const [openCombobox, setOpenCombobox] = React.useState<boolean>(false);
  const [valueRating, setValueRating] = React.useState<number>(3);

  return (
    <>
      <button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Dialog
      </button>
      <button
        onClick={() => {
          setOpenDrawer(true);
        }}
      >
        Open Drawer
      </button>
      <Dialog
        sizePopup={props.sizePopup}
        onClose={() => {
          setOpen(false);
        }}
        content={
          <div className="flex flex-col">
            Dialog
            <button
              onClick={() => {
                setOpen(false);
              }}
            >
              Close
            </button>
            <button>AAA</button>
          </div>
        }
        open={open}
      />
      <ComboBox
        content="tag"
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

          if (e.target.value === "") {
            setOpen(false);
          } else setOpen(true);
        }}
        onSelect={(e: string) => {
          setOpen(false);
        }}
        open={true}
        setOpen={setOpen}
      />
      <Drawer
        content={
          <div className="flex flex-col">
            Dialog
            <button
              onClick={() => {
                setOpenDrawer(false);
              }}
            >
              Close
            </button>
          </div>
        }
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
        }}
      />
      <RangeDatePicker
        date={date}
        setDate={setDate}
        timezone="America/New_York"
        defaultValues="Today"
      />
      <Slider min={0} max={100} defaultValue={[0, 100]} />
      <Rating rating={valueRating} setRating={setValueRating} />
    </>
  );
}
