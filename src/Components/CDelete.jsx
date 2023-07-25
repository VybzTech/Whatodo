import axios from "axios";
import React from "react";

const CDelete = ({ tasked, set }) => {
    console.log(tasked)
    const dbLink = `https://localhost:7042/api/Todos/${tasked.id}`;
    const DeleteTodo=(id)=>{
        axios.delete(dbLink).then(res=>{if(res.status===200){console.log(res)
            // Show successful delete modal 
            //// Run get data here
           setTimeout(() => {
            set((m) => !m)
           }, 750); }}).catch(e=>console.log(e,e.name))
    }
  return (
    <>
      <h3 className=" font-semibold text-lg mx-7 my-4 tracking-tight span2 w-full">
        Delete {tasked.task}
      </h3>
      <div className="flex justify-between items-center px-2.5 py-4">
        <button onClick={()=>{}}
          className="ml-1 
      inline-block
       rounded
        bg-red-400
       px-6
        pb-2 w-full
         pt-2.5
          text-xs
           font-medium 
           uppercase
            leading-normal
             text-white
              shadow-[0_4px_9px_-4px_#316FD3] 
       transition duration-150 ease-in-out 
       hover:bg-red-600 
       hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
       focus:bg-red-600 
       focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
       focus:outline-none focus:ring-0 
       active:bg-red-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
       dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)]
        dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
       dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
       dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
          Yes
        </button>
        <button
          onClick={() => set((m) => !m)}
          className="ml-4 w-full inline-block rounded bg-blue-400 px-6 pb-2.5 pt-2.5 text-xs hover:bg-blue-600 font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
          No
        </button>
      </div>
    </>
  );
};

export default CDelete;
