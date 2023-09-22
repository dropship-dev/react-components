"use strict";
"use client";
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
const react_icons_1 = require("@radix-ui/react-icons");
const utils_1 = require("../lib/utils");
const __1 = require("..");
const command_1 = require("../ComboBox/components/command");
const popover_1 = require("../ComboBox/components/popover");
const frameworks = [
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
    {
        value: "remix",
        label: "Remix",
    },
    {
        value: "astro",
        label: "Astro",
    },
];
function ComboboxDemo() {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");
    return ((0, jsx_runtime_1.jsxs)(popover_1.Popover, { open: open, onOpenChange: setOpen, children: [(0, jsx_runtime_1.jsx)(popover_1.PopoverTrigger, { asChild: true, children: (0, jsx_runtime_1.jsx)(__1.Button, { "aria-expanded": open, className: "w-[200px] justify-between", content: value
                        ? frameworks.find((framework) => framework.value === value)?.label
                        : "Select framework..." }) }), (0, jsx_runtime_1.jsx)(popover_1.PopoverContent, { className: "w-[200px] p-0", children: (0, jsx_runtime_1.jsxs)(command_1.Command, { children: [(0, jsx_runtime_1.jsx)(command_1.CommandInput, { placeholder: "Search framework...", className: "h-9" }), (0, jsx_runtime_1.jsx)(command_1.CommandEmpty, { children: "No framework found." }), (0, jsx_runtime_1.jsxs)(command_1.CommandGroup, { children: [frameworks.map((framework) => ((0, jsx_runtime_1.jsxs)(command_1.CommandItem, { onSelect: (currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue);
                                        setOpen(false);
                                    }, children: [framework.label, (0, jsx_runtime_1.jsx)(react_icons_1.CheckIcon, { className: (0, utils_1.cn)("ml-auto h-4 w-4", value === framework.value ? "opacity-100" : "opacity-0") })] }, framework.value))), (0, jsx_runtime_1.jsx)(command_1.CommandItem, { onSelect: () => {
                                        setValue("");
                                        setOpen(false);
                                    }, children: "Delete" })] })] }) })] }));
}
exports.default = ComboboxDemo;
