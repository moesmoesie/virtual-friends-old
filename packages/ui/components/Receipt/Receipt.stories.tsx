import React from "react";
import { ComponentStory, type ComponentMeta } from "@storybook/react";
import Component from "./Receipt";

export default {
  title: "Ecommerce/Receipt",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Receipt = Template.bind({});
Receipt.args = {
  deliveryCost: "5,00",
  discount: {
    amount: "10,00",
    percentage: 40,
  },
  totalCost: "100,00",
  items: [
    {
      colour: "#FFFFFF",
      price: "29,95",
      quantity: 10,
      title: "T-Shirt Virtual Friends",
    },
    {
      colour: "#FFFFFF",
      price: "10,95",
      quantity: 4,
      title: "T-Shirt Virtual Friends",
    },
  ],
};

Receipt.parameters = {
  zeplinLink:
    "zpl://components?pid=62339c5b4312c8b1de07b037&coid=6240e0530a106610a9bf0b37",
};
