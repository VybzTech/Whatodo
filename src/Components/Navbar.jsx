import React from "react";
import Bell from "../Icons/Bell";
import Setting6 from "../Icons/Settings6";
import Search from "../Icons/Search";
import pic from "../Images/e3c0b57e39b9038b5a33a28d7953f24d.jpg";
const Navbar = () => {
  return (
    <nav className="Navbar flex bg-white shadow-neutral-100 px-10 py-3.5 items-center justify-between">
      {/* LEFT SIDE */}
      <span className="cursor-pointer" onClick={() => (window.location = "/")}>
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
        {/* <div className="container p-1 pr-2.5 bg-blue-50 rounded rounded-2xl h-fit w-fit flex mr-6">
          <input
            className="text-xs w-48 font-semibold rounded rounded-xl p-1.5 placeholder:opacity-40 focus:outline-none"
            type="text"
            placeholder="Search Todos, Users, Folders..."
            name="Search Todos"
          />

          <span className="nav-icons pl-1 ">
            <Search />
          </span>
        </div> */}
        <div className="user font-sans ">
          <p className="text-zinc-800 font-bold leading-tight ">Hello David</p>
          <p className="text-blue-600 font-semibold text-small leading-tight">
            (User)
          </p>
        </div>
        <img
          className="w-8 mx-2.5 my-auto h-8 rounded-full shadow shadow-lg"
          src={pic}
          alt="Rounded avatar"
        />
        {/* <span className="nav-icons p-1">
          <Bell />
        </span>
        <span className="nav-icons p-1 ml-2">
          <Setting6 />
        </span> */}
        <span className="[&>svg]:w-5"></span>
      </div>
    </nav>
  );
};

export default Navbar;
