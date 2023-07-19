import React from "react";

export interface DrawerProps {
  content: React.ReactNode;
  className?: string;
  open: boolean;
  onClose: () => void;
}
function Drawer(props: DrawerProps) {
  const { content, className, open, onClose } = props;
  return (
    <div className="drawer drawer-end z-[100] relative">
      <input
        id="my-drawer-4"
        type="checkbox"
        className="drawer-toggle"
        checked={open}
      />
      <div className="drawer-content"></div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          className="drawer-overlay"
          onClick={() => {
            onClose();
          }}
        ></label>
        <div
          className={`${className} flex flex-col flex-wrap w-80 h-full bg-base-200 p-0`}
        >
          {content}
        </div>
      </div>
    </div>
  );
}

export default React.forwardRef(Drawer);
