import React from "react";

export interface DefaultButtonProps {
  label: String;
  onClick: () => void;
}

const style = {
  boxShadow:
    "0 14px 32px 0 rgba(238, 238, 238, 0.2), 0 9px 10px 0 rgba(196, 196, 196, 0.3), 0 4px 5px 0 rgba(64, 201, 162, 0.28)",
};

const DefaultButton: React.FC<DefaultButtonProps> = (props) => {
  return (
    <button
      style={style}
      className="body-3 rounded-lg bg-teal-500 py-3 px-8 text-white"
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

export default DefaultButton;
