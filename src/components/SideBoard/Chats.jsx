import React, { useEffect, useState } from "react";
import { BiMessageRoundedDots } from "react-icons/bi";
import useSubscription from "../hooks/useSubscription";
import { useAuth0 } from "@auth0/auth0-react";
import { dateInfo } from "../functions/dateInfo";

const Chats = () => {
  const [recentChat, setRecentChat] = useState([]);
  const { user } = useAuth0();
  const { messages } = useSubscription();

  useEffect(() => {
    const recentUser = () => {
      const filtered = messages.filter((dev) => dev.user.email !== user.email);
      const recentRecievedChat = filtered[filtered.length - 1];
      setRecentChat(recentRecievedChat);
    };
    recentUser();
  }, [messages]);

  return (
    <div>
      <div className="text-xs p-6 flex border-b-2 border-gray-300 text-sky-600 font-semibold">
        <div className="mr-1">
          <BiMessageRoundedDots />
        </div>
        <div>All messages</div>
      </div>
      {recentChat && recentChat.user && (
        <div className="flex justify-between py-3 px-2 hover:bg-white cursor-pointer items-center border-b-2 border-gray-300">
          <div className="flex items-center">
            <div className="bg-gray-400 w-10 h-10 rounded-full overflow-hidden mr-2">
              <img src={recentChat?.user.picture} alt="img" />
            </div>
            <div className="flex flex-col justify-between">
              <div className="text-sm font-bold">
                {recentChat?.user.name.length > 20
                  ? recentChat?.user.name.slice(0, 15) + "..."
                  : recentChat?.user.name}
              </div>
              <div className="text-xs">{recentChat?.text}</div>
            </div>
          </div>
          <div className="flex flex-col items-end justify-between">
            <div className="text-xs">
              {/* {userObj?.time.hour}:{userObj?.time.minute} */}
              {/* {info.createdAt} */}
              {dateInfo.getTime(recentChat)}
            </div>
            <div className="bg-red-600 text-white font-medium w-4 h-4 rounded-full text-xs flex items-center justify-center">
              {/* {messages.length} */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chats;
