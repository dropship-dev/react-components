"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function Drawer(props) {
    const { content, className, open, onClose } = props;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "drawer drawer-end z-[100] relative", children: [(0, jsx_runtime_1.jsx)("input", { id: "my-drawer-4", type: "checkbox", className: "drawer-toggle", checked: open, onChange: () => { } }), (0, jsx_runtime_1.jsx)("div", { className: "drawer-content" }), (0, jsx_runtime_1.jsxs)("div", { className: "drawer-side", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "my-drawer-4", className: "drawer-overlay", onClick: () => {
                            onClose();
                        } }), (0, jsx_runtime_1.jsx)("div", { className: `${className} flex flex-col flex-wrap w-80 h-full bg-base-200 p-0`, children: content })] })] }));
}
exports.default = Drawer;