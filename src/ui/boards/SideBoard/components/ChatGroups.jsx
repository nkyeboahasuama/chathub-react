import React, { useContext } from "react";
import { BiMessageRoundedDots } from "react-icons/bi";
import Chat from "./Chat";
import useSubscription from "../../../shared/hooks/useSubscribeToRepo";
import NewGroup from "./NewGroup";
import { ChatContext } from "../../../contexts/ChatContext";

const ChatGroups = ({ setIsShow }) => {
  const { data: rooms } = useSubscription("rooms");
  const { currentChatRoom } = useContext(ChatContext);

  return (
    <div className=" h-full">
      <div className="text-xs p-6 flex border-b-2 border-gray-300 text-sky-600 font-semibold">
        <div className="mr-1">
          <BiMessageRoundedDots />
        </div>
        <div>All rooms</div>
      </div>
      <div>
        <NewGroup />
      </div>
      <div className="overflow-auto h-3/5">
        {rooms.length > 1 ? (
          rooms.map((room) => (
            <Chat
              currentChatRoom={currentChatRoom}
              setIsShow={setIsShow}
              room={room}
              key={room.id}
            />
          ))
        ) : (
          <div className="text-sm font-semibold text-center py-2">
            Loading rooms...
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatGroups;
