import React from "react";
import { ChatContext } from "../contexts/ChatContext";
import { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Message = () => {
  const { mes, userId } = useContext(ChatContext);
  const { user } = useAuth0();

  if (!userId) {
    return <div>Loading...</div>;
  }
  return (
    <div className="">
      {mes?.length > 0 && (
        <div>
          {mes?.map((msg, index) => {
            if (msg.senderId === userId) {
              return (
                <div
                  key={index}
                  className="flex flex-row-reverse items-center p-2 gap-2"
                >
                  <div className="bg-gray-400 w-10 h-10 rounded-full mr-1 object-fill overflow-hidden">
                    <img
                      className="w-full h-full"
                      src={user.picture}
                      alt="img"
                    />
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
                  <div className="bg-gray-400 w-10 h-10 rounded-full mr-2 overflow-hidden">
                    <img
                      className="w-full h-full"
                      src={msg?.sender.picture}
                      alt="img"
                    />
                  </div>
                  <div className="flex max-w-1/4 flex-col justify-between">
                    <div className="text-sm font-bold">{msg?.sender.name}</div>
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
