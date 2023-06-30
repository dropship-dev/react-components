"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skeleton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const seketon_1 = require("./components/seketon");
function Skeleton(props) {
    const { className } = props;
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex items-center space-x-4", children: (0, jsx_runtime_1.jsx)("div", { className: "space-y-2", children: (0, jsx_runtime_1.jsx)(seketon_1.Skeleton, { className: className }) }) }));
}
exports.Skeleton = Skeleton;
