import type { Meta, StoryObj } from "@storybook/react";

import { ComboboxSearch } from "../src";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/ComboBoxSearch",
  component: ComboboxSearch,
  tags: ["autodocs"],
} satisfies Meta<typeof ComboboxSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {
    data: [
      {
        value: "next.js",
        label: "Next.js",
      },
      {
        value: "sveltekit",
        label: "SvelteKit",
      },
      {
        value: "nuxt.js",
        label: "Nuxt.js",
      },
      {
        value: "remix",
        label: "Remix",
      },
      {
        value: "astro",
        label: "Astro",
      },
    ],
    content: "tag",
    onSelect: (e: string) => {
      console.log(e);
    },
    placeholder: "Search",
    DeleteContent: "Clear data",
  },
};
