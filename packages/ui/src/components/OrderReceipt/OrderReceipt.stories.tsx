import React from "react";
import { ComponentStory, type ComponentMeta } from "@storybook/react";
import Component from "./OrderReceipt";
import { withDesign } from "storybook-addon-designs";

export default {
  title: "Ecommerce/Order Receipt",
  component: Component,
  decorators: [withDesign],
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const OrderReceipt = Template.bind({});
OrderReceipt.args = {};

OrderReceipt.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/ELu4gwRGS5i2f6XSggCC2P/Virtual-Friends-Website?node-id=263%3A161",
  },
};
