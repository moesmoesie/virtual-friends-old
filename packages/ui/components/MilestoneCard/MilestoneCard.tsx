import React from "react";
import GlassCard from "../../util/GlassCard";
import GradientBorder from "../../util/GradientBorder";

export interface MilestoneCardProps {
  title: String;
  icon: JSX.Element;
}

const MilestoneCard: React.FC<MilestoneCardProps> = (props) => {
  return (
    <GlassCard className=" relative inline-flex flex-col  overflow-hidden rounded-[20px] px-8 py-5">
      <GradientBorder width="2px" radius="20px" />
      {props.icon}
      <span className="display-4 font-bold text-white">{props.title}</span>
    </GlassCard>
  );
};

export default MilestoneCard;
