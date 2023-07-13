"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const __1 = require("..");
function Test() {
    const [open, setOpen] = react_1.default.useState(false);
    const [value, setValue] = react_1.default.useState("");
    return ((0, jsx_runtime_1.jsx)(__1.ComboBox, { content: "123", data: [
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
            setValue(e.target.value);
            if (e.target.value === "") {
                setOpen(false);
            }
            else
                setOpen(true);
        }, onSelect: (e) => {
            console.log(e);
            setOpen(false);
            setValue("");
        }, open: open, setOpen: setOpen, value: value, setValue: setValue }));
}
exports.default = Test;
