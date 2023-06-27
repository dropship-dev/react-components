import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "../src/Input";
import React from "react";
import { Label } from "@radix-ui/react-label";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/Input",
  component: Input,
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Normal: Story = {
  args: {
    small: false,
    label: "Label",
    subLabel: "Sublabel",
    placeholder: "Text",
    iconPre: <p>1</p>,
    iconAfter: <p>2</p>,
  },
};
export const Small: Story = {
  args: {
    small: true,
    label: "Label",
    subLabel: "Sublabel",
    placeholder: "Text",
  },
};
