import { useEffect, useState } from "react";
import Copyx from "./Components/Copyx";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Table from "./Components/Table";
import "./Styles/App.css";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

function App() {
  // const [first, setfirst] = useState()
  const [AllTodos, setAllTodos] = useState([]);
  const dbLink = "https://localhost:7042/api/Todos/";

  const GetTodos = () => {
    axios
      .get(dbLink)
      .then((res) => {
        setAllTodos(res.data);
      })
      .catch((e) => {
        if (e.message === "Network Error") {
          toast.error("You are offline !", {
            position: "bottom-right",
            iconTheme: {
              primary: "#F6F600",
              secondary: "#FFFAEE",
            },
          });
          return;
        }
        console.log(e, e.name);
        return;
      });
  };
  useEffect(() => {
    GetTodos();
  }, [AllTodos]);

  return (
    <div className="App w-full">
      <div className="bg-slate-100">
        <Toaster position="top-right" reverseOrder={false} />
        <Navbar />
        <Header get={GetTodos} />
        <Table AllTodos={AllTodos} get={GetTodos}  />
      </div>
      <Copyx />
    </div>
  );
}

export default App;
