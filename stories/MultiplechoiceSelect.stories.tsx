import type { Meta, StoryObj } from "@storybook/react";

import { ComboboxSearchMulti } from "../src";

import React from "react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/MultiplechoiceSelect",
  component: ComboboxSearchMulti,
  tags: ["autodocs"],
} satisfies Meta<typeof ComboboxSearchMulti>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {
    data: [
      {
        name: "1",
        value: [
          { label: "1", value: "1", labelInitial: "1" },
          { label: "2", value: "2", labelInitial: "2" },
        ],
      },
      {
        name: "2",
        value: [
          { label: "3", value: "3", labelInitial: "3" },
          { label: "4", value: "4", labelInitial: "4" },
        ],
      },
    ],
    width: "w-[200px]",
    optionTop: [],
    onSelected: (e: any) => {
      console.log(e);
    },
    callbackAllSelected: (e) => {
      console.log(e);
    },
    content: "Search",
  },
};
