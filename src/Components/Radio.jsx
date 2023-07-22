import React from "react";

const Radio = ({ name }) => {
  return (
    <>
      <label htmlFor={name} className="text-sm text-gray-500 mb-1.5">
        {name}
      </label>
      <input type="radio" name="" id="" />
      {/* <input
        type="radio"
        className="text-small w-80 px-4 py-1.5 bg-gray-50 font-normal rounded rounded-xs Capitalize placeholder:opacity-40 placeholder:tracking-wide focus:outline-none"
        placeholder="Enter Task description..."
      /> */}
    </>
  );
};

export default Radio;
