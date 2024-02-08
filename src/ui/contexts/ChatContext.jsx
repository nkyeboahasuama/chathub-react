import React, { createContext, useEffect, useState } from "react";

export const ChatContext = createContext();

const ChatContextProvider = (props) => {
  const [currentChatRoom, setCurrentChatRoom] = useState(null);
  const [chatRooms, setChatRooms] = useState(null);

  useEffect(() => {
    handleOpenChat();
  }, []);

  const handleOpenChat = (room) => {
    setCurrentChatRoom(room);
  };

  return (
    <ChatContext.Provider
      value={{
        handleOpenChat,
        currentChatRoom,
        setCurrentChatRoom,
        setChatRooms,
        chatRooms,
      }}
    >
      {props.children}
    </ChatContext.Provider>
  );
};

export default ChatContextProvider;
