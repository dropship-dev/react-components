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
        label: "1",
        value: "qwqwqw",
      },
      {
        label: "2",
        value: "wqwqw",
      },
      {
        label: "3",
        value: "121",
      },
      {
        label: "4",
        value: "ada",
      },
    ],
    placeholder: "Select number",
    width: "w-full",
    icon: <p className="text-[14px]">$</p>,
    onSelected: (e: any) => {
      console.log(e);
    },
    defaultValue: "1",
  },
};
