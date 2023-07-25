import React, { useContext } from "react";
import Input from "./Input";
import SelectComp from "./Select";
import ErrorPage from "./ErrorHandler";
import { AppContext } from "../AppContext";

const Form = ({
  date,
  // task,
  // setTask,
  // team,
  // setTeam,
  // folder,
  // setFolder,
  // notes,
  // setNotes,
}) => {
  
  const [
    task,
    setTask,
    team,
    setTeam,
    folder,
    setFolder,
    created,
    setCreated,
    edited,
    setEdited,
    notes,
    setNotes,
    completed,
    setDone,
  ] = useContext(AppContext).FormData;

  var Teams= useContext(AppContext).TeamList;
  var Folders= useContext(AppContext).FolderList;

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
              {date}.
            </p>
          </div>
        </div>
        <ErrorPage>
          <SelectComp name="Team" list={Teams} val={team} change={setTeam} />
          {/* <SelectComp name="Team" list={Teams} val={team} change={setTeam} multiple={true}/> */}
        </ErrorPage>
        <ErrorPage>
          <SelectComp
            name="Folder"
            list={Folders}
            val={folder}
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
          <p className="text-xs italic text-gray-400 ml-auto mr-1.5">{date}</p>
        </div>
      </form>
    </div>
  );
};

export default Form;
