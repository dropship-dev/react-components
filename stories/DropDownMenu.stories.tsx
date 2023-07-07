import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { DropDownMenu, Button } from "../src";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/DropDownMenu",
  component: DropDownMenu,
  tags: ["autodocs"],
} satisfies Meta<typeof DropDownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {
    listAction: [<>1</>, <>2</>],
    content: "...",
  },
};
