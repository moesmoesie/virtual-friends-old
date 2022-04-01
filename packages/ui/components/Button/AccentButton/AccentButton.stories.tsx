import React from "react";
import { ComponentStory, type ComponentMeta } from "@storybook/react";
import Component from "./AccentButton";

export default {
  title: "General/Buttons/Accent",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args}>Button</Component>
);

export const Accent = Template.bind({});

Accent.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/ELu4gwRGS5i2f6XSggCC2P/Virtual-Friends-Website?node-id=334%3A364",
  },
};
