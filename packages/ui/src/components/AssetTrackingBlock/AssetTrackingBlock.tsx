import React from "react";

const boxShadow =
  "0px 4px 5px rgba(0, 0, 0, 0.3), 0px 9px 10px rgba(0, 0, 0, 0.2), 0px 14px 32px rgba(0, 0, 0, 0.1), 0px 32px 44px rgba(0, 0, 0, 0.25)";

export interface AssetTrackingBlockProps {
  Icon: JSX.Element;
  amount: string;
  gain: string;
}

const AssetTrackingBlock: React.FC<AssetTrackingBlockProps> = ({
  Icon,
  amount,
  gain,
}) => {
  return (
    <div
      className="flex w-36 flex-col rounded-lg bg-dark-purple-600 p-4 text-white"
      style={{ boxShadow: boxShadow }}
    >
      <div className="mb-4 grid h-12 w-12 place-items-center rounded-lg bg-nyanza-500 text-teal-500">
        {Icon}
      </div>
      <span className="mb-1 text-sm font-bold leading-none text-purple-navy-050">
        Portfolio
      </span>
      <div className="flex items-baseline justify-between gap-2 ">
        <span className="text-2xl font-bold leading-none">{amount}</span>
        <span className="text-xs text-teal-500">{gain}</span>
      </div>
    </div>
  );
};

export default AssetTrackingBlock;