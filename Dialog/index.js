"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const __1 = require("../");
const diaglog_1 = require("./components/diaglog");
function Dialog() {
    return ((0, jsx_runtime_1.jsxs)(diaglog_1.AlertDialog, { children: [(0, jsx_runtime_1.jsx)(diaglog_1.AlertDialogTrigger, { asChild: true, children: (0, jsx_runtime_1.jsx)(__1.Button, { content: "open" }) }), (0, jsx_runtime_1.jsxs)(diaglog_1.AlertDialogContent, { children: [(0, jsx_runtime_1.jsxs)(diaglog_1.AlertDialogHeader, { children: [(0, jsx_runtime_1.jsx)(diaglog_1.AlertDialogTitle, { children: "Are you absolutely sure?" }), (0, jsx_runtime_1.jsx)(diaglog_1.AlertDialogDescription, { children: "This action cannot be undone. This will permanently delete your account and remove your data from our servers." })] }), (0, jsx_runtime_1.jsxs)(diaglog_1.AlertDialogFooter, { children: [(0, jsx_runtime_1.jsx)(diaglog_1.AlertDialogCancel, { children: "Cancel" }), (0, jsx_runtime_1.jsx)(diaglog_1.AlertDialogAction, { children: "Continue" })] })] })] }));
}
exports.default = Dialog;
