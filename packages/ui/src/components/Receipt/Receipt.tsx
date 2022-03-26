import React from "react";

const Receipt: React.FC = () => {
  return (
    <div className="inline-flex flex-col rounded-lg bg-dark-purple-600 py-6 px-7 text-white">
      {/* Title */}
      <span className="body-2 mb-5 text-teal-500">Your order</span>
      <Devider />
      <div>
        <Order />
        <Devider />
        <Order />
      </div>
      <div className="flex flex-col gap-2 border-y-[1px] border-dark-purple-400 py-5">
        <div className="flex justify-between">
          <span className="body-1">Delivery</span>
          <span className="body-1">$ 4,95</span>
        </div>
        <div className="flex justify-between">
          <span className="body-1">Discount</span>
          <span className="body-1">
            <span className="text-teal-500">20%</span> - $ 10.00
          </span>
        </div>
      </div>
      <div className="pt-5">
        <div className="flex justify-between">
          <span className="body">Total</span>
          <span className="body-2 font-bold">€ 120,00</span>
        </div>
      </div>
    </div>
  );
};

const Devider: React.FC = () => {
  return <div className="h-px w-full bg-dark-purple-400" />;
};

const Order: React.FC = () => {
  return (
    <div className="flex gap-[1.188rem] py-[1.375rem]">
      {/* Image */}
      <div className="h-[5rem] w-[3.75rem] rounded-lg bg-dark-purple-400" />

      {/* Details */}
      <div className="flex flex-col">
        {/* Title */}
        <span className="body-2 font-bold">T-Shirt Virtual Friends</span>

        {/* Colour */}
        <div className="flex items-center gap-2 ">
          <span className="body-1 text-grey-200">Colour</span>
          <div className="h-3 w-3 rounded-full bg-teal-500" />
        </div>

        <div className="flex items-center gap-4">
          {/* Price */}
          <span className="body-2">€ 29,-</span>

          {/* Size Picker */}
          <div className="flex items-center gap-2 rounded-lg bg-dark-purple-400 px-2">
            <span className="body-1 text-grey-200">1</span>
            <ArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
};

const ArrowDown = () => {
  return (
    <svg
      width="12"
      height="7"
      viewBox="0 0 12 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.25 6.75C6.00391 6.75 5.78516 6.66797 5.62109 6.50391L1.24609 2.12891C0.890625 1.80078 0.890625 1.22656 1.24609 0.898438C1.57422 0.542969 2.14844 0.542969 2.47656 0.898438L6.25 4.64453L9.99609 0.898438C10.3242 0.542969 10.8984 0.542969 11.2266 0.898438C11.582 1.22656 11.582 1.80078 11.2266 2.12891L6.85156 6.50391C6.6875 6.66797 6.46875 6.75 6.25 6.75Z"
        fill="#CCCCCC"
      />
    </svg>
  );
};

export default Receipt;
