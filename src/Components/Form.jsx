import React, { useContext, useEffect } from "react";
import Input from "./Input";
import SelectComp from "./Select";
import ErrorPage from "./ErrorHandler";
import { AppContext } from "../AppContext";

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
  let n = new Date();

  useEffect(() => {
    setCreated(
      `${n.getDate() < 10 ? "0" + n.getDate() : n.getDate()}/${
        n.getMonth() + 1 < 10 ? "0" + (n.getMonth() + 1) : n.getMonth() + 1
      }/${n.getFullYear()}`
    );
  }, []);

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
        <ErrorPage></ErrorPage>
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
