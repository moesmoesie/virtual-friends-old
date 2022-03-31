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
  zeplinLink:
    "zpl://components?pid=62339c5b4312c8b1de07b037&coid=6240eb2e807526132df9c692",
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
  zeplinLink:
    "zpl://components?pid=62339c5b4312c8b1de07b037&coid=6240e052ee972010947789ab",
};
