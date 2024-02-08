import React from "react";
import Navbar from "../components/ChatsNavbar";
import UserProfile from "../components/UserProfile";
import ChatGroups from "../components/ChatGroups";

const Sidebar = () => {
  return (
    <div className="bg-neutral-900 flex-1 relative max-sm:hidden h-full rounded-se-lg">
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
