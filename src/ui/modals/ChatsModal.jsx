import React, { useContext } from "react";
import NavBar from "../boards/SideBoard/components/ChatsNavbar";
import ChatGroups from "../boards/SideBoard/components/ChatGroups";
import { ChatContext } from "../contexts/ChatContext";

const ChatsModal = ({ setIsShow }) => {
  const { currentChatRoom } = useContext(ChatContext);
  const closeChatsModal = () => {
    setIsShow(false);
  };
  return (
    <div className="bg-white h-5/6 w-full absolute top-0 left-0 z-10 opacity-95">
      <div className="flex justify-end bg-zinc-900">
        <div
          className="bg-red-600 text-white p-1 m-2 cursor-pointer"
          onClick={closeChatsModal}
        >
          Close
        </div>
      </div>
      <NavBar />
      <ChatGroups room={currentChatRoom} closeChatsModal={closeChatsModal} />
    </div>
  );
};

export default ChatsModal;
