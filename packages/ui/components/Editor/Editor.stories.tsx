import React from "react";
import { ComponentStory, type ComponentMeta } from "@storybook/react";
import Component from "./Editor";

export default {
  title: "CMS/Editor",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Editor = Template.bind({});
Editor.args = {
  label: "Hello World!",
};

Editor.parameters = {
  zeplinLink:
    "zpl://components?pid=62339c5b4312c8b1de07b037&coid=6240e057e736e01198dac15f",
};
