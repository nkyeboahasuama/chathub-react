import React from "react";
import { BiMessageRoundedDots } from "react-icons/bi";
import Chat from "./Chat";
import useSubscription from "../../../shared/hooks/useSubscribeToRepo";
import NewGroup from "./NewGroup";

const ChatGroups = ({ setIsShow }) => {
  const { data: rooms } = useSubscription("rooms");

  return (
    <div>
      <div className="text-xs p-6 flex border-b-2 border-gray-300 text-sky-600 font-semibold">
        <div className="mr-1">
          <BiMessageRoundedDots />
        </div>
        <div>All messages</div>
      </div>
      {rooms ? (
        rooms.map((room) => (
          <Chat setIsShow={setIsShow} room={room} key={room.id} />
        ))
      ) : (
        <div>Loading...</div>
      )}
      <NewGroup />
    </div>
  );
};

export default ChatGroups;
