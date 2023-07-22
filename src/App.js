import Copyx from "./Components/Copyx";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Table from "./Components/Table";
import "./Styles/App.css";

function App() {
  return (
    <div className="App w-full">
      <div className="bg-slate-100">
        <Navbar />
        <Header />
        <Table />
      </div>
      <Copyx />
    </div>
  );
}

export default App;
