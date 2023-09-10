import React, { useEffect, useRef, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import useSubscription from "../hooks/useSubscription";
import { dateInfo } from "../functions/dateInfo";
import DateInfo from "./Date";

const Message = () => {
  const { user } = useAuth0();
  const { messages } = useSubscription();
  const [filtered, setFiltered] = useState(null);

  // const scrollDown = useRef();

  // useEffect(() => {
  //   scrollDown.current.scrollIntoView({ behavior: "smooth" });
  // }, [messages]);

  // messages.map((e) => {
  //   if (e.createdAt === messages[e.length].createdAt) {
  //     console.log(e);
  //     return e;
  //   }
  // });

  const messagesGroup = {};

  messages.forEach((e) => {
    const messageDates = dateInfo.getDate(e);
    if (!messagesGroup[messageDates]) {
      messagesGroup[messageDates] = [];
    }
    messagesGroup[messageDates].push(e);
  });

  console.log(messagesGroup);
  useEffect(() => {
    function getDayForMessages() {
      const newArray = messages.map((e) => dateInfo.getDate(e));
      const uniqueSet = new Set(newArray);
      const uniqueArray = [...uniqueSet];
      setFiltered(uniqueArray);
    }
    getDayForMessages();
  }, [messages]);

  return (
    <div>
      {filtered?.map((date) => (
        <div>
          <div>
            <DateInfo date={date} />
          </div>
          <div>
            {messagesGroup[date]?.map((msg, index) => {
              if (msg?.user?.email === user.email) {
                return (
                  <div key={index} className="flex flex-row-reverse p-2 gap-2">
                    <div className="bg-gray-400 w-10 h-10 rounded-full mr-1 object-fill overflow-hidden">
                      <img
                        className="w-full h-full"
                        src={msg?.user?.picture}
                        alt="img"
                      />
                    </div>
                    <div className="flex max-w-1/2 flex-col items-end">
                      <div className="text-sm font-bold">You</div>
                      <div className="flex text-sm bg-white p-2 rounded-xl rounded-tr-none break-all">
                        {msg?.text}
                      </div>
                      <div className="flex bg-gray-500 font-medium rounded-lg px-1 h-5 text-white items-center w-fit">
                        <div className="text-[10px]">
                          {dateInfo.getTime(msg)}
                        </div>
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
                        src={msg?.user?.picture}
                        alt="img"
                      />
                    </div>
                    <div className="flex flex-col justify-between max-w-1/2">
                      <div className="text-sm font-bold">
                        {msg?.user?.given_name}
                      </div>
                      <div className="text-sm bg-white p-2 flex flex-col rounded-xl break-all rounded-tl-none w-fit">
                        {msg?.text}
                      </div>
                      <div className="flex bg-gray-500 font-medium rounded-lg px-1 h-5 text-white items-center w-fit">
                        <div className="text-[10px]">
                          {dateInfo.getTime(msg)}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Message;
