import "./App.css";
import Home from "./components/Home";
import ChatContextProvider from "./contexts/ChatContext";
import "./index.css";

function App() {
  return (
    <div className="bg-sky-300 ">
      <ChatContextProvider>
        <Home />
      </ChatContextProvider>
    </div>
  );
}

export default App;
