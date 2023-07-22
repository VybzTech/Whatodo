import React from "react";
// Initialization for ES Users
import { Select, initTE } from "tw-elements";

const SelectComp = ({ name, list }) => {
  initTE({ Select });

  return (
    <div className="w-80 mb-2.5">
      <label htmlFor={name} name={name}  className="text-sm text-gray-500 mb-1.5">
        {name}
      </label>
      {/* <input type="text"
            className="text-small w-80 px-4 py-1.5 bg-gray-50 font-normal rounded rounded-xs Capitalize placeholder:opacity-40 placeholder:tracking-wide focus:outline-none"
            
          placeholder="Enter Task description..."/> */}
      <select
        id={name}
        // data-te-select-init
        className="text-small w-80 px-4 py-2 bg-white font-normal rounded rounded-md capitalize min-h-8 border border-1.5 bg-gray-50 hover:pointer-cursor placeholder:opacity-40 placeholder:tracking-wide focus:outline-none text-gray-500"
        // className="hover:pointer-cursor"
        // data-te-select-clear-button="true"
        // multiple
        // data-te-select-size="sm"
        // default lg
      >
        <option value="" hidden defaultValue></option>
        {list?.map((player, id) => (
          <option key={id} value={id + 1} className="h-8">
            {player}
          </option>
        ))}
      </select>
      {/* <label data-te-select-label-ref htmlFor={name}>
        Select Team Players
      </label> */}
    </div>
  );
};

export default SelectComp;
