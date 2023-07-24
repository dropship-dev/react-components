"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function SelectGroup(props) {
    const { data, placeholder, optionTop, onSelected, width, size } = props;
    return ((0, jsx_runtime_1.jsxs)("select", { className: `${width} ${size === "xs" ? "h-10" : size === "md" ? "h-12" : "h-11"} border-gray-300 text-[14px] select w-full max-w-xs py-2 border-[1px] border-solid rounded-[8px] gap-[8px] flex justify-start focus:outline-none`, 
        //   className="select w-full max-w-xs focus:outline-none"
        placeholder: placeholder, onChange: onSelected, children: [optionTop && ((0, jsx_runtime_1.jsx)("option", { className: "py-2 px3 text-textSM text-gray-900 border-b-[1px] border-b-gray-100", selected: true, children: optionTop })), data.map((i) => {
                return ((0, jsx_runtime_1.jsxs)("div", { className: "border-b-[1px] border-b-gray-100", children: [(0, jsx_runtime_1.jsx)("option", { disabled: true, className: "py-2 px3 text-textSM text-gray-400", children: i.name }), i.value.map((i) => ((0, jsx_runtime_1.jsx)("option", { className: "py-2 px3 text-textSM text-gray-900", children: i })))] }));
            })] }));
}
exports.default = SelectGroup;
