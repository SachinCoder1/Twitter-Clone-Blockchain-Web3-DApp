import React from "react";

export default function Input({
  id,
  type = "text",
  placeholder,
  label,
  onChange,
  className,
  //   value,
}) {
  return (
    <div className={`flex justify-center ${className}`}>
      <div className="flex flex-col w-full ">
        {label && (
          <label
            for={id}
            className="block text-gray-700 text-base font-semibold mb-2"
          >
            {label}
          </label>
        )}
        <input
          type={type}
          name={id}
          id={id}
          className="block w-full px-3 py-2 text-base font-normal text-gray-700 -clip-padding border-b-2 border-none rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-none focus:outline-none placeholder:text-xl"
          placeholder={placeholder}
          //   value={value}
          onChange={onChange}
          required
        />
      </div>
    </div>
  );
}
