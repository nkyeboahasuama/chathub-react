import { useEffect, useState } from "react";
import { db } from "../../../config/firebase";

import { collection, query, onSnapshot, orderBy } from "firebase/firestore";

const useSubscription = (repo) => {
  const [data, setData] = useState([]);

  // console.log(data);

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

        setData(messagesArray);
      },
      (error) => {
        throw new Error(error);
      }
    );
    return () => {
      unsubscribe();
    };
  }, [repo]);

  return { data };
};

export default useSubscription;
