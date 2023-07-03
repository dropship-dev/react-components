import type { Meta, StoryObj } from "@storybook/react";

import { Skeleton } from "../src/SkeletonLoading";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Avatar: Story = {
  args: {
    className: "w-[36px] h-[36px] rouder-[8px]",
  },
};
