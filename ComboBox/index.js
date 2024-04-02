"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const __1 = require("../");
const command_1 = require("./components/command");
function Combobox(props) {
    const { data, content, onSelect, onChangeValue, icon, open, value } = props;
    return ((0, jsx_runtime_1.jsxs)(command_1.Command, { children: [(0, jsx_runtime_1.jsx)(__1.Input, { iconPre: icon, value: value, placeholder: `Search ${content} ...`, onChange: onChangeValue }), value !== "" && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(command_1.CommandEmpty, { children: ["No ", content, " found."] }), (0, jsx_runtime_1.jsx)(command_1.CommandGroup, { children: data.map((item) => ((0, jsx_runtime_1.jsx)(command_1.CommandItem, { onSelect: onSelect, children: item.label }, item.value))) })] }))] }));
}
exports.default = Combobox;
__exportStar(require("./components/command"), exports);
__exportStar(require("./components/dialog"), exports);
__exportStar(require("./components/popover"), exports);
