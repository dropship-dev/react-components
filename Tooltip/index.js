"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const tooltip_1 = require("./tooltip");
function TooltipComponent(props) {
    const { children, content } = props;
    return ((0, jsx_runtime_1.jsx)(tooltip_1.TooltipProvider, { children: (0, jsx_runtime_1.jsxs)(tooltip_1.Tooltip, { children: [(0, jsx_runtime_1.jsx)(tooltip_1.TooltipTrigger, { asChild: true, children: children }), (0, jsx_runtime_1.jsx)(tooltip_1.TooltipContent, { children: (0, jsx_runtime_1.jsx)("div", { children: content }) })] }) }));
}
exports.default = TooltipComponent;
