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

EmployeeCard.parameters = {
  zeplinLink:
    "zpl://components?pid=62339c5b4312c8b1de07b037&coid=6240e0588ccd8211aab08e4a",
};
