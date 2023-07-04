import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "../src";

const meta = {
  title: "Example/Switch",
  component: Switch,
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    danger: false,
  },
};
