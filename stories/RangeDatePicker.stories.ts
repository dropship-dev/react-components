import type { Meta, StoryObj } from "@storybook/react";

import { RangeDatePicker } from "../src";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/RangeDatePicker",
  component: RangeDatePicker,
  tags: ["autodocs"],
} satisfies Meta<typeof RangeDatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {},
};
