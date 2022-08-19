import React from "react";

function Button({ text }: { text: string }) {
  return (
    <button
      type="button"
      className="mx-auto my-4 inline-block rounded-lg border border-cyan-600 bg-transparent px-6 py-2 font-bold text-cyan-600 transition duration-150 ease-in-out hover:border-transparent hover:bg-cyan-600 hover:text-white"
    >
      {text}
    </button>
  );
}

export default Button;
