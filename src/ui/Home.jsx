import React from "react";
import Sidebar from "./boards/SideBoard/main/Sidebar";
import MessageBoard from "./boards/MessageBoard/main/MessageBoard";

const Home = () => {
  return (
    <div className="h-[100dvh] w-[100vw] flex items-center justify-center relative">
      <div className="border-2 border-gray-300 flex  overflow-hidden w-full h-full">
        <Sidebar />
        <MessageBoard />
      </div>
    </div>
  );
};

export default Home;
