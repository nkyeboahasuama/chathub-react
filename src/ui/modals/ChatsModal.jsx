import React, { useContext } from "react";
import NavBar from "../boards/SideBoard/components/ChatsNavbar";
import { BiMessageRoundedDots } from "react-icons/bi";

import ChatRoomModal from "./ChatRoomModal";
import NewGroup from "../boards/SideBoard/components/NewGroup";
import { ChatContext } from "../contexts/ChatContext";
import { MdKeyboardArrowUp } from "react-icons/md";

const ChatsModal = ({ setIsShow }) => {
  const { currentChatRoom, chatRooms } = useContext(ChatContext);

  return (
    <div className="bg-white h-full w-full absolute top-0 left-0 z-10 opacity-95 flex flex-col justify-between">
      <div className="h-4/5 max-h-full">
        <NavBar />
        <div className="text-xs p-6 flex border-b-2 border-gray-300 text-sky-blue font-semibold">
          <div className="mr-1">
            <BiMessageRoundedDots />
          </div>
          <div>All rooms</div>
        </div>
        <div className="w-full">
          <NewGroup />
        </div>
        <div className=" overflow-auto h-4/5">
          {chatRooms ? (
            chatRooms.map((room) => (
              <ChatRoomModal
                setIsShow={setIsShow}
                room={room}
                key={room.id}
                currentChatRoom={currentChatRoom}
              />
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="text-white h-8 w-8 bg-slate-800 flex justify-center items-center mt-3 rounded-full">
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
