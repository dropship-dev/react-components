"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const __1 = require("..");
function Test() {
    const drawerRef = react_1.default.useRef(null);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("button", { onClick: () => drawerRef.current?.click(), children: "open" }), (0, jsx_runtime_1.jsx)(__1.Drawer, { content: (0, jsx_runtime_1.jsx)("div", { children: "content" }), ref: drawerRef })] }));
}
exports.default = Test;