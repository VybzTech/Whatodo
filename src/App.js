import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Table from "./Components/Table";
import "./Styles/App.css";

function App() {
  return (
    <div className="App bg-slate-100 w-full">
      <Navbar />
      <Header />
      <Table />
    </div>
  );
}

export default App;
