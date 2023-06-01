import React from "react";

import Messages from "./Messages";
import Input from "./Input";
import MessageBoardNav from "./MessageBoardNav";

const MessageBoard = () => {
  return (
    <div className="flex relative justify-between flex-col flex-2 bg-emerald-300">
      <MessageBoardNav />
      <Messages />
      <div className="h-14">
        <Input />
      </div>
    </div>
  );
};

export default MessageBoard;
