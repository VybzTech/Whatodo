import React from "react";
import Pagination from "./Pagination";
import Pen from "../Icons/Pen";
import Trash from "../Icons/Trash";
// Initialization for ES Users

const Table = () => {
  return (
    <div>
      <div className="flex flex-col overflow-x-hidden">
        <div className="overflow-x-hidden sm:-mx-6 lg:-mx-8">
          {/* <div className="inline-block w-full"> */}
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="tale head">
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
                    <th scope="col" className="tale head">
                      Date Created
                    </th>
                    <th scope="col" className="tale head">
                      Edited
                    </th>
                    <th scope="col" className="tale head">
                      Notes
                    </th>
                    <th scope="col" className="tale head">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* <tr className="bg-white ">
                    <td className="tale data sn">1</td>
                    <td className="tale data">Recreate UI for Dashboard</td>
                    <td className="tale data notes">Otto, Mark, Thomas</td>
                    <td className="tale data">Designs</td>
                    <td className="tale data word-tight">10 / 07 / 2023</td>
                    <td className="tale data word-tight">Today</td>
                    <td className="tale data notes">No notes...</td>
                    <td className="tale data notes flex items-center m-auto p-1">
                      <span className="">
                        <Pen />
                      </span>
                      <span className="">
                        <Trash />
                      </span>
                    </td>
                  </tr> */}
                  <tr className="bg-white border rounded rounded-lg m-2">
                    <td className="tale data sn">2</td>
                    <td className="tale data">Create backend for Website</td>
                    <td className="tale data notes">
                      Thornton, David, Mike, Tanya, Chris, Lizzy
                    </td>
                    <td className="tale data">Web Dev</td>
                    <td className="tale data word-tight">12 / 07 / 2023</td>
                    <td className="tale data word-tight">20 / 07 / 2023</td>
                    <td className="tale data notes">
                      Some components in the todos controller needs editing
                      before initializing the DB.
                    </td>
                    <td className="tale notes flex items-center px-0.5 py-6 justify-center m-auto w-fit">
                      <span className="mr-2">
                        <Pen />
                      </span>
                      <span className="">
                        <Trash />
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </div>
    //   secondary -  className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
    // tetiary  - classNameName="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
    // primary- className="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#316FD3] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
  );
};

export default Table;
