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
                }, children: "Open Dialog" }), (0, jsx_runtime_1.jsx)("button", { onClick: () => {
                    setOpenDrawer(true);
                }, children: "Open Drawer" }), (0, jsx_runtime_1.jsx)(__1.Dialog, { sizePopup: props.sizePopup, disableBackdropClick: true, onClose: () => {
                    setOpen(false);
                }, content: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col", children: ["Dialog", (0, jsx_runtime_1.jsx)(__1.DatePicker, { date: datesinger, setDate: setDatesinger }), (0, jsx_runtime_1.jsx)("button", { onClick: () => {
                                setOpen(false);
                            }, children: "Close" }), (0, jsx_runtime_1.jsx)("button", { children: "BBB" })] }), open: open }), (0, jsx_runtime_1.jsx)(__1.ComboBox, { content: "tag", data: [
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
                } }), (0, jsx_runtime_1.jsx)(__1.DatePicker, { date: datePicker, setDate: setDatePicker }), (0, jsx_runtime_1.jsx)(__1.RangeDatePicker, { date: date, setDate: setDate, defaultValues: __1.RangeDatePickerDefaultValues.TODAY }), (0, jsx_runtime_1.jsx)(__1.Slider, { min: 0, max: 100, defaultValue: [0, 100] }), (0, jsx_runtime_1.jsx)(__1.Rating, { rating: valueRating, setRating: setValueRating }), (0, jsx_runtime_1.jsx)(__1.ComboboxSearch, { data: [
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
                        label: ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row flex-wrap items-center gap-2", children: [(0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.10875 4.10875C5.67155 2.54594 7.79116 1.66797 10.0013 1.66797C12.2114 1.66797 14.3311 2.54594 15.8939 4.10875C17.4567 5.67155 18.3346 7.79116 18.3346 10.0013C18.3346 11.0957 18.1191 12.1793 17.7003 13.1903C17.2815 14.2014 16.6677 15.12 15.8939 15.8939C15.12 16.6677 14.2014 17.2815 13.1903 17.7003C12.1793 18.1191 11.0957 18.3346 10.0013 18.3346C8.90695 18.3346 7.82332 18.1191 6.81227 17.7003C5.80123 17.2815 4.88257 16.6677 4.10875 15.8939C3.33492 15.12 2.7211 14.2014 2.30231 13.1903C1.88352 12.1793 1.66797 11.0957 1.66797 10.0013C1.66797 7.79116 2.54594 5.67155 4.10875 4.10875ZM10.0013 3.33464C8.23319 3.33464 6.5375 4.03701 5.28726 5.28726C4.03701 6.5375 3.33464 8.23319 3.33464 10.0013C3.33464 10.8768 3.50707 11.7437 3.84211 12.5525C4.17714 13.3614 4.6682 14.0963 5.28726 14.7153C5.90631 15.3344 6.64124 15.8255 7.45008 16.1605C8.25892 16.4955 9.12582 16.668 10.0013 16.668C10.8768 16.668 11.7437 16.4955 12.5525 16.1605C13.3614 15.8255 14.0963 15.3344 14.7153 14.7153C15.3344 14.0963 15.8255 13.3614 16.1605 12.5525C16.4955 11.7437 16.668 10.8768 16.668 10.0013C16.668 8.23319 15.9656 6.5375 14.7153 5.28726C13.4651 4.03701 11.7694 3.33464 10.0013 3.33464ZM10.0013 5.83464C10.4615 5.83464 10.8346 6.20773 10.8346 6.66797V10.0013C10.8346 10.4615 10.4615 10.8346 10.0013 10.8346C9.54106 10.8346 9.16797 10.4615 9.16797 10.0013V6.66797C9.16797 6.20773 9.54106 5.83464 10.0013 5.83464ZM9.16797 13.3346C9.16797 12.8744 9.54106 12.5013 10.0013 12.5013H10.0096C10.4699 12.5013 10.843 12.8744 10.843 13.3346C10.843 13.7949 10.4699 14.168 10.0096 14.168H10.0013C9.54106 14.168 9.16797 13.7949 9.16797 13.3346Z", fill: "#EB403C" }) }), "ABC"] })),
                    },
                ], placeholder: "Search", value: value, setValue: setValue, width: 300 }), (0, jsx_runtime_1.jsx)(__1.TooltipComponent, { content: "Tooltip", children: (0, jsx_runtime_1.jsx)("div", { children: "Tooltip" }) })] }));
}
exports.default = Test;
