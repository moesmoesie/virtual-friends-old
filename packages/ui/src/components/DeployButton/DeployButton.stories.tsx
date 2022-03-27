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
  label: "Hello World!",
};
