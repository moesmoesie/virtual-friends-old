import React from "react";
import { ComponentStory, type ComponentMeta } from "@storybook/react";
import Component from "./DeployButton";

export default {
  title: "CMS/Deploy Button",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const DeployButton = Template.bind({});
DeployButton.args = {
  onClick: () => console.log("Hello World!"),
};

DeployButton.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/ELu4gwRGS5i2f6XSggCC2P/Virtual-Friends-Website?node-id=333%3A554",
  },
};
