import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "../src";

import React from "react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/Select",
  component: Select,
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {
    data: [
      {
        id: "1",
        value: "1",
      },
      {
        id: "2",
        value: "2",
      },
      {
        id: "3",
        value: "3",
      },
      {
        id: "4",
        value: "5",
      },
    ],
    placeholder: "Select number",
    width: "w-full",
    icon: <p className="text-[14px]">$</p>,
  },
};
