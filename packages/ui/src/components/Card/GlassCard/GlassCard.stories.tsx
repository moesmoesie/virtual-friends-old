import React from "react";
import { type ComponentMeta } from "@storybook/react";
import Component from "./GlassCard";
import RadialGradient from "../../RadialGradient";

export default {
  title: "Cards",
  component: Component,
} as ComponentMeta<typeof Component>;

export const GlassCard = () => (
  <div className="relative">
    <RadialGradient className="absolute h-72 w-72 bg-[#7a61ff]/20" />
    <Component className="h-96 w-72" />
  </div>
);
