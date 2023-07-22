import React from "react";
import Bell from "../Icons/Bell";
import Setting6 from "../Icons/Settings6";
import Search from "../Icons/Search";
import img from "../Images/a40e4d1afec5e099a8d106cac45ac9ef.jpg";
import pic from "../Images/e3c0b57e39b9038b5a33a28d7953f24d.jpg";
const Navbar = () => {
  return (
    <nav className="Navbar flex bg-white shadow-neutral-100 px-10 py-3.5 items-center justify-between">
      {/* LEFT SIDE */}
      <span>
        <h1 className="font-sans font-extrabold text-2xl capitalize text-zinc-800">
          wha
          <span className="text-zinc-700">todo</span>
          <span className="text-stone-500 font-normal text-sm respect">
            &reg;
          </span>
        </h1>
      </span>
      {/* RIGHT SIDE */}
      <div className="panel flex">
        {/* SEARCH INPUT */}
        <div className="container p-1 pr-2.5 bg-blue-50 rounded rounded-2xl h-fit w-fit flex mr-6">
          <input
            className="text-xs w-48 font-semibold rounded rounded-xl p-1.5 placeholder:opacity-40 focus:outline-none"
            type="text"
            placeholder="Search Todos, Users, Folders..."
            name="Search Todos"
            // placeholder="Track your Tasks here..."
          />

          <span className="nav-icons pl-1 ">
            <Search />
          </span>
        </div>
        <div className="user font-sans ">
          <p className="text-zinc-800 font-bold leading-tight ">John Doe</p>
          <p className="text-blue-600 font-semibold text-sm leading-tight">
            (User)
          </p>
        </div>
        <img
          className="w-8 mx-2.5 my-auto h-8 rounded-full shadow shadow-lg"
          src={pic}
          alt="Rounded avatar"
        />
        <span className="nav-icons p-1">
          {/* <span className="m-auto [&>svg]:w-5.5 [&>svg]:text-blue-400 w-fit relative"> */}
          <Bell />
          {/* <span class="top-0 left-3 absolute w-3 h-3 bg-blue-500 border-2 border-white dark:border-gray-800 rounded-full"></span> */}
        </span>
        <span className="nav-icons p-1 ml-2">
          <Setting6 />
        </span>
        <span className="[&>svg]:w-5"></span>
      </div>
    </nav>
  );
};

export default Navbar;
