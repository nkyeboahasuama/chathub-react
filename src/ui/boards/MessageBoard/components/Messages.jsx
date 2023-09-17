import React, { useState } from "react";
import Message from "./Message";
import { useEffect, useRef, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { ChatContext } from "../../../contexts/ChatContext";
import { dateInfo } from "../../../shared/functions/dateInfo";
import DateInfo from "./Date";
import useSubscription from "../../../shared/hooks/useSubscribeToRepo";

const Messages = () => {
  const { currentChatRoom } = useContext(ChatContext);
  const { data: messages } = useSubscription("messages");
  const { user } = useContext(AuthContext);
  const scrollRef = useRef();
  const [roomMessages, setRoomMessages] = useState([]);

  useEffect(() => {
    const roomMessagesFnc = () => {
      if (currentChatRoom) {
        const msg = messages.filter(
          (message) => message.room.id === String(currentChatRoom.id)
        );
        setRoomMessages(msg);
      } else {
        setRoomMessages([]);
      }
    };
    roomMessagesFnc();
  }, [messages, currentChatRoom]);

  const messagesGroup = roomMessages.reduce((grouped, message) => {
    const messageDates = dateInfo.getDate(message);
    if (!grouped[messageDates]) {
      grouped[messageDates] = [];
    }
    grouped[messageDates].push(message);
    return grouped;
  }, {});

  const uniqueDates = [
    ...new Set(roomMessages.map((e) => dateInfo.getDate(e))),
  ];

  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!currentChatRoom) {
    return <>Loading...</>;
  }
  return (
    <>
      <div className="flex flex-col overflow-y-scroll">
        <div className="flex flex-col gap-5 max-w-full">
          {uniqueDates.map((date) => (
            <div key={date}>
              <div>
                <DateInfo date={date} />
              </div>
              <div>
                {messagesGroup[date].map((msg) => (
                  <Message key={msg.id} message={msg} currentUser={user} />
                ))}
              </div>
            </div>
          ))}
          <div ref={scrollRef}></div>
        </div>
      </div>
    </>
  );
};

export default Messages;
