import React from "react";

export type InputProps = {
  labelText: string;
  labelFor: string;
  type: string;
  placeholder: string;
};

function Input({ labelText, labelFor, type, placeholder }: InputProps) {
  return (
    <>
      <label
        className="mb-2 block text-sm font-bold text-gray-700"
        htmlFor={labelFor}
      >
        {labelText}
      </label>
      <input
        className="focus:shadow-outline w-full appearance-none rounded-lg border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
        type={type}
        placeholder={placeholder}
      />
    </>
  );
}

export default Input;
