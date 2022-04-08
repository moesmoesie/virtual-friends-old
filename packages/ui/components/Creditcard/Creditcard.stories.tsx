import React from "react";
import { ComponentStory, type ComponentMeta } from "@storybook/react";
import Component from "./Creditcard";

export default {
  title: "Company/Creditcard",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Creditcard = Template.bind({});
Creditcard.args = {
  bank: "Virtual Friends Bank",
  name: "DEVELOPER MOOSE",
  number: "4145 895XX XXXX 9873",
};

Creditcard.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/ELu4gwRGS5i2f6XSggCC2P/Virtual-Friends-Website?node-id=333%3A494",
  },
};
