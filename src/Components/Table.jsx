import React, { useContext, useState } from "react";
import Pagination from "./Pagination";
import Pen from "../Icons/Pen";
import Trash from "../Icons/Trash";
import ModalTemp from "./ModalTemp";
// import axios from "axios";
import CDelete from "./CDelete";
import Update from "./Update";
import { AppContext } from "../AppContext";
import UpdateFooter from "./UpdateFooter";

const Table = () => {
  const [showUpdate, setShowUpdate] = useState(false);
  const [showCDel, setShowCDel] = useState(false);
  const [activeTask, set] = useState({});
  const [editId, setEditId] = useState();
  const [AllTodos, setAllTodos] = useContext(AppContext).Todos;

  const [newTask, setNewTask] = useState("");
  const [newTeam, setNewTeam] = useState("");
  const [newFolder, setNewFolder] = useState("");
  const [newCreated, setNewCreated] = useState("");
  const [newEdited, setNewEdited] = useState("");
  const [newNotes, setNewNotes] = useState("");
  const [newCompleted, setNewCompleted] = useState(false);

  const UpdateInfo = {
    newTask,
    setNewTask,
    newTeam,
    setNewTeam,
    newFolder,
    setNewFolder,
    newCreated,
    setNewCreated,
    newEdited,
    setNewEdited,
    newNotes,
    setNewNotes,
    newCompleted,
    setNewCompleted,
  };
  return (
    <div>
      <div className="flex flex-col overflow-x-hidden">
        <div className="overflow-x-hidden sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden mx-4 ">
              <table className=" min-w-full text-center text-sm font-light rounded rounded-md">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="tale head tight">
                      S/N
                    </th>
                    <th scope="col" className="tale head">
                      Task
                    </th>
                    <th scope="col" className="tale head">
                      Team Members
                    </th>
                    <th scope="col" className="tale head">
                      Folder
                    </th>
                    {/* <th scope="col" className="tale head word-tight">
                      Date Created
                    </th>
                    <th scope="col" className="tale head word-tight">
                      Date Edited
                    </th> */}
                    <th scope="col" className="tale head">
                      Notes
                    </th>
                    <th scope="col" className="tale head">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {AllTodos.length !== 0 ? (
                    AllTodos?.map((Task, id) => (
                      <tr
                        key={id}
                        className="tale row bg-white border rounded-xl mb-2 overflow-hidden"
                      >
                        <td className="tale data sn">{id + 1}.</td>
                        <td className="tale data">{Task.task}</td>
                        <td className="tale data">{Task.team}</td>
                        <td className="tale data">{Task.folder}</td>
                        {/* <td className="tale data word-tight">{Task.created}</td>
                        <td className="tale data word-tight">{Task.edited}</td> */}
                        <td className="tale data">{Task.notes}</td>
                        <td className="tale flex items-center px-0.5 py-6 justify-center m-auto w-fit">
                          <span
                            className="tale actions"
                            onClick={() => {
                              set(Task);
                              setEditId(id);
                              console.log(id);
                              console .log(editId);
                              setTimeout(() => {
                                setShowUpdate((upd) => !upd);
                              }, 50);
                            }}
                          >
                            <Pen />
                          </span>
                          <span
                            className="tale actions"
                            onClick={() => {
                              set(Task);
                              setShowCDel((del) => !del);
                            }}
                          >
                            <Trash />
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td></td>
                      <td></td>
                      <td className="py-8 font-bold text-md">
                        There are currently no Todos
                      </td>
                      <td></td>
                      <td></td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <ModalTemp
        id={"ConfirmUpdate"}
        heading={"Update Todo"}
        body={
          <>
            <Update tasked={activeTask} updateInfo={UpdateInfo} />
          </>
        }
        footer={
          <>
            <UpdateFooter
              set={setShowUpdate}
              data={{
                editId,
                newTask,
                newTeam,
                newFolder,
                newCreated,
                newEdited,
                newNotes,
                newCompleted,
              }}
            />
          </>
        }
        // closeFnc={togUpdate}
        showModal={showUpdate}
        setShowModal={setShowUpdate}
      />
      <ModalTemp
        id={"ConfirmDelete"}
        heading={"Do you want to continue ? "}
        body={
          <>
            <CDelete tasked={activeTask} set={setShowCDel} />
          </>
        }
        footer={<></>}
        // closeFnc={togDel}
        showModal={showCDel}
        setShowModal={setShowCDel}
      />
      <Pagination />
    </div>
    //   secondary -  className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
    // tetiary  - classNameName="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
    // primary- className="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#316FD3] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
  );
};

export default Table;
