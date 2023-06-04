import React, { useContext, useEffect, useState } from "react";
import { BiMessageRoundedDots } from "react-icons/bi";
import logo512 from "../images/logo512.png";
import { ChatContext } from "../contexts/ChatContext";

const Chats = () => {
  const { mes, userId } = useContext(ChatContext);
  const [recentMessage, setRecentMessage] = useState("");

  useEffect(() => {
    const filteredChat = mes.filter((ms) => ms.sender !== userId);
    if (filteredChat.length > 0) {
      setRecentMessage(
        filteredChat[filteredChat.length - 1].message.slice(0, 10)
      );
    }
  }, [mes, userId]);

  return (
    <div>
      <div className="text-xs p-6 flex border-b-2 border-gray-300 text-sky-600 font-semibold">
        <div className="mr-1">
          <BiMessageRoundedDots />
        </div>
        <div>All messages</div>
      </div>
      {recentMessage && (
        <div className="flex justify-between py-3 px-2 hover:bg-white cursor-pointer items-center border-b-2 border-gray-300">
          <div className="flex items-center">
            <div className="bg-gray-400 w-10 h-10 rounded-full p-1 mr-2">
              <img src={logo512} alt="img" />
            </div>
            <div className="flex flex-col justify-between">
              <div className="text-sm font-bold">Nayo</div>
              <div className="text-xs">{recentMessage}</div>
            </div>
          </div>
          <div className="flex flex-col items-end justify-between">
            <div className="text-xs">2:18pm</div>
            <div className="bg-red-600 text-white font-medium w-4 h-4 rounded-full text-xs flex items-center justify-center">
              {mes.filter((ms) => ms.sender !== userId).length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chats;
