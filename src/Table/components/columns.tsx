"use client";

import { ColumnDef } from "@tanstack/react-table";
import Chip from "../../Chip";
import { ProductImage } from "../../ProductImage";
import moment from "moment";
import { ArrowUpDown } from "lucide-react";
import { Label } from "../../";
import { Checkbox } from "../../";

export type Product = {
  id: string;
  img: string;
  name: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
  isActive: boolean;
  currency?: string;
};

export const columns: ColumnDef<Product>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => {
          table.toggleAllPageRowsSelected(!!value);
        }}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => {
          row.toggleSelected(!!value);
        }}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "photos",
    header: "Image",
    cell: ({ row }) => {
      return (
        <ProductImage
          src={row.getValue("photos")}
          alt="Product Image"
          size="md"
        />
      );
    },
  },
  {
    accessorKey: "name",
    header: "Name",
    maxSize: 20,
    cell: ({ row }) => {
      const isActive = row.getValue("isActive");
      return (
        <div className="flex flex-row gap-[12px]">
          <Label
            content={row.getValue("name")}
            size="textXL"
            fontWeight="light"
            className="flex-1"
          />
          {isActive ? (
            <Chip variant="danger" size="sm" content="Inactivate" />
          ) : (
            <></>
          )}
        </div>
      );
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
      return (
        <div
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex flex-row items-center"
        >
          <Label
            content="Shipping fee"
            fontWeight="light"
            className="whitespace-nowrap"
            size="textXL"
          />
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => (
      <Label
        size="textXL"
        fontWeight="light"
        content={parseFloat(row.getValue("shippingFee")).toLocaleString(
          "en-US",
          {
            style: "currency",
            currency: "USD",
          },
        )}
      />
    ),
  },
];
