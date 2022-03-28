import React from "react";

export interface AccentButtonProps {
  label: String;
}

const AccentButton: React.FC<AccentButtonProps> = ({ label }) => {
  return <button>{label}</button>;
};

export default AccentButton;
