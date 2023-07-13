import React from "react";

export interface DrawerProps {
  openElemet: React.ReactNode;
  content: React.ReactNode;
  classDrawer?: string;
}
export default function Drawer(props: DrawerProps) {
  const { openElemet, content, classDrawer } = props;
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer-4">{openElemet}</label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <div className={classDrawer}>{content}</div>
      </div>
    </div>
  );
}
