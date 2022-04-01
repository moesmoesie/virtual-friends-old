import React from "react";

export interface DefaultButtonProps {
  onClick: () => void;
}

const DefaultButton: React.FC<DefaultButtonProps> = (props) => {
  return (
    <button
      className="body-3 rounded-lg bg-teal-500 py-3 px-8 text-white shadow-xl shadow-teal-500/50"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default DefaultButton;
