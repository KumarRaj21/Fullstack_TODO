import "./App.css";
import Public from "./Routes/Public/Public";
import Private from "./Routes/Private/Private";
function App() {
  return localStorage.getItem("user") ? <Private /> : <Public />;
}

export default App;
