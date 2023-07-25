import { useEffect, useState } from "react";
import Copyx from "./Components/Copyx";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Table from "./Components/Table";
import "./Styles/App.css";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { AppContext } from "./AppContext";

function App() {
  // const [first, setfirst] = useState()
  const [AllTodos, setAllTodos] = useState([]);
  // const [showModal, setShowModal] = useState(false);
  const [task, setTask] = useState("");
  const [team, setTeam] = useState("");
  const [folder, setFolder] = useState("");
  const [created, setCreated] = useState("");
  const [edited, setEdited] = useState("");
  const [notes, setNotes] = useState("");
  const [completed, setDone] = useState(false);
  const Teams = ["Software", "Hardware", "Admin", "Network", "Social"];
  const Folders = ["Web Dev", "Disc Jockey", "App Dev"];
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
  }, []);

  const ClearForm = () => {
    setTask("");
    setTeam("");
    setFolder("");
    setCreated("");
    setEdited("");
    setNotes("");
  };

  return (
    <div className="App w-full">
      <div className="bg-slate-100">
        <Toaster position="top-right" reverseOrder={false} />
        <AppContext.Provider
          value={{
            Todos: [AllTodos, setAllTodos],
            FormData: [
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
            ],
            link: dbLink,
            clear: ClearForm,
            get: GetTodos,
            TeamList:Teams,
            FolderList:Folders
          }}
        >
          <Navbar />
          <Header
          // get={GetTodos}
          />
          <Table />
        </AppContext.Provider>
      </div>
      <Copyx />
    </div>
  );
}

export default App;
