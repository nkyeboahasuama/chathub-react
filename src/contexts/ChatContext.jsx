import React, { createContext, useRef, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const ChatContext = createContext();

const ChatContextProvider = (props) => {
  const { user, isAuthenticated } = useAuth0();
  const [message, setMessage] = useState([]);
  const [userId, setUserId] = useState(null);
  const socketRef = useRef(null);
  const currentDate = new Date();
  const hour = currentDate.getHours();
  const minute = currentDate.getMinutes();

  useEffect(() => {
    if (isAuthenticated) {
      socketRef.current = new WebSocket("ws://localhost:8000/ws/chat/");

      socketRef.current.onopen = () => {
        console.log("Connected");
      };

      socketRef.current.onmessage = (event) => {
        let data = JSON.parse(event.data);

        if (data.type === "user_id") {
          setUserId(data.user_id);
        } else {
          setMessage((prev) => [...prev, data]);
        }
      };

      socketRef.current.onclose = () => {
        console.log("closing");
      };
    }

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, [isAuthenticated, user]);

  // console.log(userId);

  const handleSubmit = (event) => {
    event.preventDefault();
    let inputValue = event.target.elements.message.value;
    const time = { hour: hour, minute: minute };
    const message = {
      message: inputValue,
      sender: user,
      senderId: userId,
      time: time,
    };
    socketRef.current.send(JSON.stringify(message));
    // console.log(userId);
  };
  // console.log(message);

  return (
    isAuthenticated && (
      <ChatContext.Provider value={{ handleSubmit, userId, message }}>
        {props.children}
      </ChatContext.Provider>
    )
  );
};

export default ChatContextProvider;
