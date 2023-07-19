"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const select_1 = require("./components/select");
const __1 = require("..");
function Select(props) {
    const { data, placeholder, width, icon, label, onSelected, defaultValue, size, } = props;
    return ((0, jsx_runtime_1.jsxs)(select_1.Select, { onValueChange: onSelected, defaultValue: defaultValue, children: [label && (0, jsx_runtime_1.jsx)(__1.Label, { content: label, size: "textXL", fontWeight: "medium" }), (0, jsx_runtime_1.jsxs)(select_1.SelectTrigger, { className: `${width} ${size === "xs" ? "h-10" : size === "md" ? "h-12" : "h-11"} border-gray-300 py-2 border-[1px] border-solid rounded-[8px] gap-[8px] flex justify-start focus:outline-none`, children: [icon, (0, jsx_runtime_1.jsx)("div", { className: "w-full flex flex-row justify-between text-[14px]", children: (0, jsx_runtime_1.jsx)(select_1.SelectValue, { placeholder: placeholder ?? "" }) })] }), (0, jsx_runtime_1.jsx)(select_1.SelectContent, { children: (0, jsx_runtime_1.jsx)(select_1.SelectGroup, { children: data.map((item) => ((0, jsx_runtime_1.jsx)(select_1.SelectItem, { value: item.value, children: item.label }, item.value))) }) })] }));
}
exports.default = Select;
