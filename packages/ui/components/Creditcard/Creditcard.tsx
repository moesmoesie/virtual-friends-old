import React from "react";
import GlassCard from "../../util/GlassCard";
export interface CreditcardProps {
  bank: string;
  number: string;
  name: string;
}

const Creditcard: React.FC<CreditcardProps> = (props) => {
  return (
    <GlassCard className="flex h-[13.75rem] w-[21.875rem] flex-col rounded-xl p-6 text-[#ececec] shadow-lg">
      <span
        style={{
          wordSpacing: "0.5rem",
        }}
      >
        {props.bank}
      </span>
      <div className="mt-auto flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <span
            style={{ textShadow: "0 2px 2px rgba(0, 0, 0, 0.1)" }}
            className="font-[Cultive-Mono] text-[1rem]"
          >
            {props.number}
          </span>
          <span style={{ textShadow: "0 2px 2px rgba(0, 0, 0, 0.1)" }}>
            {props.name}
          </span>
        </div>
        <MastercardLogo />
      </div>
    </GlassCard>
  );
};

const MastercardLogo = () => {
  return (
    <svg
      width="50"
      height="31"
      viewBox="0 0 50 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_333_501)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.0531 27.1041H31.4352V3.24438H18.0531V27.1041Z"
          fill="#FF5F00"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.9029 15.1742C18.9029 10.3336 21.1872 6.02247 24.7443 3.24432C22.1427 1.21225 18.8604 0 15.2927 0C6.84668 0 0.00012207 6.79382 0.00012207 15.1742C0.00012207 23.5545 6.84668 30.3484 15.2927 30.3484C18.8604 30.3484 22.1427 29.1361 24.7443 27.104C21.1872 24.3255 18.9029 20.0147 18.9029 15.1742Z"
          fill="#EB001B"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M49.011 24.577V23.9882H48.8559L48.6779 24.3932L48.4995 23.9882H48.3444V24.577H48.4536V24.1327L48.621 24.5159H48.7344L48.9018 24.1319V24.577H49.011ZM48.0292 24.577V24.0885H48.228V23.989H47.7225V24.0885H47.9208V24.577H48.0292ZM49.4885 15.1741C49.4885 23.5544 42.6415 30.3482 34.1959 30.3482C30.6282 30.3482 27.3455 29.136 24.7443 27.1039C28.3014 24.3258 30.5857 20.0146 30.5857 15.1741C30.5857 10.3339 28.3014 6.02276 24.7443 3.2442C27.3455 1.21213 30.6282 -0.00012207 34.1959 -0.00012207C42.6415 -0.00012207 49.4885 6.7937 49.4885 15.1741Z"
          fill="#F79E1B"
        />
      </g>
      <defs>
        <clipPath id="clip0_333_501">
          <rect width="50" height="30.3922" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Creditcard;
