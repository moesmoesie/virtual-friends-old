import React from "react";
import { ComponentStory, type ComponentMeta } from "@storybook/react";
import Component from "./ContactForm";

export default {
  title: "Contact Form",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const ContactForm = Template.bind({});
ContactForm.args = {
  label: "Hello World!",
};
