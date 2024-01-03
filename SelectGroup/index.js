"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function SelectGroup(props) {
    const { data, placeholder, optionTop, onSelected, width, size, value } = props;
    return ((0, jsx_runtime_1.jsxs)("select", { className: `${width} ${size === "xs" ? "h-10" : size === "md" ? "h-12" : "h-10"} border-gray-300 text-[14px] select w-full max-w-xs py-2 border-[1px] border-solid rounded-[8px] gap-[8px] flex justify-start focus:outline-none`, placeholder: placeholder, value: value, onChange: onSelected, children: [optionTop?.length > 0 &&
                optionTop.map((item) => {
                    return ((0, jsx_runtime_1.jsx)("option", { className: "py-2 px3 text-textSM text-gray-900 border-b-[1px] border-b-gray-100", selected: true, children: item }));
                }), data.map((i, index) => ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("option", { disabled: true, className: "py-2 px3 text-textSM text-gray-400", children: i.name }, index), i.value.map((i, id) => ((0, jsx_runtime_1.jsx)("option", { className: "py-2 px3 text-textSM text-gray-900 pl-4", children: i }, id)))] })))] }));
}
exports.default = SelectGroup;
