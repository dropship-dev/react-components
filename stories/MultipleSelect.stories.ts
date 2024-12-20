import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import MultipleSelect from "../src/MultipleSelect";

const meta = {
  title: "Example/MultipleSelect",
  component: MultipleSelect,
  tags: ["autodocs"],
} satisfies Meta<typeof MultipleSelect>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    data: [
      {
        name: "Fulfillment status",
        value: [
          {
            value: "Fulfilled",
            label: "Fulfilled",
            altLabel: "Fulfilled",
          },
          {
            value: "Partially fulfilled",
            label: "Partially fulfilled",
            altLabel: "Partially fulfilled",
          },
          {
            value: "Unfulfilled",
            label: "Unfulfilled",
            altLabel: "Unfulfilled",
          },
        ],
      },
      {
        name: "Payment status",
        value: [
          {
            value: "Paid",
            label: "Paid",
            altLabel: "Paid Status",
          },

          {
            value: "Refunded",
            label: "Refunded",
            altLabel: "Refunded Status",
          },
        ],
      },
      {
        name: "Dispute status",
        value: [
          {
            value: "Processing",
            label: "Processing",
            altLabel: "Processing",
          },
          {
            value: "Processing",
            label: "Processing",
            altLabel: "Win",
          },
          {
            value: "Processing",
            label: "Processing",
            altLabel: "Lose",
          },
        ],
      },
    ],
    onChange: (selectedValues) => console.log(selectedValues),
  },
};
