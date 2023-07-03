import { DataTable } from "./components/data-table";

export function TableProduct(props: { columns: any; data: any }) {
  const { columns, data } = props;
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
