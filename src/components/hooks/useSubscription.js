import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";

const useSubscription = (sort) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const messagesRef = collection(db, "messages");
    const docQuery = query(messagesRef, orderBy("createdAt", "asc"));

    const unsubscribe = onSnapshot(docQuery, (snapshot) => {
      let messagesArray = [];
      snapshot.forEach((doc) => {
        messagesArray.push({ ...doc.data(), id: doc.id });
      });

      let filteredMessages = messagesArray;
      if (sort) {
        filteredMessages = messagesArray.filter(sort);
      }

      setMessages(filteredMessages);
    });

    return () => {
      unsubscribe();
    };
  }, [sort]);

  return { messages };
};

export default useSubscription;
