// eslint-disable-next-line react-hooks/exhaustive-deps
import React, { useContext, useState } from "react";
import { AppContext } from "../AppContext";
import { toast } from "react-hot-toast";
import axios from "axios";

const UpdateFooter = ({ set, data ,editId}) => {
  var dbLink = useContext(AppContext).link;
  var Get = useContext(AppContext).get;
  const [disabled, setDisabled] = useState(false);
  const {
    newTask,
    newTeam,
    newFolder,
    newCreated,
    newNotes,
    newCompleted,
  } = data;

  const UpdateForm = () => {
    if (newTask === "" || newTask === " ") {
      //SHOW TOAST OF EMPTY TASKNAME
      toast.error("Please rewrite task", {
        iconTheme: {
          primary: "#F6F600",
          secondary: "#FFFAEE",
        },
      });
      return;
    }
    if (newTeam === "" || newTeam === " ") {
      //SHOW TOAST OF NO TEAM ASSIGNED
      toast.error("Please assign task", {
        iconTheme: {
          primary: "#F6F600",
          secondary: "#FFFAEE",
        },
      });
      return;
    }
    //IF ALL REQ ARE MET, SET THE ID & DATA THEN SEND REQUEST
    const editData = {
      ID: editId,
      Task: newTask,
      Team: newTeam,
      Folder: newFolder,
      Created: newCreated,
      Notes: newNotes,
      Completed: newCompleted,
    };
    // first
    setTimeout(() => {
      console.log(editData);
      axios
        .put(dbLink + `${editId}/`, editData)
        .then((res) => {
          // Show toast of successful Entry, clear the Form timeout & close...
          toast.success("Todo update successful");
          setTimeout(() => {
            setTimeout(
              set((m) => !m),
              100
            );
            // Run GetTodos here !!
            Get();
          }, 1500);
        })
        .catch((e) => {
          //SHOW ERROR MODAL
          console.log(e, e.name);
        });
    }, 100);
  };

  return (
    <div className="flex p-4 mx-6 mb-4 flex-shrink-0 flex-wrap items-center justify-between rounded-b-md border-t-2 border-neutral-100 border-opacity-50 dark:border-opacity-50">
      <button
        type="button"
        onClick={() => {
          set((m) => !m);
        }}
        className="inline-block rounded rounded-md bg-primary-100 px-6 py-3 text-xs font-medium uppercase leading-normal text-red-700 transition duration-150 ease-in-out hover:bg-red-50 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
        data-te-modal-dismiss
      >
        Dismiss
      </button>
      <button
        onClick={() => {
          setDisabled((d) => !d);
          setTimeout(() => {
            setDisabled((dis) => !dis);
          }, 3300);
          UpdateForm();
        }}
        disabled={disabled}
        type="button"
        className="disabled:shadow-[0_5px_7px_3px_rgba(40,202,20,0.1) disabled:bg-teal-200 disabled:cursor-not-allowed inline-block rounded rounded-md bg-green-400 px-6 py-3 text-xs hover:bg-green-600 font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#39da71] transition duration-150 ease-in-out hover:bg-green-500 hover:shadow-[0_8px_9px_-4px_rgba(59,232,102,0.3),0_4px_18px_0_rgba(59,232,102,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,232,102,0.3),0_4px_18px_0_rgba(59,232,102,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,232,102,0.3),0_4px_18px_0_rgba(59,232,102,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,232,102,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,232,102,0.2),0_4px_18px_0_rgba(59,232,102,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,232,102,0.2),0_4px_18px_0_rgba(59,232,102,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,232,102,0.2),0_4px_18px_0_rgba(59,232,102,0.1)]"
      >
        Update
      </button>
    </div>
  );
};

export default UpdateFooter;
