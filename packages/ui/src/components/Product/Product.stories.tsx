import React from "react";
import { ComponentStory, type ComponentMeta } from "@storybook/react";
import Component from "./Product";

export default {
  title: "ECommerce/Product",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Product = Template.bind({});
Product.args = {
  title: "T-Shirt Virtual Friends",
  price: "29,95",
  isFavorite: false,
  discount: {
    amount: "10,00",
    newPrice: "20,00",
    percentage: "30%",
  },
};

Product.parameters = {
  zeplinLink:
    "zpl://components?coids=623effef807526132df7bff5&pid=62339c5b4312c8b1de07b037",
};
