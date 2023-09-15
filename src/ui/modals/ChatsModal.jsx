import React from "react";
import NavBar from "../boards/SideBoard/components/ChatsNavbar";
import Chats from "../boards/SideBoard/components/ChatGroups";

const ChatsModal = ({ setIsShow }) => {
  const closeChatsModal = () => {
    setIsShow(false);
  };
  return (
    <div className="bg-white h-4/6 w-full absolute top-0 left-0 z-10 opacity-95">
      <div className="flex justify-end bg-zinc-900">
        <div
          className="bg-red-600 text-white p-1 m-2 cursor-pointer"
          onClick={closeChatsModal}
        >
          Close
        </div>
      </div>
      <NavBar />
      <Chats />
    </div>
  );
};

export default ChatsModal;
