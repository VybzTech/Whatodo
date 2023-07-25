import React, { useContext } from "react";
import axios from "axios";
import { AppContext } from "../AppContext";
import Input from "./Input";
import { toast } from "react-hot-toast";
import ErrorPage from "./ErrorHandler";
import SelectComp from "./Select";

const Update = ({ tasked, set }) => {
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
  var Teams = useContext(AppContext).TeamList;
  var Folders = useContext(AppContext).FolderList;
  return (
    <div className="bg-slate-50 px-5 p-4">
      <form>
        <div className="flex flex-col justify-between items-end">
          <ErrorPage>
            <Input
              name="Task"
              val={tasked.task}
              change={setTask}
              placeholder={"Recreate Task description..."}
            />
          </ErrorPage>
          <ErrorPage>
            <SelectComp
              name="Team"
              list={Teams}
              val={tasked.team}
              change={setTeam}
            />
          </ErrorPage>
          <ErrorPage>
            <SelectComp
              name="Folder"
              list={Folders}
              val={tasked.folder}
              change={setFolder}
            />
          </ErrorPage>
          <ErrorPage>
            <Input
              name="Notes"
              val={tasked.notes}
              change={setNotes}
              placeholder={"Write some notes..."}
            />
          </ErrorPage>
        </div>
      </form>
    </div>
  );
};

export default Update;
