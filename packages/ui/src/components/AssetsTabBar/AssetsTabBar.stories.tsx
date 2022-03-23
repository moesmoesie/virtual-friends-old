import React, { useState } from "react";
import { type ComponentMeta } from "@storybook/react";
import Component from "./AssetsTabBar";
import { Bitcoin, Google, Dollar } from "../../icons";

export default {
  title: "PWA/Assets Tab Bar",
  component: Component,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ELu4gwRGS5i2f6XSggCC2P/Virtual-Friends-Website?node-id=212%3A144",
    },
  },
} as ComponentMeta<typeof Component>;

const tabs = [
  { title: "Crypto", icon: <Bitcoin />, value: "crypto" },
  { title: "Stocks", icon: <Google />, value: "stocks" },
  { title: "Fiat", icon: <Dollar />, value: "fiat" },
];

export const AssetsTabBar = () => {
  const [value, setValue] = useState("crypto");

  return (
    <Component
      setTab={(newValue) => setValue(newValue)}
      tabs={tabs}
      currentTab={value}
    />
  );
};
