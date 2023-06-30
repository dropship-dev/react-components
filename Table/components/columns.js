"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.columns = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Chip_1 = require("../../Chip");
const ProductImage_1 = require("../../ProductImage");
const moment_1 = __importDefault(require("moment"));
exports.columns = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "updatedAt",
        header: "Update",
        cell: ({ row }) => {
            return (0, moment_1.default)(row.getValue("updatedAt")).format("MM-DD-YYYY");
        },
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            return (0, jsx_runtime_1.jsx)(Chip_1.Chip, { content: row.getValue("status") });
        },
    },
    {
        accessorKey: "img",
        header: "Status",
        cell: ({ row }) => {
            return (0, jsx_runtime_1.jsx)(ProductImage_1.ProductImage, { src: row.getValue("img"), alt: "Product Image" });
        },
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "amount",
        header: "Amount",
    },
];
