import React from "react";
import { Dialog, Drawer, RangeDatePicker, Slider } from "..";
import { DateRange } from "react-day-picker";

export default function Test(props: { sizePopup?: boolean }) {
  const [open, setOpen] = React.useState(false);
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const [date, setDate] = React.useState<DateRange | undefined>();

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
      <RangeDatePicker date={date} setDate={setDate} />
      <Slider min={0} max={100} defaultValue={[0, 100]} />
    </>
  );
}
