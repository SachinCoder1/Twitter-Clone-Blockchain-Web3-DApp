import React from "react";

export default function Button({
  text,
  onClick,
  className,
  disabled,
  fullWidth = false,
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`relative mr-3 cursor-pointer disabled:bg-blue-400 hover:text-gray-100 rounded-md flex items-center justify-center gap-x-1 text-center border border-blue-500 py-2 px-8 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white ${
        fullWidth && "w-full"
      } ${className}`}
    >
      {text}
    </button>
  );
}
