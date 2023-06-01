import React from "react";
import Sidebar from "./Sidebar";
import MessageBoard from "./MessageBoard";

const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-3/5 h-5/6 border border-white flex rounded-md overflow-hidden">
        <Sidebar />
        <MessageBoard />
      </div>
    </div>
  );
};

export default Home;
