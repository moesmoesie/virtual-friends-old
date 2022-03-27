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
