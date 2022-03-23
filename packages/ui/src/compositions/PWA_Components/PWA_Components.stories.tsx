import React from "react";
import { type ComponentMeta } from "@storybook/react";
import Composition, { PWA_ComponentsProps } from "./PWA_Components";
import { Bitcoin, Google, Dollar } from "../../icons";

export default {
  title: "Composition/PWA Components",
  component: Composition,
} as ComponentMeta<typeof Composition>;

const values: PWA_ComponentsProps = {
  currentValue: "crypto",
  values: [
    {
      value: "crypto",
      icon: <Bitcoin />,
      title: "Crypto",
      block1: {
        amount: 10,
        isLoss: false,
        Icon: <Bitcoin />,
        change: 20,
        suffix: "K",
      },
      block2: {
        amount: 10,
        isLoss: false,
        Icon: <Bitcoin />,
        change: 20,
        suffix: "K",
      },
    },
    {
      value: "stocks",
      icon: <Google />,
      title: "Stocks",
      block1: {
        amount: 10,
        isLoss: false,
        Icon: <Google />,
        change: 20,
        suffix: "S",
      },
      block2: {
        amount: 10,
        isLoss: false,
        Icon: <Google />,
        change: 20,
        suffix: "S",
      },
    },
    {
      value: "fiat",
      icon: <Dollar />,
      title: "Fiat",
      block1: {
        amount: 20,
        isLoss: true,
        Icon: <Dollar />,
        change: 23,
        suffix: "K",
      },
      block2: {
        amount: 10,
        isLoss: false,
        Icon: <Dollar />,
        change: 10,
        suffix: "S",
      },
    },
  ],
};

export const PWAComponents = () => <Composition {...values} />;
