import React from "react";
import { BiMessageRoundedDots } from "react-icons/bi";
import Chat from "./Chat";

const ChatGroups = () => {
  return (
    <div>
      <div className="text-xs p-6 flex border-b-2 border-gray-300 text-sky-600 font-semibold">
        <div className="mr-1">
          <BiMessageRoundedDots />
        </div>
        <div>All messages</div>
      </div>
      <Chat room={123} />
      <Chat room={"Yo niggas"} />
      <Chat room={"We dey"} />
    </div>
  );
};

export default ChatGroups;
