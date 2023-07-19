"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const skeleton_1 = require("./components/skeleton");
function Skeleton(props) {
    const { className } = props;
    return (0, jsx_runtime_1.jsx)(skeleton_1.Skeleton, { className: className });
}
exports.default = Skeleton;
