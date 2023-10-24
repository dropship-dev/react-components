"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const __1 = require("..");
function Test(props) {
    const [open, setOpen] = react_1.default.useState(false);
    const [openDrawer, setOpenDrawer] = react_1.default.useState(false);
    const [date, setDate] = react_1.default.useState();
    const [valueRating, setValueRating] = react_1.default.useState(3);
    const [datePicker, setDatePicker] = react_1.default.useState(new Date());
    const [datesinger, setDatesinger] = react_1.default.useState(new Date());
    const [value, setValue] = react_1.default.useState("");
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("button", { onClick: () => {
                    setOpen(true);
                }, children: "Open Dialog" }), (0, jsx_runtime_1.jsx)(__1.Dialog, { sizePopup: props.sizePopup, disableBackdropClick: true, onClose: () => {
                    setOpen(false);
                }, content: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col", children: ["Dialog", (0, jsx_runtime_1.jsx)(__1.DatePicker, { date: datesinger, setDate: setDatesinger }), (0, jsx_runtime_1.jsx)("button", { onClick: () => {
                                setOpen(false);
                            }, children: "Close" }), (0, jsx_runtime_1.jsx)("button", { children: "BBB" })] }), open: open })] }));
}
exports.default = Test;
