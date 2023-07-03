import type { Meta, StoryObj } from "@storybook/react";

import { ProductImage } from "../src/ProductImage";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/ProductImage",
  component: ProductImage,
  tags: ["autodocs"],
} satisfies Meta<typeof ProductImage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {
    src: "https://github.com/shadcn.png",
    alt: "@shadcn",
    size: "md",
  },
};
