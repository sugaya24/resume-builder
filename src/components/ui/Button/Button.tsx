import React from "react";

interface ButtonProps {
  text: string;
  onClick?: any;
  onSubmit?: any;
}
function Button({ text, onClick, onSubmit }: ButtonProps) {
  return (
    <button
      type="button"
      className="mx-auto my-4 inline-block rounded-lg border border-cyan-600 bg-transparent px-6 py-2 font-bold text-cyan-600 transition duration-150 ease-in-out hover:border-transparent hover:bg-cyan-600 hover:text-white"
      onClick={onClick}
      onSubmit={onSubmit}
    >
      {text}
    </button>
  );
}

export default Button;
