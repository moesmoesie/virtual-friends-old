import React from "react";

export interface PopUpMenuProps {
  data: { title: string; value: string; color: string }[];
  show?: boolean;
  selected: string;
  setSelected: (value: string) => void;
}

const PopUpMenu: React.FC<PopUpMenuProps> = ({
  data,
  show,
  selected,
  setSelected,
}) => {
  return (
    <div className="relative inline-flex rounded-lg bg-dark-purple-600 text-white">
      <Pointer />

      <div
        className="absolute -z-50 h-full w-full rounded-lg"
        style={{
          boxShadow:
            "0 32px 44px 0 rgba(0, 0, 0, 0.25), 0 14px 32px 0 rgba(0, 0, 0, 0.1), 0 9px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.3)",
        }}
      />

      <ul>
        {data.map((data, index) => {
          return (
            <Item
              key={index}
              value={data.value}
              color={data.color}
              title={data.title}
              isSelected={selected === data.value}
              setSelected={setSelected}
            />
          );
        })}
      </ul>
    </div>
  );
};

const Item: React.FC<{
  title: string;
  color: string;
  value: string;
  isSelected: boolean;
  setSelected: (value: string) => void;
}> = (data) => {
  return (
    <li>
      <button
        onClick={(e) => data.setSelected(data.value)}
        className="flex w-full items-center py-[0.6rem] px-3"
      >
        <span className="body-1">{data.title}</span>
        <div className="w-6" />
        <div
          className="ml-auto h-3 w-3 rounded-full bg-dark-purple-300"
          style={{
            background: data.isSelected ? data.color : "#39354b",
          }}
        />
      </button>
    </li>
  );
};

const Pointer = () => {
  return (
    <svg
      width="25"
      height="35"
      viewBox="0 0 25 35"
      fill="none"
      className="absolute top-1/2 left-0 -z-10 -translate-x-1/2 -translate-y-[37%] "
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_333_538)">
        <path
          d="M14 2.20052C14 3.97125 13.2004 5.64729 11.8241 6.76143L5.42025 11.9455C4.43145 12.746 4.43145 14.254 5.42025 15.0545L11.8241 20.2386C13.2004 21.3527 14 23.0288 14 24.7995V24.7995C14 26.0148 14.9852 27 16.2005 27L21 27L21 2.08685e-07L16.2005 1.51452e-07C14.9852 1.3696e-07 14 0.985206 14 2.20052V2.20052Z"
          fill="#201D2A"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_333_538"
          x="0.67865"
          y="0"
          width="24.3214"
          height="35"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_333_538"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_333_538"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default PopUpMenu;
