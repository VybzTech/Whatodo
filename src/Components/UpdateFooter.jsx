import React, { useContext, useState } from "react";
import { AppContext } from "../AppContext";
import { toast } from "react-hot-toast";
import axios from "axios";

const UpdateFooter = ({ set, data }) => {
  // var dbLink = useContext(AppContext).link;
  const [disabled, setDisabled] = useState(false);
  // var Get = useContext(AppContext).get;
  const {
    editId,
    newTask,
    newTeam,
    newFolder,
    newCreated,
    newNotes,
    newCompleted,
  } = data;
  const UpdateForm = () => {
    if (data.task === "" || data.task === " ") {
      //SHOW TOAST OF EMPTY TASKNAME
      toast.error("The Task cannot be empty", {
        iconTheme: {
          primary: "#F6F600",
          secondary: "#FFFAEE",
        },
      });
      return;
    }
    if (data.team === "" || data.team === " ") {
      //SHOW TOAST OF NO TEAM ASSIGNED
      toast.error("Please assign the Task to a Team", {
        iconTheme: {
          primary: "#F6F600",
          secondary: "#FFFAEE",
        },
      });
      return;
    }
  };

  return (
    <div className="flex p-4 mx-6 mb-4 flex-shrink-0 flex-wrap items-center justify-between rounded-b-md border-t-2 border-neutral-100 border-opacity-50 dark:border-opacity-50">
      <button
        type="button"
        onClick={() => {
          set((m) => !m);
        }}
        className="inline-block rounded bg-primary-100 px-6 py-3 text-xs font-medium uppercase leading-normal text-red-700 transition duration-150 ease-in-out hover:bg-red-50 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
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
        className="disabled:shadow-[0_5px_7px_3px_rgba(40,202,20,0.1) disabled:bg-teal-200 disabled:cursor-not-allowed inline-block rounded bg-green-400 px-6 py-3 text-xs hover:bg-green-600 font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#39da71] transition duration-150 ease-in-out hover:bg-green-500 hover:shadow-[0_8px_9px_-4px_rgba(59,232,102,0.3),0_4px_18px_0_rgba(59,232,102,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,232,102,0.3),0_4px_18px_0_rgba(59,232,102,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,232,102,0.3),0_4px_18px_0_rgba(59,232,102,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,232,102,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,232,102,0.2),0_4px_18px_0_rgba(59,232,102,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,232,102,0.2),0_4px_18px_0_rgba(59,232,102,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,232,102,0.2),0_4px_18px_0_rgba(59,232,102,0.1)]"
      >
        Update
      </button>
    </div>
  );
};

export default UpdateFooter;
