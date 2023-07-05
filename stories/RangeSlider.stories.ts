import type { Meta, StoryObj } from "@storybook/react";

import { Slider } from "../src/RangeSlider";

const meta = {
  title: "Example/RangeSlider",
  component: Slider,
  tags: ["autodocs"],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    min: 1,
    max: 100,
    defaultValue: [1, 100],
  },
};
