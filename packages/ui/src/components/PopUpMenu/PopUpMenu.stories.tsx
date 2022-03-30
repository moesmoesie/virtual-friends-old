import React from "react";
import { ComponentStory, type ComponentMeta } from "@storybook/react";
import Component from "./PopUpMenu";
import { useState } from "react";
export default {
  title: "CMS/Pop Up Menu",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => {
  const [option, setOption] = useState("purple");

  return <Component {...args} setSelected={setOption} selected={option} />;
};

export const PopUpMenu = Template.bind({});
PopUpMenu.args = {
  data: [
    {
      title: "Purple",
      value: "purple",
      color: "linear-gradient(to bottom, #a93bff 0%, #8834ff 100%)",
    },
    { title: "Red", value: "red", color: "#FF0000" },
    { title: "Green", value: "green", color: "#00ff00" },
  ],
};

PopUpMenu.parameters = {
  zeplinLink:
    "zpl://components?pid=62339c5b4312c8b1de07b037&coids=6240e0572f822812561b95fb",
};
