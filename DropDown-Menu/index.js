"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const dropdown_menu_1 = require("./components/dropdown-menu");
function Dropdown(props) {
    const { listAction, content } = props;
    return ((0, jsx_runtime_1.jsxs)(dropdown_menu_1.DropdownMenu, { children: [(0, jsx_runtime_1.jsx)(dropdown_menu_1.DropdownMenuTrigger, { children: content }), (0, jsx_runtime_1.jsx)(dropdown_menu_1.DropdownMenuContent, { children: listAction.map((item, index) => ((0, jsx_runtime_1.jsx)(dropdown_menu_1.DropdownMenuItem, { children: item }, index))) })] }));
}
exports.default = Dropdown;
