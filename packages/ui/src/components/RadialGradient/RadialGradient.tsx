import React from "react";

export interface RadialGradientProps {
  className?: string;
  blur?: string;
}

const RadialGradient: React.FC<RadialGradientProps> = ({
  className = "",
  blur = "100px",
}) => {
  return (
    <div
      className={`${className}`}
      style={{
        filter: `blur(${blur})`,
      }}
    />
  );
};

export default RadialGradient;
