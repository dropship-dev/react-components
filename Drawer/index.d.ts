import React from "react";
export interface DrawerProps {
    content: React.ReactNode;
    className?: string;
    open: boolean;
    onClose: () => void;
}
declare function Drawer(props: DrawerProps): import("react/jsx-runtime").JSX.Element;
export default Drawer;
