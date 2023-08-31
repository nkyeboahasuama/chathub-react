import "./App.css";
import Home from "./components/MainBoard/Home";
import Login from "./components/auth/Login";
import ChatContextProvider from "./contexts/ChatContext";
import "./index.css";

function App() {
  return (
    <div className="bg-sky-300 h-screen">
      <Login />
      {/* <ChatContextProvider> */}
      <Home />
      {/* </ChatContextProvider> */}
    </div>
  );
}

export default App;
