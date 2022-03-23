import React from "react";
import { ComponentStory, type ComponentMeta } from "@storybook/react";
import Component from "./AssetTrackingBlock";
import { Bitcoin } from "../../icons";
import { withDesign } from "storybook-addon-designs";

export default {
  title: "PWA/Asset Tracking Block",
  component: Component,
  argTypes: {
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
export const Positive = Template.bind({});
Positive.args = {
  amount: 87.2,
  suffix: "K",
  change: 47,
  isLoss: false,
  Icon: <Bitcoin />,
};
Positive.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/ELu4gwRGS5i2f6XSggCC2P/Virtual-Friends-Website?node-id=167%3A146",
  },
};

export const Negative = Template.bind({});
Negative.args = {
  amount: 22.2,
  suffix: "K",
  change: 47,
  isLoss: true,
  Icon: <Bitcoin />,
};

Negative.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/ELu4gwRGS5i2f6XSggCC2P/Virtual-Friends-Website?node-id=167%3A146",
  },
};
