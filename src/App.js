import logo from "./logo.svg";
import "./App.css";
import ClickCounter from "./components/ClickCounter";
import HowerCounter from "./components/HowerCounter";

function App() {
  return (
    <div className="App">
      <ClickCounter name="pradeep" />
      <HowerCounter />
    </div>
  );
}

export default App;
