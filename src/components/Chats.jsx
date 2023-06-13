import React, { useContext, useEffect, useState } from "react";
import { BiMessageRoundedDots } from "react-icons/bi";
import { ChatContext } from "../contexts/ChatContext";

const Chats = () => {
  const { message, userId } = useContext(ChatContext);
  const [userObj, setUserObj] = useState("");
  const [formattedMessage, setFormattedMessage] = useState("");

  useEffect(() => {
    const filteredChat = message.filter((msg) => msg.senderId !== userId);
    if (filteredChat.length > 0) {
      setUserObj(filteredChat[filteredChat.length - 1]);
      setFormattedMessage(
        filteredChat[filteredChat.length - 1].message.slice(0, 10)
      );
    }
  }, [message, userId]);

  return (
    <div>
      <div className="text-xs p-6 flex border-b-2 border-gray-300 text-sky-600 font-semibold">
        <div className="mr-1">
          <BiMessageRoundedDots />
        </div>
        <div>All messages</div>
      </div>
      {userObj && (
        <div className="flex justify-between py-3 px-2 hover:bg-white cursor-pointer items-center border-b-2 border-gray-300">
          <div className="flex items-center">
            <div className="bg-gray-400 w-10 h-10 rounded-full overflow-hidden mr-2">
              <img src={userObj.sender.picture} alt="img" />
            </div>
            <div className="flex flex-col justify-between">
              <div className="text-sm font-bold">
                {userObj.sender.name.length > 20
                  ? userObj?.sender.name.slice(0, 15) + "..."
                  : userObj.sender.name}
              </div>
              <div className="text-xs">{formattedMessage}</div>
            </div>
          </div>
          <div className="flex flex-col items-end justify-between">
            <div className="text-xs">
              {userObj?.time.hour}:{userObj?.time.minute}
            </div>
            <div className="bg-red-600 text-white font-medium w-4 h-4 rounded-full text-xs flex items-center justify-center">
              {message.filter((msg) => msg.sender !== userId).length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chats;
