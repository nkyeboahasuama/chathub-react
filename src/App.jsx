import { useContext } from "react";
import "./App.css";
import Home from "./ui/Home";
import Login from "./auth/Login";
import { AuthContext } from "./ui/contexts/AuthContext";
import "./index.css";
import ChatContextProvider from "./ui/contexts/ChatContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <ChatContextProvider>
        <div>{user ? <Home /> : <Login />}</div>
      </ChatContextProvider>
    </>
  );
}

export default App;
