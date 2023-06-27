import type { Meta, StoryObj } from "@storybook/react";

import { ToggerSwitch } from "../src/Switch";

const meta = {
  title: "Example/Switch",
  component: ToggerSwitch,
  tags: ["autodocs"],
} satisfies Meta<typeof ToggerSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
