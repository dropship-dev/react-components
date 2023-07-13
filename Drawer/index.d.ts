import React from "react";
export interface DrawerProps {
    openElemet: React.ReactNode;
    content: React.ReactNode;
    classDrawer?: string;
}
export default function Drawer(props: DrawerProps): import("react/jsx-runtime").JSX.Element;
