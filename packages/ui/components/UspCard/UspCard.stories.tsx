import React from "react";
import { ComponentStory, type ComponentMeta } from "@storybook/react";
import Component from "./UspCard";

export default {
  title: "USP Card",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

const Icon = () => {
  return (
    <svg
      width="60"
      height="52"
      viewBox="0 0 60 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M57.9805 41.8828L32.7188 2.34766C31.4727 0.421875 28.4141 0.421875 27.168 2.34766L1.90625 41.8828C0.660156 43.9219 0.660156 46.4141 1.79297 48.4531C2.92578 50.3789 4.96484 51.625 7.34375 51.625H52.543C54.9219 51.625 56.9609 50.3789 58.0938 48.4531C59.2266 46.4141 59.2266 43.9219 57.9805 41.8828ZM30 9.9375L38.043 22.625H30L24.5625 29.875L21.0508 23.9844L30 9.9375Z"
        fill="#40C9A2"
      />
    </svg>
  );
};

export const USPCard = Template.bind({});
USPCard.args = {
  title: "Performance",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna in morbi ultrices aliquam du.",
  Icon: <Icon />,
};

USPCard.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/ELu4gwRGS5i2f6XSggCC2P/Virtual-Friends-Website?node-id=334%3A359",
  },
};
