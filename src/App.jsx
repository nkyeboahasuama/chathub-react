import { useContext } from "react";
import "./App.css";
import Home from "./ui/Home";
import Login from "./auth/Login";
import { AuthContext } from "./ui/contexts/AuthContext";
// import ChatContextProvider from "./contexts/ChatContext";
import "./index.css";

function App() {
  const { user } = useContext(AuthContext);
  return <>{user ? <Home /> : <Login />}</>;
}

export default App;
