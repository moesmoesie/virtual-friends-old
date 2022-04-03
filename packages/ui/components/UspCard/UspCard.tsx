import React from "react";
import GradientBorder from "../../util/GradientBorder";
import GlassCard from "../../util/GlassCard";
export interface UspCardProps {
  title: string;
  body: string;
  Icon: JSX.Element;
}

const UspCard: React.FC<UspCardProps> = (props) => {
  return (
    <GlassCard
      className="relative inline-flex flex-col items-center gap-5 overflow-hidden rounded-[20px]  
      py-7 px-8 text-white shadow-md shadow-black"
    >
      <GradientBorder width="3px" radius="20px" />

      {/* Icon */}
      {props.Icon}

      {/* Title */}
      <p className="body-4 max-w-xs whitespace-normal text-center font-bold">
        {props.title}
      </p>

      {/* Body */}
      <p className="body-2 max-w-xs text-center">{props.body}</p>
    </GlassCard>
  );
};

export default UspCard;
