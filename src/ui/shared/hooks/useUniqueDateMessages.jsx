import { useState, useEffect, useContext } from "react";
import useSubscription from "./useSubscribeToRepo";
import { ChatContext } from "../../contexts/ChatContext";
import { dateInfo } from "../functions/dateInfo";

export const useUniqueDateMessages = () => {
  const [roomMessages, setRoomMessages] = useState([]);
  const { data: messages } = useSubscription("messages");
  const { currentChatRoom } = useContext(ChatContext);

  useEffect(() => {
    const roomMessagesFnc = () => {
      if (currentChatRoom) {
        const msg = messages.filter(
          (message) => message.room.id === String(currentChatRoom.id)
        );
        setRoomMessages(msg);
      } else {
        setRoomMessages([]);
      }
    };
    roomMessagesFnc();
  }, [messages, currentChatRoom]);

  const messagesGroup = roomMessages.reduce((grouped, message) => {
    const messageDates = dateInfo.getDate(message);
    if (!grouped[messageDates]) {
      grouped[messageDates] = [];
    }
    grouped[messageDates].push(message);
    return grouped;
  }, {});

  const uniqueDates = [
    ...new Set(roomMessages.map((e) => dateInfo.getDate(e))),
  ];
  return { uniqueDates, roomMessages, messagesGroup };
};
