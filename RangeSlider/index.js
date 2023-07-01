"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const rangeslider_1 = __importDefault(require("./components/rangeslider"));
function Slider(props) {
    const { min, max, className, onChange } = props;
    return ((0, jsx_runtime_1.jsx)(rangeslider_1.default, { className: "w-full h-[16px]", defaultValue: [min, max], onChange: onChange }));
}
exports.Slider = Slider;
