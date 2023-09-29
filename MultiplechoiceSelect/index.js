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
const react_1 = __importStar(require("react"));
const __1 = require("../");
const popover_1 = require("../ComboBox/components/popover");
function MultiplechoiceSelect(props) {
    const { data, optionTop, width, onCheckedChange, onClear, callbackListSelected, } = props;
    const [value, setValue] = react_1.default.useState("All variants");
    const [open, setOpen] = react_1.default.useState(false);
    const [allSelected, setAllSelected] = react_1.default.useState([]);
    (0, react_1.useEffect)(() => {
        if (allSelected.length === 0) {
            setValue("All variants");
        }
        else if (allSelected.length === 1) {
            setValue(allSelected[0]);
        }
        else {
            setValue(`${allSelected[0] + " + " + (allSelected.length - 1)} ${allSelected.length - 1 > 1 ? "variants" : "variant"}`);
        }
        callbackListSelected && callbackListSelected(allSelected);
    }, [allSelected]);
    return ((0, jsx_runtime_1.jsx)("div", { className: width, children: (0, jsx_runtime_1.jsxs)(popover_1.Popover, { open: open, onOpenChange: (e) => setOpen(e), children: [(0, jsx_runtime_1.jsx)(popover_1.PopoverTrigger, { asChild: true, onClick: () => setOpen(true), className: "flex justify-center items-center", children: (0, jsx_runtime_1.jsx)(__1.Input, { value: value, readOnly: true, className: width, small: true }) }), (0, jsx_runtime_1.jsxs)(popover_1.PopoverContent, { className: `p-0 ${width} bg-white`, children: [optionTop?.length > 0 &&
                            optionTop.map((item) => {
                                return ((0, jsx_runtime_1.jsxs)("div", { className: "px-3 py-[10px] flex flex-row gap-3 text-textSM text-gray-900 items-center hover:bg-gray-50", children: [onCheckedChange && ((0, jsx_runtime_1.jsx)(__1.Checkbox, { onCheckedChange: (e) => {
                                                onCheckedChange(e);
                                                if (e) {
                                                    setAllSelected([...allSelected, item]);
                                                }
                                                else {
                                                    setAllSelected(allSelected.filter((select) => select !== item));
                                                }
                                            } })), item] }));
                            }), data.map((i, index) => ((0, jsx_runtime_1.jsxs)("div", { className: "max-h-96 overflow-y-auto", children: [(0, jsx_runtime_1.jsx)("div", { className: "text-textSM text-gray-400 px-3", children: i.name }, index), i.value.map((i, id) => ((0, jsx_runtime_1.jsxs)("div", { className: "pl-4 pr-3 py-[10px] flex flex-row gap-3 text-textSM text-gray-900 items-center hover:bg-gray-50", children: [onCheckedChange && ((0, jsx_runtime_1.jsx)(__1.Checkbox, { onCheckedChange: (e) => {
                                                onCheckedChange(e);
                                                if (e) {
                                                    setAllSelected([...allSelected, i]);
                                                }
                                                else {
                                                    setAllSelected(allSelected.filter((select) => select !== i));
                                                }
                                            }, checked: !!allSelected?.find((select) => select === i) })), i] })))] }))), (0, jsx_runtime_1.jsx)("div", { className: "w-full h-full p-3 text-textSM text-gray-900 hover:bg-gray-50 border-t-[1px] border-t-gray-400 cursor-pointer ", onClick: () => {
                                onClear && onClear();
                                setAllSelected([]);
                                setOpen(false);
                            }, children: "Clear selection" })] })] }) }));
}
exports.default = MultiplechoiceSelect;
