import React from "react";

function Button({ onClick, className = "", children }) {

  className = !className ? "hover:bg-gray-100 rounded-lg text-zinc-700":  className;

  return (
    <button
      className={`cursor-pointer p-2 border transition-all flex items-center bg-gray-100 justify-center gap-2  ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
