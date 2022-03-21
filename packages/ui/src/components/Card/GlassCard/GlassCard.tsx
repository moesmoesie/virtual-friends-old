import React from "react";

const boxShadow =
  "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 5px rgba(0, 0, 0, 0.3), 0px 9px 10px rgba(0, 0, 0, 0.2)";

const Style = {
  boxShadow,
};

const Border = () => {
  return (
    <svg className="absolute h-full w-full">
      <defs>
        <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="rgba(146, 124, 255, 0.71)" />
          <stop offset="100%" stop-color="rgba(64, 201, 162, 0.24)" />
        </linearGradient>
      </defs>
      <rect
        className="h-full w-full fill-transparent"
        strokeWidth={2}
        stroke="url(#linear)"
        rx={10}
      />
    </svg>
  );
};

const GlassCard: React.FC<{ className?: string }> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`${className} relative overflow-hidden rounded-[10px] bg-purple-navy-500/25 backdrop-blur-sm`}
      style={Style}
    >
      <Border />
      {children}
    </div>
  );
};

export default GlassCard;
