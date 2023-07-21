import React, { useEffect, useState } from "react";
import axios from "axios";

const Test = () => {
    const [name, setName] = useState("");
    const nameChange = (e) => {
        setName(e.target.value);
    };
    const data =
        //JSON.stringify(
        {
        //ID: 1,
        Task: name,
        //Team: "Moi",
        //TeamMember: "David",
        //Created: "17/07/2023",
        //Edited: "20/07/2023",
        //Completed: false,
    };

    let BackEndUrl = "https://localhost:7042/api/Todos";
    useEffect(() => {
        // getTodos();
    }, []);
    const GetTodos = () => {
        
        console.log(data);
        axios
            .get(BackEndUrl)
            .then((res) => console.log(res))
            .catch((e) => console.log(e.message));
    };
    const AddNewTodo = () => {
        console.log(data); //, { headers: { "Content-Type": "application/json" } }
        axios
            .post(BackEndUrl, data)
            .then((res) => console.log(res))
            .catch((e) => console.log(e.message));
    };

    return (
        <div className=".formGroup w-fit m-auto py-40 flex flex-col gap-y-10">
            <input
                className="Vinput"
                title="name"
                type="text"
                value={name}
                onChange={nameChange}
            />
            <input
                className="text-sm font-semibold  w-60 px-3 py-2 rounded-md text-gray-200 bg-blue-500 hover:text-white hover:bg-blue-700 hover:cursor-pointer transition-all ease-in focus:animation-pulse delay-75 duration-200"
                value="Send"
                onClick={AddNewTodo}
                type="submit"
            />
        </div>
    );
};

export default Test;
