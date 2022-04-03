import React from "react";
import GradientBorder from "../../util/GradientBorder";

export interface UspCardProps {
  title: string;
  body: string;
  Icon: JSX.Element;
}

const style = {
  background:
    "linear-gradient(141.24deg, rgba(146, 124, 255, 0.142) 1.69%, rgba(64, 201, 162, 0.048) 100%)",
  boxShadow:
    "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 5px rgba(0, 0, 0, 0.3), 0px 9px 10px rgba(0, 0, 0, 0.2)",
  backdropFilter: "blur(40px)",
};

const UspCard: React.FC<UspCardProps> = (props) => {
  return (
    <div
      style={style}
      className="relative inline-flex max-w-[22rem] flex-col items-center gap-5 overflow-hidden rounded-[20px]  
      py-7 px-8 text-white shadow-black backdrop-blur-md"
    >
      <GradientBorder width="3px" radius="20px" />
      {props.Icon}
      <p className="body-4 whitespace-normal text-center font-bold">
        {props.title}
      </p>
      <p className="body-2 text-center">{props.body}</p>
    </div>
  );
};

export default UspCard;
