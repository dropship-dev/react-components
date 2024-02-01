"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const __1 = require("../");
const command_1 = require("./components/command");
function Combobox(props) {
    const { data, content, onSelect, onChangeValue, icon, open, value } = props;
    return ((0, jsx_runtime_1.jsxs)(command_1.Command, { children: [(0, jsx_runtime_1.jsx)(__1.Input, { iconPre: icon, value: value, placeholder: `Search ${content} ...`, onChange: onChangeValue }), value !== "" && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(command_1.CommandEmpty, { children: ["No ", content, " found."] }), (0, jsx_runtime_1.jsx)(command_1.CommandGroup, { children: data.map((item) => ((0, jsx_runtime_1.jsx)(command_1.CommandItem, { onSelect: onSelect, children: item.label }, item.value))) })] }))] }));
}
exports.default = Combobox;
