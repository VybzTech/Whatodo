import axios from "axios";
import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const UpdateFooter = ({ data, clear, showModal, setShowModal, get }) => {
  useEffect(() => {}, [showModal]);

  // const UpdateForm = () => {
  //   if (data.task === "" || data.task === " ") {
  //     //SHOW TOAST OF EMPTY TASKNAME
  //     toast.error("The Task cannot be empty", {
  //       iconTheme: {
  //         primary: "#F6F600",
  //         secondary: "#FFFAEE",
  //       },
  //     });
  //     return;
  //   }
  //   if (data.team === "" || data.team === " ") {
  //     //SHOW TOAST OF NO TEAM ASSIGNED
  //     toast.error("Please assign the Task to a Team", {
  //       iconTheme: {
  //         primary: "#F6F600",
  //         secondary: "#FFFAEE",
  //       },
  //     });
  //     return;
  //   }
  //   console.log(data);
  //   //finding folder issue, created, edited
  //   const dbLink = "https://localhost:7042/api/Todos/";
  //   axios
  //     .post(dbLink, data)
  //     .then(() => {
  //       // Show toast of successful Entry, clear the Form timeout & close...
  //       toast.success("Successfully added Todo");
  //       setTimeout(() => {
  //         clear();
  //         setTimeout(
  //           setShowModal((m) => !m),
  //           500
  //         );
  //         // Run GetTodos here !!
  //         get();
  //       }, 1500);
  //     })
  //     .catch((e) => {
  //       //SHOW ERROR MODAL
  //       console.log(e, e.name);
  //     });
  //   console.log(data);
  // };
  return (
    <div className="flex p-4 mx-6 mb-4 flex-shrink-0 flex-wrap items-center justify-between rounded-b-md border-t-2 border-neutral-100 border-opacity-50 dark:border-opacity-50">
      <Toaster position="top-right" reverseOrder={false} />
      <button
        type="button"
        onClick={() => {
          clear();
          setShowModal((m) => !m);
        }}
        className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-red-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
        data-te-modal-dismiss
      >
        Close
      </button>
      <button
        // onClick={() => SendForm()}
        type="button"
        className="inline-block rounded bg-blue-400 px-6 pb-2.5 pt-2.5 text-xs hover:bg-blue-600 font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      >
        Create
      </button>
    </div>
  );
};

export default UpdateFooter;
