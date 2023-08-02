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
    notes,
    setNotes,
  ] = useContext(AppContext).FormData;

  var Teams = useContext(AppContext).TeamList;
  var Folders = useContext(AppContext).FolderList;

  return (
    <div className="bg-slate-50 bg-opacity-40 px-10 p-4 m-auto">
      <form>
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
        </ErrorPage>
        <ErrorPage>
          <SelectComp name="Team" list={Teams} val={team} change={setTeam} />
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
      </form>
    </div>
  );
};

export default Form;
