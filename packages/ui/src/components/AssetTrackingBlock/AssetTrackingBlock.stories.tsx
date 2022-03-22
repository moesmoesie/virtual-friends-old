import React from "react";
import { ComponentStory, type ComponentMeta } from "@storybook/react";
import Component from "./AssetTrackingBlock";
import { Bitcoin } from "../../icons";
import Google from "../../icons/Google";
import { withDesign } from "storybook-addon-designs";

export default {
  title: "PWA/Asset Tracking Block",
  component: Component,
  argTypes: {
    // foo is the property we want to remove from the UI
    Icon: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [withDesign],
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

//👇 Each story then reuses that template
export const Crypto = Template.bind({});
Crypto.args = { amount: "87,2K", gain: "+47%", Icon: <Bitcoin /> };
Crypto.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/ELu4gwRGS5i2f6XSggCC2P/Virtual-Friends-Website?node-id=167%3A146",
  },
};

export const Stock = Template.bind({});
Stock.args = { amount: "23,3", gain: "+22%", Icon: <Google /> };
