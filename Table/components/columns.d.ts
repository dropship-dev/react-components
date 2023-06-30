import { ColumnDef } from "@tanstack/react-table";
export type Payment = {
    id: string;
    img: string;
    amount: number;
    status: "pending" | "processing" | "success" | "failed";
    email: string;
};
export declare const columns: ColumnDef<Payment>[];
