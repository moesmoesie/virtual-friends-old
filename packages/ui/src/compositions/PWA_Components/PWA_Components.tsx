import React, { useState } from "react";
import { AssetTrackingBlock, AssetsTabBar } from "../../components";
import { AssetTrackingBlockProps } from "../../components/AssetTrackingBlock";

const boxShadow =
  "0px 4px 5px rgba(0, 0, 0, 0.3), 0px 9px 10px rgba(0, 0, 0, 0.2), 0px 14px 32px rgba(0, 0, 0, 0.1), 0px 32px 44px rgba(0, 0, 0, 0.25)";

export interface PWA_ComponentsProps {
  values: {
    value: string;
    icon: JSX.Element;
    title: string;
    block1: AssetTrackingBlockProps;
    block2: AssetTrackingBlockProps;
  }[];
  currentValue: string;
}

const PWA_Components: React.FC<PWA_ComponentsProps> = (props) => {
  const [value, setValue] = useState("crypto");

  const tabs = props.values.map((el) => {
    return {
      title: el.title,
      value: el.value,
      icon: el.icon,
    };
  });

  const data = props.values.find((el) => el.value == value)!;

  return (
    <div className="inline-flex flex-col gap-7">
      <div className="ml-5">
        <AssetsTabBar
          currentTab={value}
          tabs={tabs}
          setTab={(newValue) => setValue(newValue)}
        />
      </div>

      <div className="flex items-end gap-7">
        <div className="mb-4">
          <AssetTrackingBlock {...data.block1} />
        </div>

        <div
          style={{ boxShadow }}
          className="h-[201px] w-48 rounded-lg bg-dark-purple-600"
        />

        <div className="mb-8">
          <AssetTrackingBlock {...data.block1} />
        </div>
      </div>
      <div
        style={{ boxShadow }}
        className="h-[150px] w-[450px] self-center rounded-lg bg-dark-purple-600"
      />
    </div>
  );
};

export default PWA_Components;