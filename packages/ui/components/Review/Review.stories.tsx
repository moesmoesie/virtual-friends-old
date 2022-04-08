import React from "react";
import { ComponentStory, type ComponentMeta } from "@storybook/react";
import Component from "./Review";

export default {
  title: "Company/Review",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Review = Template.bind({});
Review.args = {
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  name: "Jane Caboosy",
  company: "Caboosy inc",
};

Review.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/ELu4gwRGS5i2f6XSggCC2P/Virtual-Friends-Website?node-id=508%3A307",
  },
};
