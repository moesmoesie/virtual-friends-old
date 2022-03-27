import React from "react";
import { ComponentStory, type ComponentMeta } from "@storybook/react";
import Component from "./ImageUpload";

export default {
  title: "CMS/Image Upload",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const ImageUpload = Template.bind({});
ImageUpload.args = {
  label: "Hello World!",
};
