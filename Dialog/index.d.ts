import React from "react";
interface DialogProps {
    content: React.ReactNode;
    open: boolean;
    width?: number;
    onClose: () => void;
}
declare function Dialog(props: DialogProps): import("react/jsx-runtime").JSX.Element;
export default Dialog;
