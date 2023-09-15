import React, { useContext } from "react";
import { useRecentUserInfo } from "../../../shared/hooks/useRecentUserInfo";
import { dateInfo } from "../../../shared/functions/dateInfo";
import { ChatContext } from "../../../contexts/ChatContext";

const Chat = ({ room }) => {
  const { recentUserInfo: recentChat } = useRecentUserInfo();
  const { handleOpenChat } = useContext(ChatContext);

  const handleViewChatMessages = () => {
    handleOpenChat(room);
  };
  return (
    <div onClick={handleViewChatMessages}>
      {recentChat && recentChat.user && (
        <div className="flex justify-between py-3 px-2 hover:bg-white cursor-pointer items-center border-b-2 border-gray-300">
          <div className="flex items-center">
            <div className="bg-gray-400 w-10 h-10 rounded-full overflow-hidden mr-2">
              <img src={recentChat?.user.profilePic} alt="img" />
            </div>
            <div className="flex flex-col justify-between">
              <div className="text-sm font-bold">
                {/* {recentChat?.user.name.length > 20
                  ? recentChat?.user.name.slice(0, 15) + "..."
                  : recentChat?.user.name} */}
                {room}
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

export default Chat;
