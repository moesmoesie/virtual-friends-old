import React from "react";
import { ComponentStory, type ComponentMeta } from "@storybook/react";
import Component from "./AccentButton";

export default {
  title: "General/Buttons/Accent",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Accent = Template.bind({});
Accent.args = {
  label: "Button",
};

Accent.parameters = {
  zeplinLink:
    "zpl://components?pid=62339c5b4312c8b1de07b037&coid=6240e2f3b83575118cbf692b",
};
