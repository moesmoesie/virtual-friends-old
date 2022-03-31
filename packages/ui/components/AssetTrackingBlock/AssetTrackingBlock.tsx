import React from "react";

const boxShadow =
  "0px 4px 5px rgba(0, 0, 0, 0.3), 0px 9px 10px rgba(0, 0, 0, 0.2), 0px 14px 32px rgba(0, 0, 0, 0.1), 0px 32px 44px rgba(0, 0, 0, 0.25)";

export interface AssetTrackingBlockProps {
  Icon: JSX.Element;
  amount: number;
  change: number;
  suffix: string;
  isLoss: boolean;
}

const AssetTrackingBlock: React.FC<AssetTrackingBlockProps> = ({
  Icon,
  amount,
  suffix,
  change,
  isLoss,
}) => {
  return (
    <div
      className="flex w-36 flex-col rounded-lg bg-dark-purple-600 p-4 text-white"
      style={{ boxShadow: boxShadow }}
    >
      <AssetIcon Icon={Icon} className="mb-4" />
      <span className="mb-1 font-body text-sm font-bold leading-none text-purple-navy-050">
        Portfolio
      </span>
      <div className="flex items-baseline justify-between gap-2 ">
        <span className="font-header text-2xl font-bold leading-none">
          {amount}
          {suffix}
        </span>
        <ChangePercentage change={change} isLoss={isLoss} />
      </div>
    </div>
  );
};

const AssetIcon: React.FC<{ Icon: JSX.Element; className?: string }> = ({
  Icon,
  className = "",
}) => {
  return (
    <div
      className={`grid h-12 w-12 place-items-center rounded-lg bg-nyanza-500 text-teal-500 ${className}`}
    >
      {Icon}
    </div>
  );
};

const ChangePercentage: React.FC<{ change: number; isLoss: boolean }> = ({
  isLoss,
  change,
}) => {
  const color = isLoss ? "text-[#ff3333]" : "text-teal-500";
  return (
    <span className={`font-body text-xs ${color}`}>
      {isLoss ? "-" : "+"}
      {change}%
    </span>
  );
};

export default AssetTrackingBlock;
