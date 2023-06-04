import React from "react";
import Navbar from "./Navbar";
import UserProfile from "./UserProfile";
import Chats from "./Chats";

const Sidebar = () => {
  return (
    <div className="bg-white border-r-2 border-gray-400 flex-1 relative max-lg:hidden">
      <div className="flex ">
        <Navbar />
      </div>
      <div className="bg-gray-100 h-full">
        <Chats />
      </div>
      <div className="bg-white h-14 w-full absolute bottom-0">
        <UserProfile />
      </div>
    </div>
  );
};

export default Sidebar;
