import React from "react";

interface GradientBorder {
  radius?: string;
  width: string;
}

const GradientBorder: React.FC<GradientBorder> = (props) => {
  return (
    <svg
      className="absolute left-0 right-0 top-0 bottom-0"
      width="100%"
      height="100%"
    >
      <defs>
        <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="rgba(146, 124, 255, 0.71)" />
          <stop offset="100%" stop-color="rgba(64, 201, 162, 0.24)" />
        </linearGradient>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill="transparent"
        strokeWidth={props.width}
        stroke="url(#linear)"
        rx={props.radius}
      />
    </svg>
  );
};

export default GradientBorder;
