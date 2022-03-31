import React from "react";

export interface DeployButtonProps {
  label: String;
}

const DeployButton: React.FC<DeployButtonProps> = ({ label }) => {
  return <button>{label}</button>;
};

export default DeployButton;
