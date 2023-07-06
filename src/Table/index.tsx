import { DataTable } from "./components/data-table";
import { useState } from "react";

export default function TableProduct(props: { columns: any; data: any }) {
  const { columns, data } = props;

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
