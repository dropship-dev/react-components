"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarBase = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const avatar_1 = require("./components/avatar");
function AvatarBase(props) {
    let { src, alt, rounded, size } = props;
    if (size === undefined)
        size = 36;
    return ((0, jsx_runtime_1.jsxs)(avatar_1.Avatar, { rounded: rounded, size: size, className: "", children: [(0, jsx_runtime_1.jsx)(avatar_1.AvatarImage, { src: src, alt: `@${alt}` }), (0, jsx_runtime_1.jsx)(avatar_1.AvatarFallback, { children: alt })] }));
}
exports.AvatarBase = AvatarBase;
