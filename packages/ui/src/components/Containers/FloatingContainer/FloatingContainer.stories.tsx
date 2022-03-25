import React from "react";
import { ComponentStory, type ComponentMeta } from "@storybook/react";
import Component from "./FloatingContainer";

export default {
  title: "Containers/Floating Container",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component className="h-36 w-36 bg-dark-purple-600" {...args} />
);

//👇 Each story then reuses that template
export const FloatingContainer = Template.bind({});
FloatingContainer.args = { delay: 0, y: 10, duration: 2 };
