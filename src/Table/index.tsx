import { DataTable } from "./components/data-table";
import { useState } from "react";

export default function TableProduct(props: { columns: any; data: any }) {
  const { columns, data } = props;

  return <DataTable columns={columns} data={data} />;
}
