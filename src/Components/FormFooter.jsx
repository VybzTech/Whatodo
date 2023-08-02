import axios from "axios";
import React, { useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { AppContext } from "../AppContext";
import { useState } from "react";

const FormFooter = ({ setShowModal }) => {
  const [disabled, setDisabled] = useState(false);
  const [
    task,
    setTask,
    team,
    setTeam,
    folder,
    setFolder,
    created,
    setCreated,
    notes,
    setNotes,
    completed,
    setDone,
  ] = useContext(AppContext).FormData;

  var Teams = useContext(AppContext).TeamList;
  var dbLink = useContext(AppContext).link;
  var clear = useContext(AppContext).clear;
  var Get = useContext(AppContext).get;
  var Folders = useContext(AppContext).FolderList;

  useEffect(() => {}, []);
  console.log();
  const SendForm = () => {
    if (task === "" || task === " ") {
      //SHOW TOAST OF EMPTY TASKNAME
      toast.error("The Task cannot be empty", {
        iconTheme: {
          primary: "#F6F600",
          secondary: "#FFFAEE",
        },
      });
      return;
    }
    if (team === "" || team === " ") {
      //SHOW TOAST OF NO TEAM ASSIGNED
      toast.error("Please assign the Task to a Team", {
        iconTheme: {
          primary: "#F6F600",
          secondary: "#FFFAEE",
        },
      });
      return;
    }
    axios
      .post(dbLink, { task, team, folder, created, notes, completed })
      .then((res) => {
        // Show toast of successful Entry, clear the Form timeout & close...
        toast.success("Successfully added Todo");
        setTimeout(() => {
          clear();
          setTimeout(
            setShowModal((m) => !m),
            500
          );
          // Run GetTodos here !!
          Get();
        }, 1500);
      })
      .catch((e) => {
        //SHOW ERROR MODAL
        console.log(e, e.name);
      });
  };
  return (
    <div className="flex p-4 mx-6 mb-4 flex-shrink-0 flex-wrap items-center justify-between rounded-b-md border-t-2 border-neutral-100 border-opacity-50 dark:border-opacity-50">
      <button
        type="button"
        onClick={() => {
          clear();
          setShowModal((m) => !m);
        }}
        className="inline-block rounded bg-primary-100 px-6 py-3 text-xs font-medium uppercase leading-normal text-red-700 transition duration-150 ease-in-out hover:bg-red-50 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
        data-te-modal-dismiss
      >
        Close
      </button>
      <button
        disabled={disabled}
        onClick={() => {
          setDisabled((d) => !d);
          setTimeout(() => {
            setDisabled((dis) => !dis);
          }, 3300);
          SendForm();
        }}
        type="button"
        className="disabled:shadow-[0_5px_7px_3px_rgba(40,10,202,0.1) disabled:bg-slate-300 disabled:cursor-not-allowed inline-block rounded bg-blue-400 px-6 py-3 text-xs hover:bg-blue-600 font-medium uppercase leading-normal text-white shadow-[0_4px_15px_-1px_#3b71ca3f] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600  focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      >
        Create
      </button>
    </div>
  );
};

export default FormFooter;
