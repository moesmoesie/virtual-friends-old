import React from "react";
import { ComponentStory, type ComponentMeta } from "@storybook/react";
import Component from "./EmployeeCard";

export default {
  title: "Company/Employee Card",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const EmployeeCard = Template.bind({});
EmployeeCard.args = {
  label: "Hello World!",
};
