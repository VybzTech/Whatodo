import React, { useState } from "react";
import Plus from "../Icons/Plus";
import ModalTemp from "./ModalTemp";
import Form from "./Form";
import FormFooter from "./FormFooter";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="container">
      {/* 1st FLOOR */}
      <div className="py-5 px-7 flex justify-between items-center">
        <button
          className="flex items-center justify-between bg-transparent rounded rounded-md shadow-lg shadow-[0_1px_10px_0.5px_#aaa2] px-3.5 py-1 pt-1.5 uppercase text-slate-300 transition-all ease-in btn-text"
          type="button"
          onClick={() => {
            setShowModal((m) => !m);
          }}
        >
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
      {/* <div className="py-2 px-6 flex items-right justify-evenly w-72 ml-auto mr--1">
        <div className="flex mr-2.5">
          <span className="header-defaults hover:animate-pulse">
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
      </div> */}

      {/* MODAL */}
      <ModalTemp
        id={"CreateTodoForm"}
        heading={"Create New Todo"}
        body={<Form />}
        footer={<FormFooter setShowModal={setShowModal} />}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
};
export default Header;
