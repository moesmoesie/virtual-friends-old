import React from "react";
import { ComponentStory, type ComponentMeta } from "@storybook/react";
import Component from "./Input";

export default {
  title: "General/Input",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Passive = Template.bind({});
Passive.args = {
  placeholder: "Name",
  error: false,
};

Passive.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/ELu4gwRGS5i2f6XSggCC2P/Virtual-Friends-Website?node-id=530%3A797",
  },
};

export const Invalid = Template.bind({});
Invalid.args = {
  placeholder: "Name",
  error: true,
};

Invalid.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/ELu4gwRGS5i2f6XSggCC2P/Virtual-Friends-Website?node-id=530%3A797",
  },
};
