import React, { useState } from "react";
import { ComponentStory, type ComponentMeta } from "@storybook/react";
import Component from "./AssetsTabBar";
import { Bitcoin, Google, Dollar } from "../../icons";

export default {
  title: "PWA/Assets Tab Bar",
  component: Component,
} as ComponentMeta<typeof Component>;

const tabs = [
  { title: "Crypto", icon: <Bitcoin />, value: "crypto" },
  { title: "Stocks", icon: <Google />, value: "stocks" },
  { title: "Fiat", icon: <Dollar />, value: "fiat" },
];

const Template: ComponentStory<typeof Component> = (args) => {
  const [value, setValue] = useState("crypto");
  return (
    <Component
      setTab={(newValue) => setValue(newValue)}
      tabs={tabs}
      currentTab={value}
    />
  );
};

export const AssetsTabBar = Template.bind({});
AssetsTabBar.parameters = {
  zeplinLink:
    "zpl://components?pid=62339c5b4312c8b1de07b037&coid=6240e055f9ad5213e6b93e46",
};
