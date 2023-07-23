import React from "react";
import { Dialog, Drawer } from "..";

export default function Test(props: { sizePopup?: boolean }) {
  const [open, setOpen] = React.useState(false);
  const [openDrawer, setOpenDrawer] = React.useState(false);
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
    </>
  );
}
