import React from "react";

export interface DefaultButtonProps {
  label: String;
}

const DefaultButton: React.FC<DefaultButtonProps> = ({ label }) => {
  return <button>{label}</button>;
};

export default DefaultButton;
