import React, { createContext, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase";

export const ChatContext = createContext();

const ChatContextProvider = (props) => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <ChatContext.Provider>{props.children}</ChatContext.Provider>
    )
  );
};

export default ChatContextProvider;
