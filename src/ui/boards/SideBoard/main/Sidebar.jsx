import React from "react";
import Navbar from "../components/ChatsNavbar";
import UserProfile from "../components/UserProfile";
import ChatGroups from "../components/ChatGroups";

const Sidebar = () => {
  return (
    <div className="bg-neutral-900 relative max-sm:hidden rounded-se-lg flex flex-col">
      <div className="flex">
        <Navbar />
      </div>
      <div className="h-[calc(100%-7.5rem)]">
        <ChatGroups />
      </div>
      <div className="h-14 w-full">
        <UserProfile />
      </div>
    </div>
  );
};

export default Sidebar;
