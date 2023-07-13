"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function Drawer(props) {
    const { openElemet, content, classDrawer } = props;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "drawer drawer-end", children: [(0, jsx_runtime_1.jsx)("input", { id: "my-drawer-4", type: "checkbox", className: "drawer-toggle" }), (0, jsx_runtime_1.jsx)("div", { className: "drawer-content", children: (0, jsx_runtime_1.jsx)("label", { htmlFor: "my-drawer-4", children: openElemet }) }), (0, jsx_runtime_1.jsxs)("div", { className: "drawer-side", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "my-drawer-4", className: "drawer-overlay" }), (0, jsx_runtime_1.jsx)("div", { className: classDrawer, children: content })] })] }));
}
exports.default = Drawer;
