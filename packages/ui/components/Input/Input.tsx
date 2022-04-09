import React from "react";
import { useState, useEffect } from "react";
export interface InputProps {
  placeholder: string;
  initialValue?: string;
  onChange: (value: string) => void;
  error?: boolean;
}

const Input: React.FC<InputProps> = (props) => {
  const [hasEdited, setHasEdited] = useState(false);

  useEffect(() => {
    if (props.error && hasEdited) {
      setHasEdited(false);
    }
  }, [props.error]);

  const onEdit = (e: string) => {
    if (!hasEdited) setHasEdited(true);
    if (props.onChange) props.onChange(e);
  };

  return (
    <input
      onChange={(e) => onEdit(e.type)}
      placeholder={props.placeholder}
      className={`w-full border-b-[1px] border-dark-purple-200 bg-[transparent] p-4 text-white caret-white outline-none 
      placeholder:text-white 
      focus:border-teal-500 active:border-teal-500
      ${props.error && "!border-[#FF0000]"}
      ${props.error && !hasEdited && "!text-[#FF0000] !placeholder-[#FF0000]"}
      `}
    />
  );
};

export default Input;
