import React from "react";
import Sidebar from "./boards/SideBoard/main/Sidebar";
import MessageBoard from "./boards/MessageBoard/main/MessageBoard";

const Home = () => {
  return (
    <div className="h-[100dvh] w-[100vw] flex items-center justify-center relative bg-neutral-700">
      <div className="lg:h-4/5 lg:w-4/5 h-full w-full border-collapse flex shadow-3xl shadow-neutral-900">
        <Sidebar />
        <MessageBoard />
      </div>
    </div>
  );
};

export default Home;
