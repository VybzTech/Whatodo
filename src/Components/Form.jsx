import React from "react";
import Input from "./Input";
import SelectComp from "./Select";

const Form = () => {
  const Teams = ["software", "hardware", "admin", "network", "social"];
  const Folders = ["Web Dev", "Disc Jockey", "App Dev"];
  return (
    <div className="bg-slate-50 px-5  p-3">
      <form>
        <div className="flex justify-between items-end">
          <Input name="Task" />
          <div className="DOC pr-5 pb-2">
            <p className="text-sm text-gray-500 mb-1.5">Date Created</p>
            <p className="text-xs italic text-gray-400 ml-auto mr-1.5">
              22/07/2023.
            </p>
          </div>
        </div>
        <SelectComp name="Team" list={Teams} />
        <SelectComp name="Folder" list={Folders} />
        <Input name="Notes" />
        {/* priority */}
        {/* Finish date */}
        {/* Dependencies */}
        {/* Sub tasks */}
        {/* Reminder */}
        <div className="DOE">
          <p className="text-sm text-gray-500 mb-1.5">Date Edited</p>
          <p className="text-xs italic text-gray-400 ml-auto mr-1.5">Today.</p>
        </div>
      </form>
    </div>
  );
};

export default Form;
