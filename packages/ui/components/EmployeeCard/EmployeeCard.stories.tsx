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
  name: "John Doe",
  company: "A virtual Friends",
  phone: "+31634XXX366",
  src: "https://www.dropbox.com/s/w7st1ghpq8mmcmj/person.png?raw=1",
  github: "https://github.com/moesmoesie",
  mail: "",
  linkedIn: "linked",
};

EmployeeCard.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/ELu4gwRGS5i2f6XSggCC2P/Virtual-Friends-Website?node-id=333%3A568",
  },
};
