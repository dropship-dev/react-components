"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioGroupPrimitive = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const __1 = require("..");
const radio_group_1 = require("./radio-group");
Object.defineProperty(exports, "RadioGroupPrimitive", { enumerable: true, get: function () { return radio_group_1.RadioGroupPrimitive; } });
const RadioButton = (props) => {
    const { data, defaultValue, value, setValue } = props;
    return ((0, jsx_runtime_1.jsx)(radio_group_1.RadioGroup, { defaultValue: defaultValue, value: value, children: data.map((item) => ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row gap-3 items-center", children: [(0, jsx_runtime_1.jsx)(radio_group_1.RadioGroupItem, { value: item.value, id: item.id, className: "translate-y-[-2px]", onClick: () => setValue && setValue(item.value) }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(__1.Label, { htmlFor: item.id, content: item.value, className: "text-textSM font-medium" }) })] }, item.id))) }));
};
exports.default = RadioButton;
