import React from "react";

export interface AccentButtonProps {
  onClick: () => void;
}

const AccentButton: React.FC<AccentButtonProps> = (props) => {
  return (
    <button
      className="body-3 bg-purple-gradient rounded-lg py-3 px-8 text-white shadow-lg shadow-[#7947F7]/50"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default AccentButton;
