import React, { useContext } from "react";
import Input from "./Input";
import SelectComp from "./Select";
import ErrorPage from "./ErrorHandler";
import { AppContext } from "../AppContext";
import DatePick from "./DatePicker";
import { useState } from "react";

const Form = () => {
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

  const [date, setDate] = useState("");
  var Teams = useContext(AppContext).TeamList;
  var Folders = useContext(AppContext).FolderList;

  return (
    <div className="bg-slate-50 bg-opacity-40 px-10 p-4 m-auto">
      <form>
        {/* <div className="flex justify-between items-end"> */}
        <ErrorPage>
          <Input
            name="Task"
            val={task}
            change={setTask}
            placeholder={"Enter Task description..."}
          />
        </ErrorPage>
        <ErrorPage>
          <DatePick name={"Created"} val={created} change={setCreated} />
          {/* <div className="DOC pr-5 pb-2"> */}
          {/* <p className="text-sm text-gray-500 mb-1.5">Date Created</p> */}
          {/* <p className="text-xs italic text-gray-400 ml-auto mr-1.5"> */}
          {/* {date}. */}
          {/* </p> */}
          {/* </div> */}
        </ErrorPage>
        {/* </div> */}
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
        {/* <div className="DOE">
          <p className="text-sm text-gray-500 mb-1.5">Date Edited</p>
          <p className="text-xs italic text-gray-400 ml-auto mr-1.5">{date}</p>
        </div> */}
      </form>
    </div>
  );
};

export default Form;
