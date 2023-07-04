import type { Meta, StoryObj } from "@storybook/react";

import { ToggleTag } from "../src";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/ToggleTag",
  component: ToggleTag,
  tags: ["autodocs"],
} satisfies Meta<typeof ToggleTag>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {
    content: "Unavaliable",
    variant: "success",
  },
};
