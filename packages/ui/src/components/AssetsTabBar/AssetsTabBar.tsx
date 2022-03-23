import React from "react";
const boxShadow =
  "0px 4px 5px rgba(0, 0, 0, 0.3), 0px 9px 10px rgba(0, 0, 0, 0.2), 0px 14px 32px rgba(0, 0, 0, 0.1), 0px 32px 44px rgba(0, 0, 0, 0.25)";

export interface AssetsTabBarProps {
  tabs: { title: string; icon: JSX.Element; value: string }[];
  setTab: (value: string) => void;
  currentTab: string;
}

const AssetsTabBar: React.FC<AssetsTabBarProps> = ({
  tabs,
  setTab,
  currentTab,
}) => {
  return (
    <div>
      <div
        className="inline-flex overflow-hidden rounded-lg bg-[#201D2A] text-white"
        style={{ boxShadow }}
      >
        {tabs.map((el, index) => {
          return (
            <button
              className={`flex w-32 items-center justify-center gap-1
              ${
                currentTab == el.value
                  ? "bg-gradient-to-b from-[#A93BFF] to-[#8834FF]"
                  : ""
              }

              ${index < tabs.length - 1 ? "border-r border-r-[#2E2A3C]" : ""}
               py-3 font-bold`}
              onClick={() => setTab(el.value)}
            >
              {el.icon}
              <span className=" font-body text-lg">{el.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AssetsTabBar;
