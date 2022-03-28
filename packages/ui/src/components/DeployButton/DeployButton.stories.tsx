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

DeployButton.parameters = {
  zeplinLink:
    "zpl://components?pid=62339c5b4312c8b1de07b037&coid=6240e05791a9b915ca01dc52",
};
