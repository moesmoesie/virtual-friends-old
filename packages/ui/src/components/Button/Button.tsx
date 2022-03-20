import React from "react";

export interface ButtonProps {
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-lg bg-teal-500 px-8 py-3 text-xl text-white"
    >
      {children}
    </button>
  );
};

export default Button;
