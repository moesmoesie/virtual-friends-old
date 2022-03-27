import React from "react";

export interface PopUpMenuProps {
  label: String;
}

const PopUpMenu: React.FC<PopUpMenuProps> = ({ label }) => {
  return <button>{label}</button>;
};

export default PopUpMenu;
