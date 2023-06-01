import React from "react";
import SenderMessage from "./SenderMessage";
import RecieverMessage from "./RecieverMessage";

const Messages = () => {
  return (
    <div className="flex flex-col overflow-y-scroll">
      <div className="w-full flex justify-center">
        <div className="bg-white text-xs font-bold w-fit p-1 flex justify-center items-center rounded-lg text-center my-4">
          Today, June 1
        </div>
      </div>
      <div className="px-2 flex flex-col gap-5 max-w-full">
        <SenderMessage />
        <RecieverMessage />
        <SenderMessage />
        <RecieverMessage />
        <SenderMessage />
        <SenderMessage />
        <SenderMessage />
        <RecieverMessage />
        <SenderMessage />
        <RecieverMessage />
        <SenderMessage />
        <RecieverMessage />
        <SenderMessage />
        <RecieverMessage />
      </div>
    </div>
  );
};

export default Messages;
