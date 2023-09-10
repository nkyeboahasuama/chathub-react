import React, { createContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const ChatContext = createContext();

const ChatContextProvider = (props) => {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <ChatContext.Provider>{props.children}</ChatContext.Provider>
    )
  );
};

export default ChatContextProvider;
