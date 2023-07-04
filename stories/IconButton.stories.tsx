import type { Meta, StoryObj } from "@storybook/react";

import React from "react";

import { PlusIcon } from "@radix-ui/react-icons";

import { IconButton } from "../src";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  argTypes: {
    onClick: { table: { disable: true } },
  },
  title: "Example/IconButton",
  component: IconButton,
  tags: ["autodocs"],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {
    size: "md",
    color: "blue",
    content: <PlusIcon />,
    roundedFull: true,
  },
};
