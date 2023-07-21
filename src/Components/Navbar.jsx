import React from "react";
const Navbar = () => {
  return (
    <nav
      className="Navbar flex bg-white shadow-neutral-100 px-8 py-2
    items-center
    justify-between"
    >
        <span>

      <h1 className="font-sans font-extrabold text-2xl capitalize">
        wha
        <span className="text-zinc-800">
        todo
        </span>
        <span className="text-zinc-700 font-normal text-sm respect">&reg;</span>
      </h1>
        </span>
      <div className="panel">
        <div className="user font-sans ">
          <p className="text-zinc-800 font-bold leading-tight ">John Doe</p>
          <p className="text-blue-600 font-semibold text-sm leading-tight">(User)</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
