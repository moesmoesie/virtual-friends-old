import React from "react";
import { ComponentStory, type ComponentMeta } from "@storybook/react";
import Page from "./Home";

export default {
  title: "Pages/Home",
  component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const HomePage = Template.bind({});
HomePage.args = {};

HomePage.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/ELu4gwRGS5i2f6XSggCC2P/Virtual-Friends-Website?node-id=55%3A307",
  },
};
