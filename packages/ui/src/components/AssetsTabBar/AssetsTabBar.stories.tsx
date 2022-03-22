import React from "react";
import { type ComponentMeta } from "@storybook/react";
import Component from "./AssetsTabBar";

export default {
  title: "PWA/Assets Tab Bar",
  component: Component,
} as ComponentMeta<typeof Component>;

export const AssetsTabBar = () => <Component />;
