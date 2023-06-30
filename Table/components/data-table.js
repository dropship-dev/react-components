"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTable = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_table_1 = require("@tanstack/react-table");
const ui_1 = require("./ui");
function DataTable({ columns, data, }) {
    const table = (0, react_table_1.useReactTable)({
        data,
        columns,
        getCoreRowModel: (0, react_table_1.getCoreRowModel)(),
    });
    return ((0, jsx_runtime_1.jsx)("div", { className: "rounded-md border", children: (0, jsx_runtime_1.jsxs)(ui_1.Table, { children: [(0, jsx_runtime_1.jsx)(ui_1.TableHeader, { children: table.getHeaderGroups().map((headerGroup) => ((0, jsx_runtime_1.jsx)(ui_1.TableRow, { children: headerGroup.headers.map((header) => {
                            return ((0, jsx_runtime_1.jsx)(ui_1.TableHead, { children: header.isPlaceholder
                                    ? null
                                    : (0, react_table_1.flexRender)(header.column.columnDef.header, header.getContext()) }, header.id));
                        }) }, headerGroup.id))) }), (0, jsx_runtime_1.jsx)(ui_1.TableBody, { children: table.getRowModel().rows?.length ? (table.getRowModel().rows.map((row) => ((0, jsx_runtime_1.jsx)(ui_1.TableRow, { "data-state": row.getIsSelected() && "selected", children: row.getVisibleCells().map((cell) => ((0, jsx_runtime_1.jsx)(ui_1.TableCell, { children: (0, react_table_1.flexRender)(cell.column.columnDef.cell, cell.getContext()) }, cell.id))) }, row.id)))) : ((0, jsx_runtime_1.jsx)(ui_1.TableRow, { children: (0, jsx_runtime_1.jsx)(ui_1.TableCell, { colSpan: columns.length, className: "h-24 text-center", children: "No results." }) })) })] }) }));
}
exports.DataTable = DataTable;
