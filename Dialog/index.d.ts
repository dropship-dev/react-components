import React from "react";
interface DialogProps {
    content: React.ReactNode;
    open: boolean;
    onClose: () => void;
}
declare const _default: React.ForwardRefExoticComponent<DialogProps & React.RefAttributes<unknown>>;
export default _default;
