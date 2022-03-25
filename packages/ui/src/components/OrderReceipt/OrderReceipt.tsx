import React from "react";

const OrderReceipt: React.FC = () => {
  return (
    <div className="inline-flex flex-col rounded-lg bg-dark-purple-600 py-6 px-12 text-white">
      <span className="mb-5 text-xl text-teal-500">Your order</span>
      <div className="h-px w-full bg-dark-purple-400" />
      <div>
        <Order />
        <Order />
      </div>
      <div className="flex flex-col gap-2 border-y-[1px] border-dark-purple-400 py-6">
        <div className="flex justify-between">
          <span>Delivery</span>
          <span>$ 4,95</span>
        </div>
        <div className="flex justify-between">
          <span>Discount</span>
          <span>
            <span className="text-teal-500">20%</span> - $ 10.00
          </span>
        </div>
      </div>
      <div className="pt-6">
        <div className="flex justify-between">
          <span>Total</span>
          <span className="text-xl font-bold">$ 120.00</span>
        </div>
      </div>
    </div>
  );
};

const Order: React.FC = () => {
  return (
    <div className="flex gap-5 py-6">
      <div className="w-16 rounded-lg bg-dark-purple-400"></div>
      <div className="flex flex-col gap-1">
        <span className="text-xl font-bold">T-Shirt Virtual Friends</span>
        <div className="flex items-center gap-2 text-grey-200">
          Colour
          <div className="h-4 w-4 rounded-full bg-teal-500" />
        </div>
        <div className="flex gap-4">
          <span className="text-xl">$ 29,95</span>
          <div className="flex items-center gap-3 rounded-lg bg-dark-purple-400 px-3">
            <span className="text-grey-200">1</span>
            <div className="scale-150">
              <ArrowDown />
            </div>
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

export default OrderReceipt;
