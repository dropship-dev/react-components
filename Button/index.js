"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
/**
 * Primary UI component for user interaction
 */
const Button = ({ primary = false, size = "medium", backgroundColor, label, ...props }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: "bg-slate-600 h-10", ...props, children: label }));
};
exports.Button = Button;
