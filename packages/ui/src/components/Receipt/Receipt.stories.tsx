import React from "react";
import { ComponentStory, type ComponentMeta } from "@storybook/react";
import Component from "./Receipt";
import { withDesign } from "storybook-addon-designs";

export default {
  title: "Ecommerce/Receipt",
  component: Component,
  decorators: [withDesign],
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
  design: {
    type: "figma",
    url: "https://www.figma.com/file/ELu4gwRGS5i2f6XSggCC2P/Virtual-Friends-Website?node-id=263%3A161",
  },
  zeplinLink:
    "zpl://components?pid=62339c5b4312c8b1de07b037&coids=623e362486d7efa444e2088f",
};
