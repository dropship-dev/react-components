import React from "react";
export interface DrawerProps {
    content: React.ReactNode;
    className?: string;
    open: boolean;
    onClose: () => void;
}
declare const _default: React.ForwardRefExoticComponent<DrawerProps & React.RefAttributes<unknown>>;
export default _default;
