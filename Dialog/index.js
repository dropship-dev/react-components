"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function Dialog(props) {
    const { content, onClose, open, sizePopup } = props;
    if (!sizePopup) {
        return ((0, jsx_runtime_1.jsxs)("dialog", { id: "my_modal_2", className: "modal", open: open, children: [(0, jsx_runtime_1.jsx)("div", { className: "modal-box dark:bg-white bg-white", style: { zIndex: 1000 }, children: content }), (0, jsx_runtime_1.jsx)("form", { style: { zIndex: 900 }, method: "dialog", className: "modal-backdrop bg-[rgba(30,35,52,0.24)] backdrop-blur-sm", onClick: () => {
                        onClose();
                    } })] }));
    }
    else
        return ((0, jsx_runtime_1.jsxs)("dialog", { id: "my_modal_2", className: "modal", open: open, children: [(0, jsx_runtime_1.jsx)("div", { className: "modal-box dark:bg-white bg-white w-11/12 max-w-[765px]", children: content }), (0, jsx_runtime_1.jsx)("form", { method: "dialog", className: "modal-backdrop bg-[rgba(30,35,52,0.24)] backdrop-blur-sm", onClick: () => {
                        onClose();
                    } })] }));
}
exports.default = Dialog;
