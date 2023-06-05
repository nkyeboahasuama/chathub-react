import React, {
  createContext,
  useRef,
  useEffect,
  useState,
  useCallback,
} from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const ChatContext = createContext();

const ChatContextProvider = (props) => {
  const { user, isAuthenticated } = useAuth0();
  const [mes, setMes] = useState([]);
  const [userId, setUserId] = useState(null);
  const socketRef = useRef(null);

  useEffect(() => {
    if (isAuthenticated) {
      socketRef.current = new WebSocket("ws://localhost:8000/ws/chat/");

      socketRef.current.onopen = () => {
        // const loggedInUser = { userKey: user.email };
        // socketRef.current.send(JSON.stringify(loggedInUser));
        console.log("Connected");
      };

      socketRef.current.onmessage = (event) => {
        let data = JSON.parse(event.data);
        // if (data.type === "initial_data") {
        // console.log("data is in");
        // } else
        if (data.type === "user_id") {
          console.log(data);
          setUserId(data.user_id);
        } else {
          console.log(data);
          setMes((prev) => [...prev, data]);
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

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      let inputValue = event.target.elements.message.value;
      const message = {
        message: inputValue,
        sender: user,
        senderId: userId,
      };
      socketRef.current.send(JSON.stringify(message));
      // console.log(message);
      console.log(userId);
    },
    [userId]
  );
  console.log(mes);

  return (
    isAuthenticated && (
      <ChatContext.Provider value={{ handleSubmit, userId, mes }}>
        {props.children}
      </ChatContext.Provider>
    )
  );
};

export default ChatContextProvider;
