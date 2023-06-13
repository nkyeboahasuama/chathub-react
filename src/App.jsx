import "./App.css";
import Home from "./components/Home";
import Login from "./components/auth/Login";
import ChatContextProvider from "./contexts/ChatContext";
import "./index.css";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user } = useAuth0();
  return (
    <div className="bg-sky-300 h-screen">
      <Login />
      <ChatContextProvider>
        <div>User is: {user?.name}</div>
        <Home />
      </ChatContextProvider>
    </div>
  );
}

export default App;
