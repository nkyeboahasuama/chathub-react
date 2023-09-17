import React, { createContext, useEffect, useState } from "react";

export const ChatContext = createContext();

const ChatContextProvider = (props) => {
  const [currentChatRoom, setCurrentChatRoom] = useState([]);

  useEffect(() => {
    handleOpenChat();
  }, []);

  console.log(currentChatRoom);
  const handleOpenChat = (room) => {
    setCurrentChatRoom(room);
  };

  return (
    <ChatContext.Provider value={{ handleOpenChat, currentChatRoom }}>
      {props.children}
    </ChatContext.Provider>
  );
};

export default ChatContextProvider;
