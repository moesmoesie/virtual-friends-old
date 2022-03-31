import React from "react";

export interface DefaultButtonProps {
  label: String;
  onClick: () => void;
}

const DefaultButton: React.FC<DefaultButtonProps> = (props) => {
  return (
    <button
      className="body-3 rounded-lg bg-teal-500 py-3 px-8 text-white shadow-lg shadow-teal-500/50"
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

export default DefaultButton;
