"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_slider_1 = __importDefault(require("react-slider"));
const utils_1 = require("../../lib/utils");
const RangeSlider = (_props) => {
    const isVertical = _props.orientation === "vertical";
    return ((0, jsx_runtime_1.jsx)(react_slider_1.default, { ..._props, renderThumb: (props, state) => ((0, jsx_runtime_1.jsx)("div", { ...props, className: (0, utils_1.cn)({
                "h-[16px]": !isVertical,
                "w-[16px]": isVertical,
                "aspect-square rounded-full bg-primary-500 cursor-grab": true,
            }) })), renderTrack: (props, state) => {
            const points = Array.isArray(state.value) ? state.value.length : null;
            const isMulti = points && points > 0;
            const isLast = isMulti ? state.index === points : state.index != 0;
            const isFirst = state.index === 0;
            return ((0, jsx_runtime_1.jsx)("div", { ...props, className: (0, utils_1.cn)({
                    "h-1/4 top-1/2 -translate-y-1/2": !isVertical,
                    "w-1/4 left-1/2 -translate-x-1/2": isVertical,
                    "rounded-full": true,
                    "bg-gray-200": isMulti ? isFirst || isLast : isLast,
                    "bg-indigo-500": isMulti ? !isFirst || !isLast : isFirst,
                }) }));
        }, renderMark: (props) => {
            return ((0, jsx_runtime_1.jsx)("div", { ...props, className: (0, utils_1.cn)({
                    "top-1/2 -translate-y-1/2": !isVertical,
                    "left-1/2 -translate-x-1/2": isVertical,
                    "h-1 w-1": true,
                    "rounded-full bg-indigo-500": true,
                }) }));
        } }));
};
exports.default = RangeSlider;
