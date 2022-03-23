import React from "react";
import { type ComponentMeta } from "@storybook/react";
import Component from "./FloatingContainer";

export default {
  title: "Containers/Floating Container",
  component: Component,
} as ComponentMeta<typeof Component>;

export const FloatingContainer = () => (
  <Component className="h-36 w-36 bg-teal-500"></Component>
);
