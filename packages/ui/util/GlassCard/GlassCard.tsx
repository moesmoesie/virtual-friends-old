import React from "react";

const style = {
  background:
    "linear-gradient(141.24deg, rgba(146, 124, 255, 0.142) 1.69%, rgba(64, 201, 162, 0.048) 100%)",
};

const GlassCard: React.FC<{ className?: string }> = ({
  className = "",
  children,
}) => {
  return (
    <div
      style={style}
      className={`${className} shadow-black backdrop-blur-[40px]`}
    >
      {children}
    </div>
  );
};

export default GlassCard;
