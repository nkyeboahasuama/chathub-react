// import { useState, useEffect, useContext } from "react";
// import useSubscription from "./useSubscription";
// import { AuthContext } from "../../contexts/AuthContext";
// import { ChatContext } from "../../contexts/ChatContext";

// export const recentUserInfo = () => {
//   const [recentUserInfo, setRecentUserInfo] = useState([]);
//   // const { currentChatRoom } = useContext(ChatContext);
//   const { data: messages } = useSubscription("messages");
//   const { user } = useContext(AuthContext);

//   console.log("1");

//   useEffect(() => {
//     const recentUser = () => {
//       const filtered = messages.filter((dev) => dev.user.email !== user.email);
//       const recentRecievedChat = filtered[filtered.length - 1];
//       if (filtered) {
//         setRecentUserInfo(recentRecievedChat);
//       } else {
//         setRecentUserInfo([]);
//       }
//     };
//     recentUser();
//   }, []);
// console.log(messages);

//   return { recentUserInfo };
// };
