import React from "react";
import { type ComponentMeta } from "@storybook/react";
import Component from "./RadialGradient";

export default {
  title: "Gradients",
  component: Component,
} as ComponentMeta<typeof Component>;

export const GlassCard = () => <Component className="h-32 w-32 bg-red-400" />;
