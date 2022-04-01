import React from "react";
import { ComponentStory, type ComponentMeta } from "@storybook/react";
import Component from "./DefaultButton";
import { withDesign } from "storybook-addon-designs";

export default {
  title: "General/Buttons/Default",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args}>Button</Component>
);

export const Default = Template.bind({});

Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/ELu4gwRGS5i2f6XSggCC2P/Virtual-Friends-Website?node-id=51%3A1566",
  },
};
