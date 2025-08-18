import type { Meta, StoryObj } from "@storybook/react";

import { RangeDatePicker, RangeDatePickerDefaultValues } from "../src";

const meta = {
  title: "Example/RangeDatePicker",
  component: RangeDatePicker,
  tags: ["autodocs"],
} satisfies Meta<typeof RangeDatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    date: { from: undefined, to: undefined },
    defaultValues: RangeDatePickerDefaultValues.TODAY,
    setDate: (d) => console.log("setDate", d),
  },
};
