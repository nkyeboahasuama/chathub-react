import React from "react";
import Navbar from "../components/ChatsNavbar";
import UserProfile from "../components/UserProfile";
import ChatGroups from "../components/ChatGroups";

const Sidebar = () => {
  return (
    <div className="bg-white border-r-2 border-gray-400 flex-1 relative max-sm:hidden h-[100vh]">
      <div className="flex ">
        <Navbar />
      </div>
      <div className="">
        <ChatGroups />
      </div>
      <div className="bg-white h-14 w-full absolute bottom-0">
        <UserProfile />
      </div>
    </div>
  );
};

export default Sidebar;
