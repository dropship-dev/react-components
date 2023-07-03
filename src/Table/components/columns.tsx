"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Chip } from "../../Chip";
import { ProductImage } from "../../ProductImage";
import moment from "moment";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  img: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "updatedAt",
    header: "Update",
    cell: ({ row }) => {
      return moment(row.getValue("updatedAt")).format("MM-DD-YYYY");
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return <Chip content={row.getValue("status")} />;
    },
  },
  {
    accessorKey: "img",
    header: "Status",
    cell: ({ row }) => {
      return <ProductImage src={row.getValue("img")} alt="Product Image" />;
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
