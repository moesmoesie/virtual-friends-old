import React from "react";

export interface DeployButtonProps {
  onClick: () => void;
}

const DeployButton: React.FC<DeployButtonProps> = ({ onClick }) => {
  return (
    <button
      className="bg-purple-gradient flex items-center gap-2 rounded-lg px-6 py-2 text-white"
      style={{
        boxShadow:
          "0 14px 32px 0 rgba(121, 71, 247, 0.1), 0 9px 10px 0 rgba(121, 71, 247, 0.2), 0 4px 5px 0 rgba(121, 71, 247, 0.3)",
      }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.1875 8.25C15.1875 8.88281 14.6602 9.41016 14.0625 9.41016H9V14.4727C9 15.0703 8.47266 15.5625 7.875 15.5625C7.24219 15.5625 6.75 15.0703 6.75 14.4727V9.41016H1.6875C1.05469 9.41016 0.5625 8.88281 0.5625 8.25C0.5625 7.65234 1.05469 7.16016 1.6875 7.16016H6.75V2.09766C6.75 1.46484 7.24219 0.9375 7.875 0.9375C8.47266 0.9375 9 1.46484 9 2.09766V7.16016H14.0625C14.6602 7.125 15.1875 7.65234 15.1875 8.25Z"
          fill="#40C9A2"
        />
      </svg>

      <span className="body-1 font-bold">Deploy</span>
    </button>
  );
};

export default DeployButton;
