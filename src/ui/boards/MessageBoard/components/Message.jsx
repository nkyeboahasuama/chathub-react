import React from "react";

import { dateInfo } from "../../../shared/functions/dateInfo";

const Message = ({ message, currentUser }) => {
  const isCurrentUser = message.user.email === currentUser.email;

  return (
    <div
      className={`flex ${
        isCurrentUser ? "flex-row-reverse" : "items-center"
      } p-2`}
    >
      <div className="bg-gray-400 w-10 h-10 rounded-full mr-2 overflow-hidden">
        <img
          className="w-full h-full"
          src={message.user.profilePic}
          alt="img"
        />
      </div>
      <div
        className={`flex flex-col ${
          isCurrentUser ? "items-end" : "justify-between"
        } max-w-1/2`}
      >
        <div className="text-sm font-bold">
          {isCurrentUser ? "You" : message.user.name}
        </div>
        <div
          className={`text-sm bg-white p-2 flex flex-col rounded-xl ${
            isCurrentUser ? "rounded-tr-none" : "rounded-tl-none"
          } break-all w-fit`}
        >
          {message.text}
        </div>
        <div className="flex bg-gray-500 font-medium rounded-lg px-1 h-5 text-white items-center w-fit">
          <div className="text-[10px]">{dateInfo.getTime(message)}</div>
        </div>
      </div>
    </div>
  );
};

export default Message;
