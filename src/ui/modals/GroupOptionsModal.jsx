import React, { useContext } from "react";
import { roomService } from "../../services/room.service";
import { ChatContext } from "../contexts/ChatContext";

const GroupOptionsModal = ({
  currentChatRoom,
  setCurrentChatRoom,
  setIsOptionsModalVisible,
}) => {
  // const {setCurrentChatRoom} = useContext(ChatContext)

  const handleDeleteRoom = async () => {
    try {
      setCurrentChatRoom(null);
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
