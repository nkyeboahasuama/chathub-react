import React from "react";
import Message from "./Message";
import { useEffect, useRef, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { ChatContext } from "../../../contexts/ChatContext";

import DateInfo from "./Date";
import DisplayCard from "./DisplayCard";
import { handleRoomMateCheck } from "../../../shared/functions/groupMembershipCheck";
import { useUniqueDateMessages } from "../../../shared/hooks/useUniqueDateMessages";

const Messages = () => {
  const { currentChatRoom } = useContext(ChatContext);
  const { user } = useContext(AuthContext);
  const scrollRef = useRef();
  const { uniqueDates, roomMessages, messagesGroup } = useUniqueDateMessages();

  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [roomMessages]);

  if (!currentChatRoom) {
    return (
      <>
        {" "}
        <DisplayCard message={"Select room for messages"} />
      </>
    );
  }

  if (handleRoomMateCheck(currentChatRoom, user)) {
    if (currentChatRoom && roomMessages.length < 1) {
      return (
        <>
          <DisplayCard message={"Start a conversation"} />
        </>
      );
    }
  } else {
    const members = currentChatRoom.members.map((member) => member.email);
    console.log(members.includes(user.email));
    if (!members.includes(user.email)) {
      return (
        <>
          <DisplayCard message={"You are not a roommate"} />
        </>
      );
    }
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
