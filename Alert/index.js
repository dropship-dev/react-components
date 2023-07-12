"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const class_variance_authority_1 = require("class-variance-authority");
const utils_1 = require("../lib/utils");
const __1 = require("..");
const variants = {
    status: {
        success: "bg-success-25",
        warning: "bg-warning-25",
        error: "bg-destructive-25",
    },
};
const variantsHeader = {
    status: {
        success: "text-success-950",
        warning: "text-warning-950",
        error: "text-destructive-950",
    },
};
const variantsContent = {
    status: {
        success: "text-success-700",
        warning: "text-warning-700",
        error: "text-destructive-700",
    },
};
const alertVariants = (0, class_variance_authority_1.cva)("w-[372px] px-6 pt-4 pb-6 rounded-[12px] fixed top-5 right-6 z-[1000]", {
    variants: variants,
});
const alertHeader = (0, class_variance_authority_1.cva)("text-[18px] leading-[28px] fontWeight-500", {
    variants: variantsHeader,
});
const alertContent = (0, class_variance_authority_1.cva)("text-[14px] leading-[20px] fontWeight-400", {
    variants: variantsContent,
});
const Alert = React.forwardRef(({ status, content, header, open, timeOut, ...props }) => {
    const [openAlert, setOpenAlert] = React.useState(open);
    React.useEffect(() => {
        if (openAlert)
            setTimeout(() => {
                setOpenAlert(false);
            }, timeOut ?? 3000);
    }, [openAlert, open]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, utils_1.cn)(`${openAlert
            ? "transition-all ease-in-out duration-800 transform translate-x-[0]"
            : "transition-all ease-in-out duration-800 transform translate-x-[396px]"}`, alertVariants({
            status,
        })), ...props, children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between flex-row", children: [(0, jsx_runtime_1.jsx)("div", { className: "translate-x-[-9px]", children: status === "success" ? ((0, jsx_runtime_1.jsxs)("svg", { width: "42", height: "42", viewBox: "0 0 42 42", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [(0, jsx_runtime_1.jsxs)("g", { clipPath: "url(#clip0_1451_66321)", children: [(0, jsx_runtime_1.jsx)("circle", { cx: "21", cy: "21", r: "20.25", stroke: "#DCFAE6", strokeWidth: "1.5" }), (0, jsx_runtime_1.jsx)("circle", { cx: "21", cy: "21", r: "15.25", stroke: "#7CE0A8", strokeWidth: "1.5" }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M29.6398 15.9652C28.7629 14.4604 27.5083 13.2107 26 12.3399C24.5036 11.4759 22.8089 11.0144 21.081 11.0003C19.3531 10.9863 17.6511 11.4202 16.1409 12.2598C14.6307 13.0993 13.3637 14.3159 12.4636 15.7909C11.5635 17.2659 11.061 18.9489 11.005 20.6759L11 20.9999L11.005 21.3239C11.0614 23.0646 11.5715 24.7604 12.4847 26.2434C13.3979 27.7264 14.6826 28.9452 16.2116 29.7791C17.7406 30.6131 19.4608 31.0332 21.2021 30.998C22.9434 30.9627 24.6452 30.4733 26.1392 29.5782C27.6332 28.6831 28.8676 27.4133 29.72 25.8946C30.5725 24.3758 31.0135 22.6608 30.9994 20.9192C30.9854 19.1777 30.5167 17.47 29.6398 15.9652ZM26.2071 18.707C26.5976 18.3165 26.5976 17.6833 26.2071 17.2928C25.8166 16.9022 25.1834 16.9022 24.7929 17.2928L19.5 22.5857L17.2071 20.2928C16.8166 19.9022 16.1834 19.9022 15.7929 20.2928C15.4024 20.6833 15.4024 21.3165 15.7929 21.707L18.7929 24.707C19.1834 25.0975 19.8166 25.0975 20.2071 24.707L26.2071 18.707Z", fill: "#2EB26C" })] }), (0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsx)("clipPath", { id: "clip0_1451_66321", children: (0, jsx_runtime_1.jsx)("rect", { width: "42", height: "42", rx: "6", fill: "white" }) }) })] })) : status === "warning" ? ((0, jsx_runtime_1.jsxs)("svg", { width: "43", height: "42", viewBox: "0 0 43 42", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [(0, jsx_runtime_1.jsxs)("g", { clipPath: "url(#clip0_1126_66740)", children: [(0, jsx_runtime_1.jsx)("circle", { cx: "21.5", cy: "21", r: "20.25", stroke: "#FDF6C5", strokeWidth: "1.5" }), (0, jsx_runtime_1.jsx)("circle", { cx: "21.5", cy: "21", r: "15.25", stroke: "#FBE078", strokeWidth: "1.5" }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.4289 13.9289C16.3043 12.0536 18.8478 11 21.5 11C24.1522 11 26.6957 12.0536 28.5711 13.9289C30.4464 15.8043 31.5 18.3478 31.5 21C31.5 22.3132 31.2413 23.6136 30.7388 24.8268C30.2362 26.0401 29.4997 27.1425 28.5711 28.0711C27.6425 28.9997 26.5401 29.7362 25.3268 30.2388C24.1136 30.7413 22.8132 31 21.5 31C20.1868 31 18.8864 30.7413 17.6732 30.2388C16.4599 29.7362 15.3575 28.9997 14.4289 28.0711C13.5003 27.1425 12.7638 26.0401 12.2612 24.8268C11.7587 23.6136 11.5 22.3132 11.5 21C11.5 18.3478 12.5536 15.8043 14.4289 13.9289ZM21.5 13C19.3783 13 17.3434 13.8429 15.8431 15.3431C14.3429 16.8434 13.5 18.8783 13.5 21C13.5 22.0506 13.7069 23.0909 14.109 24.0615C14.511 25.0321 15.1003 25.914 15.8431 26.6569C16.586 27.3997 17.4679 27.989 18.4385 28.391C19.4091 28.7931 20.4494 29 21.5 29C22.5506 29 23.5909 28.7931 24.5615 28.391C25.5321 27.989 26.414 27.3997 27.1569 26.6569C27.8997 25.914 28.489 25.0321 28.891 24.0615C29.2931 23.0909 29.5 22.0506 29.5 21C29.5 18.8783 28.6571 16.8434 27.1569 15.3431C25.6566 13.8429 23.6217 13 21.5 13ZM21.5 16C22.0523 16 22.5 16.4477 22.5 17V21C22.5 21.5523 22.0523 22 21.5 22C20.9477 22 20.5 21.5523 20.5 21V17C20.5 16.4477 20.9477 16 21.5 16ZM20.5 25C20.5 24.4477 20.9477 24 21.5 24H21.51C22.0623 24 22.51 24.4477 22.51 25C22.51 25.5523 22.0623 26 21.51 26H21.5C20.9477 26 20.5 25.5523 20.5 25Z", fill: "#E7A822" })] }), (0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsx)("clipPath", { id: "clip0_1126_66740", children: (0, jsx_runtime_1.jsx)("rect", { x: "0.5", width: "42", height: "42", rx: "6", fill: "white" }) }) })] })) : status === "error" ? ((0, jsx_runtime_1.jsxs)("svg", { width: "42", height: "42", viewBox: "0 0 42 42", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [(0, jsx_runtime_1.jsxs)("g", { clipPath: "url(#clip0_1451_66286)", children: [(0, jsx_runtime_1.jsx)("circle", { cx: "21", cy: "21", r: "20.25", stroke: "#FDE4E2", strokeWidth: "1.5" }), (0, jsx_runtime_1.jsx)("circle", { cx: "21", cy: "21", r: "15.25", stroke: "#FAA19C", strokeWidth: "1.5" }), (0, jsx_runtime_1.jsx)("path", { d: "M26 12.3399C27.5083 13.2107 28.7629 14.4604 29.6398 15.9652C30.5167 17.47 30.9854 19.1777 30.9994 20.9192C31.0135 22.6608 30.5725 24.3758 29.72 25.8946C28.8676 27.4133 27.6332 28.6831 26.1392 29.5782C24.6452 30.4733 22.9434 30.9627 21.2021 30.998C19.4608 31.0332 17.7405 30.6131 16.2116 29.7791C14.6826 28.9452 13.3979 27.7264 12.4847 26.2434C11.5715 24.7604 11.0614 23.0646 11.005 21.3239L11 20.9999L11.005 20.6759C11.061 18.9489 11.5635 17.2659 12.4636 15.7909C13.3637 14.3159 14.6307 13.0993 16.1409 12.2598C17.6511 11.4202 19.3531 10.9863 21.081 11.0003C22.8089 11.0144 24.5036 11.4759 26 12.3399ZM21.01 23.9999L20.883 24.0069C20.64 24.0358 20.4159 24.1528 20.2534 24.3359C20.0909 24.5189 20.0011 24.7551 20.0011 24.9999C20.0011 25.2447 20.0909 25.4809 20.2534 25.6639C20.4159 25.8469 20.64 25.964 20.883 25.9929L21 25.9999L21.127 25.9929C21.37 25.964 21.5941 25.8469 21.7566 25.6639C21.9191 25.4809 22.0089 25.2447 22.0089 24.9999C22.0089 24.7551 21.9191 24.5189 21.7566 24.3359C21.5941 24.1528 21.37 24.0358 21.127 24.0069L21.01 23.9999ZM21 15.9999C20.7551 15.9999 20.5187 16.0898 20.3356 16.2526C20.1526 16.4154 20.0357 16.6396 20.007 16.8829L20 16.9999V20.9999L20.007 21.1169C20.0359 21.3599 20.153 21.5839 20.336 21.7465C20.519 21.909 20.7552 21.9988 21 21.9988C21.2448 21.9988 21.481 21.909 21.664 21.7465C21.847 21.5839 21.9641 21.3599 21.993 21.1169L22 20.9999V16.9999L21.993 16.8829C21.9643 16.6396 21.8474 16.4154 21.6644 16.2526C21.4813 16.0898 21.2449 15.9999 21 15.9999Z", fill: "#EB403C" })] }), (0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsx)("clipPath", { id: "clip0_1451_66286", children: (0, jsx_runtime_1.jsx)("rect", { width: "42", height: "42", rx: "6", fill: "white" }) }) })] })) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {})) }), (0, jsx_runtime_1.jsx)(__1.IconButton, { onClick: () => {
                            setOpenAlert(!openAlert);
                        }, content: (0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.79289 5.29289C6.18342 4.90237 6.81658 4.90237 7.20711 5.29289L12.5 10.5858L17.7929 5.29289C18.1834 4.90237 18.8166 4.90237 19.2071 5.29289C19.5976 5.68342 19.5976 6.31658 19.2071 6.70711L13.9142 12L19.2071 17.2929C19.5976 17.6834 19.5976 18.3166 19.2071 18.7071C18.8166 19.0976 18.1834 19.0976 17.7929 18.7071L12.5 13.4142L7.20711 18.7071C6.81658 19.0976 6.18342 19.0976 5.79289 18.7071C5.40237 18.3166 5.40237 17.6834 5.79289 17.2929L11.0858 12L5.79289 6.70711C5.40237 6.31658 5.40237 5.68342 5.79289 5.29289Z", fill: "#532B10" }) }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-5 flex flex-col gap-[6px]", children: [(0, jsx_runtime_1.jsx)(__1.Label, { content: header, className: (0, utils_1.cn)(alertHeader({
                            status,
                        })) }), (0, jsx_runtime_1.jsx)(__1.Label, { content: content, className: (0, utils_1.cn)(alertContent({
                            status,
                        })) })] })] }));
});
Alert.displayName = "Alert";
exports.default = Alert;
