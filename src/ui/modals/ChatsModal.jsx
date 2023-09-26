import React, { useContext } from "react";
import NavBar from "../boards/SideBoard/components/ChatsNavbar";
import { BiMessageRoundedDots } from "react-icons/bi";

import ModalChatRooms from "./ModalChatRooms";
import NewGroup from "../boards/SideBoard/components/NewGroup";
import useSubscription from "../shared/hooks/useSubscribeToRepo";
import { ChatContext } from "../contexts/ChatContext";
import { MdKeyboardArrowUp } from "react-icons/md";

const ChatsModal = ({ setIsShow }) => {
  const { currentChatRoom, chatRooms } = useContext(ChatContext);

  return (
    <div className="bg-white h-fit w-full absolute top-0 left-0 z-10 opacity-95">
      <NavBar />
      <div className="text-xs p-6 flex border-b-2 border-gray-300 text-sky-600 font-semibold">
        <div className="mr-1">
          <BiMessageRoundedDots />
        </div>
        <div>All rooms</div>
      </div>
      {chatRooms ? (
        chatRooms.map((room) => (
          <ModalChatRooms
            setIsShow={setIsShow}
            room={room}
            key={room.id}
            currentChatRoom={currentChatRoom}
          />
        ))
      ) : (
        <div>Loading...</div>
      )}
      <div className="flex flex-col items-center justify-center">
        <div className="w-full">
          <NewGroup />
        </div>
        <div className="bg-slate-800 h-8 w-8 text-white flex justify-center items-center mt-3 mb-1 rounded-full">
          <MdKeyboardArrowUp
            onClick={() => setIsShow(false)}
            style={{
              fontSize: "30px",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatsModal;
