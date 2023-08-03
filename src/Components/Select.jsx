import React, { useEffect } from "react";
// Initialization for ES Users
import { Select, initTE } from "tw-elements";

const SelectComp = ({ name, list, val, change }) => {
  useEffect(() => {}, [val]);

  initTE({ Select });
  return (
    <div className="mb-4 flex flex-col">
      <label
        htmlFor={name}
        name={name}
        className="text-md text-gray-400 mb-1 font-semibold"
      >
        {name}
      </label>
      <select
        id={name}
        onChange={(e) => {
          change(e.target.value);
        }}
        value={val}
        className="text-sm w-90 px-4 py-2.5 bg-white font-normal rounded rounded-md capitalize min-h-8 border border-1.5 bg-gray-50 hover:pointer-cursor placeholder:opacity-40 placeholder:tracking-wide focus:outline-none text-gray-500"
      >
        <option value="" hidden defaultValue></option>
        {list?.map((player, id) => (
          <option key={id} value={player} className="h-8">
            {player}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectComp;
