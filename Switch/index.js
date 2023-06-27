"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Switch = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const switch_1 = require("./components/switch");
function Switch(props) {
    const { initialValue, onCheckedChange } = props;
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex items-center space-x-2", children: (0, jsx_runtime_1.jsx)(switch_1.Switch, { defaultChecked: initialValue, onCheckedChange: onCheckedChange }) }));
}
exports.Switch = Switch;
