"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const popover_1 = require("../ComboBox/components/popover");
function PopoverNoti(props) {
    const { triger, content } = props;
    return ((0, jsx_runtime_1.jsxs)(popover_1.Popover, { children: [(0, jsx_runtime_1.jsx)(popover_1.PopoverTrigger, { children: triger }), (0, jsx_runtime_1.jsx)(popover_1.PopoverContent, { children: content })] }));
}
exports.default = PopoverNoti;
