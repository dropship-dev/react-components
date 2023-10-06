import type { Meta, StoryObj } from "@storybook/react";

import { PopoverNoti } from "../src";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/PopoverNoti",
  component: PopoverNoti,
  tags: ["autodocs"],
} satisfies Meta<typeof PopoverNoti>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {
    content: "open",
    triger: "content",
  },
};
