"use client";

import { ColumnDef } from "@tanstack/react-table";
import Chip from "../../Chip";
import { ProductImage } from "../../ProductImage";
import moment from "moment";
import { ArrowUpDown } from "lucide-react";
import { Label } from "../../";

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
            size={14}
            frontWeight="light"
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
            frontWeight="light"
            className="whitespace-nowrap"
          />
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => (
      <Label
        size={14}
        frontWeight="light"
        content={parseFloat(row.getValue("shippingFee")).toLocaleString(
          "en-US",
          {
            style: "currency",
            currency: "USD",
          }
        )}
      />
    ),
  },
];
