import { ColumnDef } from "@tanstack/react-table";
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
export declare const columns: ColumnDef<Product>[];
