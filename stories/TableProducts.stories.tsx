import type { Meta, StoryObj } from "@storybook/react";
import { columns } from "../src/Table/components/columns";

import { TableProduct } from "../src/Table";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/TableProducts",
  component: TableProduct,
  tags: ["autodocs"],
} satisfies Meta<typeof TableProduct>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

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
        name: "Product1",
        id: 0,
      },
    ],
    columns: columns,
  },
};
