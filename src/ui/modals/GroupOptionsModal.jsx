import React from "react";
import { roomService } from "../../services/room.service";
import { messageService } from "../../services/message.service";

const GroupOptionsModal = ({
  currentChatRoom,
  setCurrentChatRoom,
  roomMessages,
}) => {
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
  return (
    <div>
      <div
        className="bg-gray-400 absolute right-10 top-10 h-fit w-fit"
        // onClick={() => setIsOptionsModalVisible(false)}
      >
        <option>Add</option>
        <hr />
        <option onClick={handleDeleteRoom}>Delete</option>
        <hr />
        <option>Edit</option>
      </div>
    </div>
  );
};

export default GroupOptionsModal;
