import React from "react";

export interface ProdctProps {
  title: string;
  price: string;
  colours: string[];
  selectedColour: string;
  isFavorite: boolean;
  discount?: {
    percentage: string;
    amount: string;
    newPrice: string;
  };
}

const Product: React.FC<ProdctProps> = (props) => {
  return (
    <div className=" inline-flex flex-col items-start gap-4 rounded-lg bg-dark-purple-600 p-5">
      {props.discount && <Discount percentage={props.discount.percentage} />}
      <ProductImage />
      <div className="flex w-full flex-col items-center">
        <Title text={props.title} />
        <Price amount={props.price} className="mb-4" />
        <ColorPicker colours={["red", "green", "blue", "yellow"]} />
      </div>
      <div className="self-center">
        <AddToChartButton />
      </div>
    </div>
  );
};

const Title: React.FC<{ text: string }> = ({ text }) => {
  return (
    <span className="text-center font-body text-[1.125rem] font-bold text-white">
      {text}
    </span>
  );
};

const Price: React.FC<{ amount: string; className?: string }> = (props) => {
  return (
    <span
      className={`${props.className}  font-body text-[1.75rem] font-bold text-white`}
    >
      € {props.amount}
    </span>
  );
};

const ColorPicker: React.FC<{ colours: string[] }> = (props) => {
  return (
    <div className="flex items-center gap-2">
      <span className="body-1 text-grey-200">Colour</span>
      <div className="flex items-center gap-2">
        {props.colours.map((colour) => (
          <button className="h-3 w-3 rounded-full bg-white" />
        ))}
      </div>
    </div>
  );
};

const ProductImage: React.FC = () => {
  return <div className="h-[10rem] w-[12rem] rounded-lg bg-dark-purple-500" />;
};

const Discount: React.FC<{ percentage: string }> = ({ percentage }) => {
  return (
    <div className="body-1 rounded-lg bg-dark-purple-500 px-3 py-1 font-bold text-teal-500">
      {percentage}
    </div>
  );
};

const AddToChartButton: React.FC = () => {
  return (
    <button
      className="body-1 flex items-center gap-2 rounded-lg px-6 py-2 font-bold  text-white"
      style={{
        backgroundImage: "linear-gradient(to bottom, #a93bff 0%, #8834ff 100%)",
        boxShadow:
          "0 14px 32px 0 rgba(121, 71, 247, 0.1), 0 9px 10px 0 rgba(121, 71, 247, 0.2), 0 4px 5px 0 rgba(121, 71, 247, 0.3)",
      }}
    >
      <svg
        width="15"
        height="16"
        viewBox="0 0 15 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.6875 8.25C14.6875 8.88281 14.1602 9.41016 13.5625 9.41016H8.5V14.4727C8.5 15.0703 7.97266 15.5625 7.375 15.5625C6.74219 15.5625 6.25 15.0703 6.25 14.4727V9.41016H1.1875C0.554688 9.41016 0.0625 8.88281 0.0625 8.25C0.0625 7.65234 0.554688 7.16016 1.1875 7.16016H6.25V2.09766C6.25 1.46484 6.74219 0.9375 7.375 0.9375C7.97266 0.9375 8.5 1.46484 8.5 2.09766V7.16016H13.5625C14.1602 7.125 14.6875 7.65234 14.6875 8.25Z"
          fill="#40C9A2"
        />
      </svg>

      <span>Add to chart</span>
    </button>
  );
};

export default Product;
