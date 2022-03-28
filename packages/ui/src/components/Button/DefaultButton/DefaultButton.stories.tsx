import React from "react";
import { ComponentStory, type ComponentMeta } from "@storybook/react";
import Component from "./DefaultButton";

export default {
  title: "General/Buttons/Default",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Hello World!",
};

Default.parameters = {
  zeplinLink:
    "zpl://components?pid=62339c5b4312c8b1de07b037&coid=6240e051dbd05a10e32d2bae",
};
