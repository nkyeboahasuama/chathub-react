import { useContext, useEffect, useState } from "react";
import { db } from "../../../config/firebase";

import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { ChatContext } from "../../contexts/ChatContext";

const useSubscription = (room) => {
  const [messages, setMessages] = useState([]);
  const { currentChatRoom } = useContext(ChatContext);

  useEffect(() => {
    const messagesRef = collection(db, "messages");
    const docQuery = query(messagesRef, orderBy("createdAt", "asc"));

    const unsubscribe = onSnapshot(
      docQuery,
      (snapshot) => {
        let messagesArray = [];
        snapshot.forEach((doc) => {
          messagesArray.push({ ...doc.data(), id: doc.id });
        });

        let filteredMessages = messagesArray;
        if (room) {
          filteredMessages = messagesArray.filter((m) => m.room === room);

          setMessages(filteredMessages);
        }
      },
      (error) => {
        console.error(error);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [currentChatRoom, room]);

  return { messages };
};

export default useSubscription;
