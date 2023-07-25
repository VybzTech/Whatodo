import { useEffect, useState } from "react";
import Copyx from "./Components/Copyx";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Table from "./Components/Table";
import "./Styles/App.css";
import axios from "axios";

function App() {
  // const [first, setfirst] = useState()
  const [AllTodos, setAllTodos] = useState([]);
  const dbLink = "https://localhost:7042/api/Todos/";

  const GetTodos = () => {
    axios
      .get(dbLink)
      .then((res) => setAllTodos(res.data))
      .catch((e) => console.log(e, e.name));
  };
  useEffect(() => {
    GetTodos();
  }, []);

  return (
    <div className="App w-full">
      <div className="bg-slate-100">
        <Navbar />
        <Header get={GetTodos}/>
        <Table AllTodos={AllTodos} />
      </div>
      <Copyx />
    </div>
  );
}

export default App;
