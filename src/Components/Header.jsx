import React from "react";
import Plus from "../Icons/Plus";
import ChevronDown from "../Icons/ChevDown";
import Funnel from "../Icons/Funnel";
import ChevUpDown from "../Icons/ChevUpDown";

const Header = () => {
  return (
    <div className="container">
      {/* 1st FLOOR */}
      <div className="py-3 px-7 flex justify-between items-center">
        <button className="flex items-center justify-between bg-transparent rounded-sm shadow-lg shadow-[0_2px_10px_0.5px_#aaa2] px-3.5 py-1 pt-1.5 uppercase text-slate-300 transition-all ease-in btn-text">
          <span className="[&>svg]:w-4 pr-2 ">
            <Plus />
          </span>
          create todo
        </button>
        <p className="text-blue-700 text-bold font-semibold tracking-tight">
          Dashboard
        </p>
      </div>

      {/* 2nd FLOOR */}
      <div className="py-2 px-6 flex items-right justify-evenly w-72 ml-auto mr--1">
        {/* <button className="bg-transparent rounded-sm shadow-lg shadow-neutral-200 px-3.5 py-1.5 uppercase text-slate-300 transition-all ease-in btn-text">
  create todo
</button> */}
        <div className="flex mr-2.5">
          <span className="header-defaults  hover:animate-pulse">
            <span className="[&>svg]:w-3.5 pr-0.5">
              <ChevronDown />
            </span>
            <p className="text-gray-700 font-sans font-bold text-small uppercase tracking-tight">
              all
            </p>
          </span>
          <span className="header-defaults ">
            <span className="text-gray-300 font-sans font-bold text-small capitalize">
              filter
            </span>

            <span className="[&>svg]:w-3.5 pl-1 text-gray-300 ">
              <Funnel />
            </span>
          </span>
        </div>

        <div className="flex mr-2.5">
          <span className="header-defaults  hover:animate-pulse">
            <span className="[&>svg]:w-3.5 pr-0.5">
              <ChevronDown />
            </span>
            <p className="text-gray-700 font-sans font-bold text-small uppercase w-fit">
              a-z
            </p>
          </span>

          <span className="header-defaults">
            <p className="uppercase tracking-tight text-gray-300 font-sans font-bold text-small ">
              sort
            </p>
            <span className="[&>svg]:w-3.5 pr-0.5 text-gray-300">
              <ChevUpDown />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
