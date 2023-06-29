import type { Meta, StoryObj } from "@storybook/react";

import { Tag } from "../src/Tag";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/Tag",
  component: Tag,
  tags: ["autodocs"],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {
    content: "Tag",
    size: "sm",
    onCancle: () => console.log("Onclick 123"),
  },
};
