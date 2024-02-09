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
    <div className="h-full">
      <div className="h-1/5 py-4">
        <div className="text-xs h-2/4 ml-5 flex items-center text-sky-600 font-semibold">
            <BiMessageRoundedDots className="mr-1"/>
          <div>All rooms</div>
        </div>
        <div className="h-2/4 flex justify-center items-center">
          <NewGroup />
        </div>
      </div>
      <div className="h-4/5 overflow-auto">
      
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
