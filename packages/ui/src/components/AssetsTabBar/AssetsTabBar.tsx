import React from "react";
import { Bitcoin, Google, Dollar } from "../../icons";
const boxShadow =
  "0px 4px 5px rgba(0, 0, 0, 0.3), 0px 9px 10px rgba(0, 0, 0, 0.2), 0px 14px 32px rgba(0, 0, 0, 0.1), 0px 32px 44px rgba(0, 0, 0, 0.25)";

const AssetsTabBar: React.FC = () => {
  return (
    <div>
      <div
        className="inline-flex overflow-hidden rounded-lg bg-[#201D2A] text-white"
        style={{ boxShadow }}
      >
        <button className="flex w-36 items-center justify-center gap-1 border-r border-r-[#2E2A3C] bg-gradient-to-b from-[#A93BFF] to-[#8834FF] py-2 font-bold">
          <Bitcoin />
          <span>Crypto</span>
        </button>
        <button className="flex w-36 items-center justify-center gap-1 border-r border-r-[#2E2A3C] py-2 font-bold">
          <Google />
          <span>Stocks</span>
        </button>
        <button className="flex w-36 items-center justify-center gap-1 py-2 font-bold">
          <Dollar />
          <span>Fiat</span>
        </button>
      </div>
    </div>
  );
};

export default AssetsTabBar;
