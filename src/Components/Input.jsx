import React from "react";

const Input = ({ name }) => {
  return (
    <div className="flex flex-col my-2">
      <label
        htmlFor={name}
        name={name} 
        className="text-sm text-gray-500 mb-1.5 font-semibold"
      >
        {name}
      </label>
      <input
        type="text"
        id={name}
        name={name} 
        className="text-small w-80 px-4 py-2 bg-white font-normal rounded rounded-md Capitalize border border-1.5 bg-gray-50 placeholder:opacity-40 placeholder:tracking-wide focus:outline-none"
        placeholder="Enter Task description..."
      />
    </div>
  );
};

export default Input;
