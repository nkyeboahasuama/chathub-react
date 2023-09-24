import React, { createContext, useEffect, useState } from "react";

export const ChatContext = createContext();

const ChatContextProvider = (props) => {
  const [currentChatRoom, setCurrentChatRoom] = useState(null);

  useEffect(() => {
    handleOpenChat();
  }, []);

  console.log(currentChatRoom);

  const handleOpenChat = (room) => {
    setCurrentChatRoom(room);
  };

  return (
    <ChatContext.Provider
      value={{ handleOpenChat, currentChatRoom, setCurrentChatRoom }}
    >
      {props.children}
    </ChatContext.Provider>
  );
};

export default ChatContextProvider;
