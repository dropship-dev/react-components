import type { Meta, StoryObj } from "@storybook/react";

import { SwitchBase } from "../src/Switch";

const meta = {
  title: "Example/Switch",
  component: SwitchBase,
  tags: ["autodocs"],
} satisfies Meta<typeof SwitchBase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
