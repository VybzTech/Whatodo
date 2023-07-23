import React, { useState } from "react";
import Plus from "../Icons/Plus";
import ChevronDown from "../Icons/ChevDown";
import Funnel from "../Icons/Funnel";
import ChevUpDown from "../Icons/ChevUpDown";
import ModalTemp from "./ModalTemp";
import Form from "./Form";
import FormFooter from "./FormFooter";

// import { Modal, Ripple, initTE } from "tw-elements";

const Header = () => {
  // initTE({ Modal, Ripple });

  const [showModal, setShowModal] = useState(true);
  const [task, setTask] = useState("");
  const [team, setTeam] = useState("");
  const [folder, setFolder] = useState("");
  const [created, setCreated] = useState("");
  const [edited, setEdited] = useState("");
  const [notes, setNotes] = useState("");

  // const activateClick = () => {
  //   set((m) => !m);
  //   console.log(modal ? "Modal Shown" : "Modal Closed");
  // };

  const ClearForm = () => {
    setTask("");
    setTeam("");
    setFolder("");
    setCreated("");
    setEdited("");
    setNotes("");
    console.log("All clear", task, team, folder, created, edited, notes);
  };
  const today = new Date();
  // console.log(today);
  // console.log(<span data-mdb-format="ddd, dd, mmm, yyyy">{today}</span>);

  const data = { task, team, folder, created, edited, notes };
  return (
    <div className="container">
      {/* 1st FLOOR */}
      <div className="py-3 px-7 flex justify-between items-center">
        <button
          className="flex items-center justify-between bg-transparent rounded rounded-md shadow-lg shadow-[0_1px_10px_0.5px_#aaa2] px-3.5 py-1 pt-1.5 uppercase text-slate-300 transition-all ease-in btn-text"
          type="button"
          // data-te-toggle="modal"
          // data-te-target="#CreateTodoForm"
          onClick={() => {
            setShowModal((m) => !m);
            console.log("Btn clicked");
          }}
          // data-modal-toggle="#CreateTodoForm"
          // data-te-ripple-init
          // data-te-ripple-color="light"
        >
          <span className="[&>svg]:w-4 pr-2 ">
            <Plus />
          </span>
          create todo
        </button>
        <p className="text-blue-700 text-bold font-semibold tracking-tight">
          Dashboard
        </p>
        <span data-mdb-format="dd, mmm, yyyy">{today.toDateString()}</span>
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

      {/* MODAL */}
      <ModalTemp
        id={"CreateTodoForm"}
        heading={"Create New Todo"}
        body={
          <>
            <Form
              task={task}
              setTask={setTask}
              team={team}
              setTeam={setTeam}
              folder={folder}
              setFolder={setFolder}
              notes={notes}
              setNotes={setNotes}
            />
          </>
        }
        footer={
          <>
            <FormFooter data={data} clear={ClearForm} />
          </>
        }
        closeFnc={ClearForm}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
};

export default Header;
