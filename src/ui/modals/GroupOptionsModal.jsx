import React, { useContext } from "react";
import { roomService } from "../../services/room.service";
import { messageService } from "../../services/message.service";
import { ChatContext } from "../contexts/ChatContext";
import { useUniqueDateMessages } from "../shared/hooks/useUniqueDateMessages";

const GroupOptionsModal = ({ setShowEditInput, setToggleOptionsModal }) => {
  const { currentChatRoom, setCurrentChatRoom } = useContext(ChatContext);

  const { roomMessages } = useUniqueDateMessages();

  const handleDeleteRoom = async () => {
    try {
      setCurrentChatRoom(null);
      if (roomMessages) {
        roomMessages.map((msg) => messageService.deleteMessage(msg.id));
      }
      await roomService.deleteRoom(currentChatRoom.id);
    } catch (error) {
      console.error(error);
    }
  };

  const performAction = (action) => {
    if (action === "Delete") {
      handleDeleteRoom();
    } else if (action === "Edit") {
      setShowEditInput(true);
    }
    setToggleOptionsModal(false);
  };

  return (
    <div>
      <div className="bg-green-400 rounded-xl rounded-tr-none absolute right-10 top-10 h-fit w-fit p-1">
        {["Delete", "Edit"].map((e, index) => (
          <div
            key={index}
            className={`p-1 ${
              index < 1 && "border-b-2 border-gray-600 "
            } hover:bg-green-800 hover:text-gray-100 font-semibold cursor-pointer`}
            onClick={() => performAction(e)}
          >
            {e}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupOptionsModal;
