import React from "react";
import Plus from "../Icons/Plus";

const Header = () => {
  return (
    <div className="container">
      <div className="py-2 px-6 flex justify-between items-center">
        <button className="flex items-center justify-between bg-transparent rounded-sm shadow-lg shadow-neutral-200 px-3.5 py-1 pt-1.5 uppercase text-slate-300 transition-all ease-in btn-text">
          <span className="[&>svg]:w-4 pr-2 ">
            <Plus />
          </span>
          create todo
        </button>
        <p className="text-blue-700 text-bold font-semibold tracking-tight">
          Dashboard
        </p>
      </div>

      <div className="py-2 px-6 flex items-right justify-evenly w-60 ml-auto mr--3">
        {/* <button className="bg-transparent rounded-sm shadow-lg shadow-neutral-200 px-3.5 py-1.5 uppercase text-slate-300 transition-all ease-in btn-text">
  create todo
</button> */}
        <span></span>
        <p className="text-gray-700 font-sans font-bold text-small uppercase tracking-tight">
          all
        </p>
        <p className="text-gray-300 font-sans font-bold text-small capitalize tracking-tight">
          filter
        </p>
        <p className="text-gray-500 font-sans font-bold text-small uppercase ">
          sort
        </p>
      </div>
    </div>
  );
};

export default Header;
