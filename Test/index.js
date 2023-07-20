"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const __1 = require("..");
function Test() {
    const [open, setOpen] = react_1.default.useState(false);
    const [openDrawer, setOpenDrawer] = react_1.default.useState(false);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("button", { onClick: () => {
                    setOpen(true);
                }, children: "Open Dialog" }), (0, jsx_runtime_1.jsx)("button", { onClick: () => {
                    setOpenDrawer(true);
                }, children: "Open Drawer" }), (0, jsx_runtime_1.jsx)(__1.Dialog, { onClose: () => {
                    setOpen(false);
                }, content: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col", children: ["Dialog", (0, jsx_runtime_1.jsx)("button", { onClick: () => {
                                setOpen(false);
                            }, children: "Close" }), (0, jsx_runtime_1.jsx)("button", { children: "AAA" })] }), open: open }), (0, jsx_runtime_1.jsx)(__1.Drawer, { content: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col", children: ["Dialog", (0, jsx_runtime_1.jsx)("button", { onClick: () => {
                                setOpenDrawer(false);
                            }, children: "Close" })] }), open: openDrawer, onClose: () => {
                    setOpenDrawer(false);
                } })] }));
}
exports.default = Test;
