import React, { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const ChatContext = createContext();

const ChatContextProvider = (props) => {
  const [mes, setMes] = useState([]);
  const [userId, setUserId] = useState(null);
  let socket = new WebSocket("ws://localhost:8000/ws/chat/");

  useEffect(() => {
    socket.onopen = () => {
      console.log("Connected");
    };

    socket.onmessage = (event) => {
      let data = JSON.parse(event.data);
      if (data.type === "user_id") {
        setUserId(data.user_id);
      } else {
        setMes((prev) => [...prev, data]);
      }
    };

    return () => {
      socket.onclose = () => {
        console.log("closed");
      };
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    let inputValue = event.target.elements.message.value;
    const message = {
      message: inputValue,
      sender: userId,
    };
    socket.send(JSON.stringify(message));
  };

  return (
    <ChatContext.Provider value={{ handleSubmit, userId, mes }}>
      {props.children}
    </ChatContext.Provider>
  );
};

export default ChatContextProvider;
