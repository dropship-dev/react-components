"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
function Dialog(props, ref) {
    const { content } = props;
    const [checked, setChecked] = react_1.default.useState(false);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("input", { ref: ref, className: "hidden", type: "checkbox", checked: checked, onChange: (e) => {
                    setChecked(e.target.checked);
                } }), (0, jsx_runtime_1.jsxs)("dialog", { id: "my_modal_2", className: "modal", open: checked, children: [(0, jsx_runtime_1.jsx)("form", { method: "dialog", className: "modal-box", children: content }), (0, jsx_runtime_1.jsx)("form", { method: "dialog", className: "modal-backdrop bg-transparent" })] })] }));
}
exports.default = react_1.default.forwardRef(Dialog);
