import React from "react";

export interface ButtonProps {
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-lg bg-teal-500 px-8 py-3 text-xl text-white"
      style={{
        boxShadow:
          "0px 4px 5px rgba(64, 201, 162, 0.28), 0px 9px 10px rgba(196, 196, 196, 0.3), 0px 14px 32px rgba(238, 238, 238, 0.2)",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
