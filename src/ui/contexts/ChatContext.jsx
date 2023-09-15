import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export const ChatContext = createContext();

const ChatContextProvider = (props) => {
  const { user } = useContext(AuthContext);
  const [currentChatRoom, setCurrentChatRoom] = useState(null);

  useEffect(() => {
    handleOpenChat();
  }, []);

  const handleOpenChat = (room) => {
    setCurrentChatRoom(room);
  };

  return (
    user && (
      <ChatContext.Provider value={{ handleOpenChat, currentChatRoom }}>
        {props.children}
      </ChatContext.Provider>
    )
  );
};

export default ChatContextProvider;
