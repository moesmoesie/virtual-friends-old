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

ImageUpload.parameters = {
  zeplinLink:
    "zpl://components?pid=62339c5b4312c8b1de07b037&coid=6240e056e8f88211096dab94",
};
