import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../src";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  argTypes: {
    onClick: { table: { disable: true } },
  },
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {
    size: "md",
    color: "destructive",
    content: "Button",
    hierarchy: "primary",
  },
};
