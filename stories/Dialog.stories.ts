import type { Meta, StoryObj } from "@storybook/react";

import { Alert } from "../src";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/Alert",
  component: Alert,
  tags: ["autodocs"],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {
    status: "warning",
    header: "Warning",
    content: "This is a success alert — check it out!",
    open: true,
    timeOut: 100000,
  },
};
