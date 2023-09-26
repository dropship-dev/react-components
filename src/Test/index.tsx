import React from "react";
import {
  ComboBox,
  DatePicker,
  Dialog,
  Drawer,
  RangeDatePicker,
  RangeDatePickerDefaultValues,
  Rating,
  Slider,
} from "..";
import { DateRange } from "react-day-picker";

export default function Test(props: { sizePopup?: boolean }) {
  const [open, setOpen] = React.useState(false);
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const [date, setDate] = React.useState<DateRange | undefined>();
  const [valueRating, setValueRating] = React.useState<number>(3);
  const [datePicker, setDatePicker] = React.useState<Date | undefined>(
    new Date(),
  );
  const [datesinger, setDatesinger] = React.useState<Date | undefined>(
    new Date(),
  );
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
            <DatePicker date={datesinger} setDate={setDatesinger} />
            <button
              onClick={() => {
                setOpen(false);
              }}
            >
              Close
            </button>
            <button>BBB</button>
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
      <DatePicker date={datePicker} setDate={setDatePicker} />
      <RangeDatePicker
        date={date}
        setDate={setDate}
        defaultValues={RangeDatePickerDefaultValues.TODAY}
      />
      <Slider min={0} max={100} defaultValue={[0, 100]} />
      <Rating rating={valueRating} setRating={setValueRating} />
    </>
  );
}
