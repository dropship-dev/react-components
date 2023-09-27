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
      {
        value: "astro2",
        label: "Astro1",
      },
      {
        value: "astro3",
        label: "Astro2",
      },
      {
        value: "astro4",
        label: "Astro3",
      },
      {
        value: "astro66",
        label: "Astro5",
      },
      {
        value: "sveltekit1",
        label: "SvelteKit2",
      },
      {
        value: "sveltekit3",
        label: "SvelteKit4",
      },
      {
        value: "sveltekit5",
        label: "SvelteKit6",
      },
    ],
    content: "tag",
    onSelect: (e: string | number) => {
      console.log(e);
    },
    placeholder: "Search",
    DeleteContent: "Clear data",
    value: "astro",
    onDelete: () => {},
  },
};
