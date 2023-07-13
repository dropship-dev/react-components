import React from "react";
export interface DrawerProps {
    content: React.ReactNode;
    classDrawer?: string;
    ref?: any;
}
declare const _default: React.ForwardRefExoticComponent<Omit<DrawerProps, "ref"> & React.RefAttributes<unknown>>;
export default _default;
