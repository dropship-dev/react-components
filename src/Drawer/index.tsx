import React from "react";

export interface DrawerProps {
  content: React.ReactNode;
  classDrawer?: string;
  ref?: any;
}
function Drawer(props: DrawerProps) {
  const { content, classDrawer, ref } = props;
  return (
    <div className="drawer drawer-end">
      <input
        id="my-drawer-4"
        type="checkbox"
        className="drawer-toggle"
        ref={ref}
      />
      <div className="drawer-content"></div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <div className={`${classDrawer} menu p-4 w-80 h-full bg-base-200`}>
          {content}
        </div>
      </div>
    </div>
  );
}

export default React.forwardRef(Drawer);
