import type { Meta, StoryObj } from "@storybook/react";
import { columns } from "../src/Table/components/columns";

import { TableProduct } from "../src";

const meta = {
  title: "Example/TableProducts",
  component: TableProduct,
  tags: ["autodocs"],
} satisfies Meta<typeof TableProduct>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: [
      {
        updatedAt: "Fri Jun 30 2023 17:41:07 GMT+0700 (Indochina Time)",
        createdAt: "Fri Jun 30 2023 17:41:07 GMT+0700 (Indochina Time)",
        isEnable: true,
        isActive: true,
        shippingFeeAdditional: 0,
        shippingFee: 0,
        variantOption: [
          {
            options: ["1", "2"],
            name: "red",
          },
        ],
        photos: ["url..."],
        details: "string",
        description: "string",
        name: "Cruise Ship Fluid Drift Bottle Titanic Creative Ship Sea Office Decoration Decompression Toy Decoration Decoration Birthday Gift",
        id: 0,
      },
      {
        updatedAt: "Fri Jun 30 2023 17:41:07 GMT+0700 (Indochina Time)",
        createdAt: "Fri Jun 30 2023 17:41:07 GMT+0700 (Indochina Time)",
        isEnable: true,
        isActive: false,
        shippingFeeAdditional: 0,
        shippingFee: 10,
        variantOption: [
          {
            options: ["1", "2"],
            name: "red",
          },
        ],
        photos: ["url..."],
        details: "string",
        description: "string",
        name: "ProCruise Ship Fluid Drift Bottle Titanic Creative Ship Sea Office Decoration Decompression Toy Decoration Decoration Birthday Giftuct2",
        id: 0,
      },
    ],
    columns: columns,
  },
};
