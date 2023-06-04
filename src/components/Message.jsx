import React, { useEffect, useState } from "react";
import logo512 from "../images/logo512.png";
import { ChatContext } from "../contexts/ChatContext";
import { useContext } from "react";
import profileImg from "../images/profileImg.jpg";

const Message = () => {
  const { mes, userId } = useContext(ChatContext);

  if (!userId) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {mes?.length > 0 && (
        <div>
          {mes?.map((msg, index) => {
            if (msg.sender === userId) {
              return (
                <div
                  key={index}
                  className="flex flex-row-reverse items-center p-2 gap-2"
                >
                  <div className="bg-gray-400 w-10 h-10 rounded-full mr-2 object-fill overflow-hidden">
                    <img className="w-full h-full" src={profileImg} alt="img" />
                  </div>
                  <div className="flex max-w-1/4 flex-col justify-between">
                    <div className="text-sm font-bold">You</div>
                    <div className="text-xs bg-white p-2 rounded-xl rounded-tr-none w-fit">
                      {msg.message}
                      {/* {msg.sender} */}
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div key={index} className="flex items-center p-2">
                  <div className="bg-gray-400 w-10 h-10 rounded-full mr-2">
                    <img src={logo512} alt="img" />
                  </div>
                  <div className="flex max-w-1/4 flex-col justify-between">
                    <div className="text-sm font-bold">Nayo</div>
                    <div className="text-xs bg-white p-2 rounded-xl rounded-tl-none w-fit">
                      {msg.message}
                      {/* {msg.sender} */}
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

export default Message;
