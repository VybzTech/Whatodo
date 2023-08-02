import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "../AppContext";
import Input from "./Input";
import ErrorPage from "./ErrorHandler";
import SelectComp from "./Select";

const Update = ({ tasked , updateInfo}) => {
  
  const { task, team, folder, created,  notes, completed } = tasked;
  const { newTask, setNewTask
    ,newTeam, setNewTeam
    ,newFolder, setNewFolder
    ,newCreated, setNewCreated
    ,newNotes, setNewNotes
    ,newCompleted, setNewCompleted } = updateInfo;

  var Teams = useContext(AppContext).TeamList;
  var Folders = useContext(AppContext).FolderList;
  useEffect(() => {
    setNewTask(task);
    setNewTeam(team);
    setNewFolder(folder);
    setNewCreated(created);
    setNewNotes(notes);
    setNewCompleted(completed);
  }, [tasked]);

  return (
    <div className="bg-slate-50 px-5 p-4">
      <form>
        <div className="flex flex-col justify-between">
          <ErrorPage>
            <Input
              name="Task"
              val={newTask}
              change={setNewTask}
              placeholder={"Recreate Task description..."}
            />
          </ErrorPage>
          <ErrorPage>
            <SelectComp
              name="Team"
              list={Teams}
              val={newTeam}
              change={setNewTeam}
            />
          </ErrorPage>
          <ErrorPage>
            <SelectComp
              name="Folder"
              list={Folders}
              val={newFolder}
              change={setNewFolder}
            />
          </ErrorPage>
          <ErrorPage>
            <Input
              name="Notes"
              val={newNotes}
              change={setNewNotes}
              placeholder={"Write some notes..."}
            />
          </ErrorPage>
        </div>
      </form>
    </div>
  );
};

export default Update;
