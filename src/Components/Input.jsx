import React, { useEffect } from "react";

const Input = ({ name, val, change, placeholder }) => {
  useEffect(() => {}, [val]);
  return (
    <div className="flex flex-col my-2">
      <label
        htmlFor={name}
        name={name}
        className="text-sm text-gray-400 mb-1.5 font-semibold"
      >
        {name}
      </label>
      <input
        type="text"
        id={name}
        onChange={(e) => {
          change(e.target.value);
        }}
        name={name}
        className="text-sm w-80 px-4 py-2 bg-white font-normal rounded rounded-md Capitalize border border-1.5 bg-gray-50 placeholder:opacity-40 placeholder:tracking-wide focus:outline-none placeholder:text-small placeholder:tracking-xs"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
