import React from "react";

export interface EmployeeCardProps {
  label: String;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ label }) => {
  return <button>{label}</button>;
};

export default EmployeeCard;
