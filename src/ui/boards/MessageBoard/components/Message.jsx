import React from "react";

import { dateInfo } from "../../../shared/functions/dateInfo";
import { AiFillDelete } from "react-icons/ai";
import { messageService } from "../../../../services/message.service";

const Message = ({ message, currentUser }) => {
  const isCurrentUser = message.sender.email === currentUser.email;

  const handleMessageDelete = () => {
    messageService.deleteMessage(message.id);
  };

  return (
    <div
      className={`flex ${
        isCurrentUser ? "flex-row-reverse" : "items-center"
      } p-2`}
    >
      <div className="bg-gray-400 w-10 h-10 rounded-full mr-2 overflow-hidden">
        <img
          className="w-full h-full"
          src={message.sender.profilePic}
          alt="img"
        />
      </div>
      <div
        className={`flex flex-col ${
          isCurrentUser ? "items-end" : "justify-between"
        } max-w-1/2`}
      >
        <div className="text-sm font-bold">
          {isCurrentUser ? "You" : message.sender.name}
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
          <div className="cursor-pointer">
            <AiFillDelete
              style={{ color: "red" }}
              onClick={handleMessageDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
