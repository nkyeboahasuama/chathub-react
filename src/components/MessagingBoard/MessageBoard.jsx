import React from "react";
import Messages from "./MessagesContainer";
import Input from "./Input";
import MessageBoardNav from "./MessageBoardNav";

const MessageBoard = ({ setIsShow }) => {
  return (
    <div className="flex relative justify-between flex-col flex-2 bg-emerald-300 max-sm:w-full">
      <MessageBoardNav setIsShow={setIsShow} />
      <Messages />
      <div className="h-14">
        <Input />
      </div>
    </div>
  );
};

export default MessageBoard;
