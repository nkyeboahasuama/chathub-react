import { useContext, useEffect, useState } from "react";
import { db } from "../../../config/firebase";

import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { ChatContext } from "../../contexts/ChatContext";

const useSubscription = (repo) => {
  const [data, setData] = useState([]);
  const { setChatRooms } = useContext(ChatContext);

  useEffect(() => {
    const collectionRef = collection(db, repo);
    const docQuery = query(collectionRef, orderBy("createdAt", "asc"));

    const unsubscribe = onSnapshot(
      docQuery,
      (snapshot) => {
        const messagesArray = [];
        snapshot.forEach((doc) => {
          messagesArray.push({ ...doc.data(), id: doc.id });
        });
        if (repo === "rooms") {
          setChatRooms(messagesArray);
        }

        setData(messagesArray);
      },
      (error) => {
        throw new Error(error);
      }
    );
    return () => {
      unsubscribe();
    };
  }, [repo, setChatRooms]);

  return { data };
};

export default useSubscription;
