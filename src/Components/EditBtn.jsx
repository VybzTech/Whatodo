import React from "react";
import Pen from "../Icons/Pen";

const EditBtn = ({ setShowUpdate, set, Task, setEditId }) => {
  return (
    <span
      className="tale actions"
      onClick={() => {
        set(Task);
        setEditId(Task?.id);
        setTimeout(() => {
          setShowUpdate((upd) => !upd);
        }, 50);
      }}
    >
      <Pen />
    </span>
  );
};

export default EditBtn;
