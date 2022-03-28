import React from "react";
import { ComponentStory, type ComponentMeta } from "@storybook/react";
import Component from "./PopUpMenu";

export default {
  title: "CMS/Pop Up Menu",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const PopUpMenu = Template.bind({});
PopUpMenu.args = {
  label: "Hello World!",
};

PopUpMenu.parameters = {
  zeplinLink:
    "zpl://components?pid=62339c5b4312c8b1de07b037&coid=6240e2f425d8d21296327e43",
};
