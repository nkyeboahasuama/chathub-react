import React from "react";
import Input from "../components/Input";
import MessageBoardNav from "../components/MessageBoardNav";
import Messages from "../components/MessagesContainer";

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
