import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Button, Drawer, Label } from "../src";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/Drawer",
  component: Drawer,
  tags: ["autodocs"],
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {
    content: (
      <>
        <Button content="open" />
        <Button content="open" />
        <Button content="open" />
        <Button content="open" />
      </>
    ),
  },
};
