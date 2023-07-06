"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.columns = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Chip_1 = __importDefault(require("../../Chip"));
const ProductImage_1 = require("../../ProductImage");
const lucide_react_1 = require("lucide-react");
const __1 = require("../../");
const __2 = require("../../");
exports.columns = [
    {
        id: "select",
        header: ({ table }) => ((0, jsx_runtime_1.jsx)(__2.Checkbox, { checked: table.getIsAllPageRowsSelected(), onCheckedChange: (value) => {
                table.toggleAllPageRowsSelected(!!value);
            }, "aria-label": "Select all" })),
        cell: ({ row }) => ((0, jsx_runtime_1.jsx)(__2.Checkbox, { checked: row.getIsSelected(), onCheckedChange: (value) => {
                row.toggleSelected(!!value);
            }, "aria-label": "Select row" })),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "photos",
        header: "Image",
        cell: ({ row }) => {
            return ((0, jsx_runtime_1.jsx)(ProductImage_1.ProductImage, { src: row.getValue("photos"), alt: "Product Image", size: "md" }));
        },
    },
    {
        accessorKey: "name",
        header: "Name",
        maxSize: 20,
        cell: ({ row }) => {
            const isActive = row.getValue("isActive");
            return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row gap-[12px]", children: [(0, jsx_runtime_1.jsx)(__1.Label, { content: row.getValue("name"), size: "textxl", frontWeight: "light", className: "flex-1" }), isActive ? ((0, jsx_runtime_1.jsx)(Chip_1.default, { variant: "danger", size: "sm", content: "Inactivate" })) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}))] }));
        },
    },
    {
        accessorKey: "isActive",
        header: "",
        cell: () => "",
    },
    {
        accessorKey: "shippingFee",
        header: ({ column }) => {
            return ((0, jsx_runtime_1.jsxs)("div", { onClick: () => column.toggleSorting(column.getIsSorted() === "asc"), className: "flex flex-row items-center", children: [(0, jsx_runtime_1.jsx)(__1.Label, { content: "Shipping fee", frontWeight: "light", className: "whitespace-nowrap", size: "textxl" }), (0, jsx_runtime_1.jsx)(lucide_react_1.ArrowUpDown, { className: "ml-2 h-4 w-4" })] }));
        },
        cell: ({ row }) => ((0, jsx_runtime_1.jsx)(__1.Label, { size: "textxl", frontWeight: "light", content: parseFloat(row.getValue("shippingFee")).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
            }) })),
    },
];
