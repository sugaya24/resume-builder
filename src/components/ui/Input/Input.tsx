import React from "react";

export type InputProps = {
  value: string;
  labelText: string;
  labelFor: string;
  type: string;
  placeholder: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

function Input({
  value,
  labelText,
  labelFor,
  type,
  placeholder,
  onChange,
}: InputProps) {
  return (
    <>
      <div>
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor={labelFor}
        >
          {labelText}
        </label>
        <input
          className="focus:shadow-outline w-full appearance-none rounded-lg border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          value={value}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </>
  );
}

export default Input;
