import React from "react";

export interface AccentButtonProps {
  label: String;
  onClick: () => void;
}

const AccentButton: React.FC<AccentButtonProps> = (props) => {
  return (
    <button
      className="body-3 bg-purple-gradient box-shadow-1 rounded-lg py-3 px-8 text-white"
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

export default AccentButton;
