import { RadixButtonProps } from "./../src/RadixButton/index";
import type { Meta, StoryObj } from "@storybook/react";

import { RadixButton } from "../src";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  argTypes: {
    onClick: { table: { disable: true } },
  },
  title: "Example/Radix Button",
  component: RadixButton,
  tags: ["autodocs"],
} satisfies Meta<RadixButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: "Radix Button",
  },
};
