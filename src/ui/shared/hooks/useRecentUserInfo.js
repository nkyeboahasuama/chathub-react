import { useState, useEffect, useContext } from "react";
import useSubscription from "./useSubscription";
import { AuthContext } from "../../contexts/AuthContext";

export const useRecentUserInfo = () => {
  const [recentUserInfo, setRecentUserInfo] = useState([]);
  const { messages } = useSubscription();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const recentUser = () => {
      const filtered = messages.filter((dev) => dev.user.email !== user.email);
      const recentRecievedChat = filtered[filtered.length - 1];
      setRecentUserInfo(recentRecievedChat);
    };
    recentUser();
  }, [messages, user.email]);

  return { recentUserInfo };
};
