"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
function Dialog(props) {
    const { content, onClose, open } = props;
    return ((0, jsx_runtime_1.jsxs)("dialog", { id: "my_modal_2", className: "modal", open: open, children: [(0, jsx_runtime_1.jsx)("form", { method: "dialog", className: "modal-box dark:bg-white", children: content }), (0, jsx_runtime_1.jsx)("form", { method: "dialog", className: "modal-backdrop bg-[rgba(30,35,52,0.24)] backdrop-blur-sm", children: (0, jsx_runtime_1.jsx)("button", { onClick: () => {
                        onClose();
                    } }) })] }));
}
exports.default = react_1.default.forwardRef(Dialog);
