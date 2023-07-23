import React from "react";
import Input from "./Input";
import SelectComp from "./Select";
import ErrorPage from "./ErrorHandler";

const Form = ({
  task,
  setTask,
  team,
  setTeam,
  folders,
  setFolder,
  notes,
  setNotes,
}) => {
  const Teams = ["software", "hardware", "admin", "network", "social"];
  const Folders = ["Web Dev", "Disc Jockey", "App Dev"];

  return (
    <div className="bg-slate-50 px-5 p-4">
      <form>
        <div className="flex justify-between items-end">
          <ErrorPage>
            <Input
              name="Task"
              val={task}
              change={setTask}
              placeholder={"Enter Task description..."}
            />
          </ErrorPage>
          <div className="DOC pr-5 pb-2">
            <p className="text-sm text-gray-500 mb-1.5">Date Created</p>
            <p className="text-xs italic text-gray-400 ml-auto mr-1.5">
              22/07/2023.
            </p>
          </div>
        </div>
        <ErrorPage>
          <SelectComp name="Team" list={Teams} val={team} change={setTeam} />
        </ErrorPage>
        <ErrorPage>
          <SelectComp
            name="Folder"
            list={Folders}
            val={folders}
            change={setFolder}
          />
        </ErrorPage>
        <ErrorPage>
          <Input
            name="Notes"
            val={notes}
            change={setNotes}
            placeholder={"Write some notes..."}
          />
        </ErrorPage>
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
