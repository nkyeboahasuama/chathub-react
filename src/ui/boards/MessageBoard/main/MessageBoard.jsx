import React from "react";
import Input from "../components/Input";
import MessageBoardNav from "../components/MessageBoardNav";
import Messages from "../components/Messages";
import { useState } from "react";
import ChatsModal from "../../../modals/ChatsModal";

const MessageBoard = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="flex relative justify-between flex-col flex-2 bg-emerald-300 max-sm:w-full">
      {isShow && <ChatsModal setIsShow={setIsShow} />}
      <MessageBoardNav setIsShow={setIsShow} />
      <Messages />
      <div className="h-14">
        <Input />
      </div>
    </div>
  );
};

export default MessageBoard;
