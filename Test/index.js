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
    const [openCombobox, setOpenCombobox] = react_1.default.useState(false);
    const [valueRating, setValueRating] = react_1.default.useState(3);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("button", { onClick: () => {
                    setOpen(true);
                }, children: "Open Dialog" }), (0, jsx_runtime_1.jsx)("button", { onClick: () => {
                    setOpenDrawer(true);
                }, children: "Open Drawer" }), (0, jsx_runtime_1.jsx)(__1.Dialog, { sizePopup: props.sizePopup, onClose: () => {
                    setOpen(false);
                }, content: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col", children: ["Dialog", (0, jsx_runtime_1.jsx)("button", { onClick: () => {
                                setOpen(false);
                            }, children: "Close" }), (0, jsx_runtime_1.jsx)("button", { children: "AAA" })] }), open: open }), (0, jsx_runtime_1.jsx)(__1.ComboBox, { content: "tag", data: [
                    {
                        value: "next.js",
                        label: "Next.js",
                    },
                    {
                        value: "sveltekit",
                        label: "SvelteKit",
                    },
                    {
                        value: "nuxt.js",
                        label: "Nuxt.js",
                    },
                ], onChangeValue: (e) => {
                    console.log(e.target.value);
                    if (e.target.value === "") {
                        setOpen(false);
                    }
                    else
                        setOpen(true);
                }, onSelect: (e) => {
                    setOpen(false);
                }, open: true, setOpen: setOpen }), (0, jsx_runtime_1.jsx)(__1.Drawer, { content: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col", children: ["Dialog", (0, jsx_runtime_1.jsx)("button", { onClick: () => {
                                setOpenDrawer(false);
                            }, children: "Close" })] }), open: openDrawer, onClose: () => {
                    setOpenDrawer(false);
                } }), (0, jsx_runtime_1.jsx)(__1.RangeDatePicker, { date: date, setDate: setDate, timezone: "America/New_York", defaultValues: "Today" }), (0, jsx_runtime_1.jsx)(__1.Slider, { min: 0, max: 100, defaultValue: [0, 100] }), (0, jsx_runtime_1.jsx)(__1.Rating, { rating: valueRating, setRating: setValueRating })] }));
}
exports.default = Test;
