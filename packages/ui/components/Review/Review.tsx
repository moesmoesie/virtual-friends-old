import React from "react";
import GlassCard from "../../util/GlassCard";
import GradientBorder from "../../util/GradientBorder";

export interface ReviewProps {
  body: string;
  name: string;
  company: string;
  src?: string;
}

const Review: React.FC<ReviewProps> = (props) => {
  return (
    <GlassCard className="relative inline-flex w-[300px] flex-col items-center gap-3 overflow-hidden rounded-[10px] p-5 text-white shadow-md">
      <GradientBorder width="1px" radius="10px" />
      <div className="h-[3.75rem] w-[3.75rem] rounded-full bg-white" />
      <p className="body-2 inline text-center">{props.body}</p>
      <p className="body-1 inline text-center">
        <span className="font-bold">{props.name}</span>
        <span> - </span>
        <span>{props.company}</span>
      </p>
    </GlassCard>
  );
};

export default Review;
