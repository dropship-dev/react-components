"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const data_table_1 = require("./components/data-table");
function TableProduct(props) {
    const { columns, data } = props;
    return ((0, jsx_runtime_1.jsx)("div", { className: "container mx-auto py-10", children: (0, jsx_runtime_1.jsx)(data_table_1.DataTable, { columns: columns, data: data }) }));
}
exports.default = TableProduct;
