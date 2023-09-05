import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import useSubscription from "../hooks/useSubscription";

const Message = () => {
  const { user } = useAuth0();
  const { messages } = useSubscription();

  return (
    <div className="ml-2">
      {messages?.length >= 0 && (
        <div>
          {messages?.map((msg, index) => {
            if (msg.user.email === user.email) {
              return (
                <div key={index} className="flex flex-row-reverse p-2 gap-2">
                  <div className="bg-gray-400 w-10 h-10 rounded-full mr-1 object-fill overflow-hidden">
                    <img
                      className="w-full h-full"
                      src={msg.user.picture}
                      alt="img"
                    />
                  </div>
                  <div className="flex max-w-1/2 flex-col items-end">
                    <div className="text-sm font-bold">You</div>
                    <div className="text-xs bg-white p-2 rounded-xl rounded-tr-none break-all">
                      {msg.text}
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
                      src={msg.user.picture}
                      alt="img"
                    />
                  </div>
                  <div className="flex flex-col justify-between max-w-1/2">
                    <div className="text-sm font-bold">
                      {msg?.user.given_name}
                    </div>
                    <div className="text-xs bg-white p-2 flex rounded-xl break-all rounded-tl-none w-fit">
                      {msg.text}
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
