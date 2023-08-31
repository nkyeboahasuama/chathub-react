import React from "react";
import Message from "./Message";

const Messages = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    month: "long",
    weekday: "long",
    day: "numeric",
  });
  return (
    <div className="flex flex-col overflow-y-scroll">
      <div className="w-full flex justify-center">
        <div className="bg-white text-xs font-bold w-fit p-1 flex justify-center items-center rounded-lg text-center my-4">
          {formattedDate}
        </div>
      </div>
      <div className="px-2 flex flex-col gap-5 max-w-full">
        <Message />
      </div>
    </div>
  );
};

export default Messages;
