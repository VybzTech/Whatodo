import React, { useEffect } from "react";
import Pen from "../Icons/Pen";

const EditBtn = ({ setShowUpdate, set, Task,setEditId}) => {
    // console.log(Task);
  useEffect(() => {

  }, []);

  return (
    <span
      className="tale actions"
      onClick={() => {
          set(Task);
        setEditId(Task?.id);
        // setEditId(AllTodos[id]?.id);
        // setNewCreated(AllTodos[id]?.created);
        // pullInfo(id);
        // AllTodos[id]
        // console.log("id,editID", id, editId);
        setTimeout(() => {
          setShowUpdate((upd) => !upd);
        }, 5);
      }}
    >
      <Pen />
    </span>
  );
};

export default EditBtn;
