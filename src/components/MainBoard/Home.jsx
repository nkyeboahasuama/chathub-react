import React from "react";
import Sidebar from "../SideBoard/Sidebar";
import MessageBoard from "./MessageBoard";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className="h-screen flex items-center justify-center">
        <div className="sm:w-3/5 sm:h-5/6 border border-white flex rounded-md overflow-hidden w-full h-full">
          <Sidebar />
          <MessageBoard />
        </div>
      </div>
    )
  );
};

export default Home;
