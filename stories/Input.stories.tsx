import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "../src/Input";
import React from "react";
import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons";

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
    label: "Label",
    subLabel: "Sublabel",
    placeholder: "Text",
    iconPre: <GearIcon />,
    iconAfter: <EnvelopeClosedIcon />,
  },
};
export const NoIcon1: Story = {
  args: {
    label: "Label",
    subLabel: "Sublabel",
    placeholder: "Text",
    iconAfter: <PersonIcon />,
  },
};
export const NoIcon2: Story = {
  args: {
    label: "Label",
    subLabel: "Sublabel",
    placeholder: "Text",
    iconPre: <RocketIcon />,
  },
};
