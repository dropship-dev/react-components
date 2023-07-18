import React from "react";

export interface DrawerProps {
  content: React.ReactNode;
  classDrawer?: string;
}
function Drawer(props: DrawerProps, ref: React.ForwardedRef<HTMLInputElement>) {
  const { content, classDrawer } = props;
  return (
    <div className="drawer drawer-end z-[100] relative">
      <input
        id="my-drawer-4"
        type="checkbox"
        className="drawer-toggle"
        ref={ref}
      />
      <div className="drawer-content"></div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <div className={`${classDrawer} menu w-80 h-full bg-base-200`}>
          {content}
        </div>
      </div>
    </div>
  );
}

export default React.forwardRef(Drawer);
