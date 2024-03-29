import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ChatContext } from "../contexts/ChatContext";
import { roomService } from "../../services/room.service";
import { handleRoomMateCheck } from "../shared/functions/groupMembershipCheck";

const ChatRoomModal = ({ room, setIsShow, currentChatRoom }) => {
  const { handleOpenChat, setCurrentChatRoom } = useContext(ChatContext);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleViewChatMessages = () => {
    handleOpenChat(room);
    setIsShow(false);
  };

  const joinNewRoom = async () => {
    try {
      setLoading(true);
      await roomService.joinRoom(room, user);
      setCurrentChatRoom({ ...room, members: [...room.members, user] });
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const leaveRoom = async () => {
    try {
      await roomService.leaveRoom(room, user);
      setCurrentChatRoom(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className={`flex justify-between py-3 px-2  ${
        currentChatRoom?.id === room?.id
          ? "bg-green-500 "
          : "bg-green-200 hover:bg-green-100"
      } cursor-pointer items-center border-b-2 border-gray-300`}
    >
      <div onClick={handleViewChatMessages} className="w-4/5">
        <div className="flex items-center">
          <div className="bg-gray-400 w-10 h-10 rounded-full overflow-hidden mr-2">
            <img src={room?.creator?.profilePic} alt="img" />
          </div>
          <div className="flex flex-col justify-between">
            <div className="text-sm font-bold">{room.name}</div>
            {/* <div className="text-xs">{dateInfo.getDate(room)}</div> */}
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div className="text-xs"></div>
        </div>
      </div>
      <div className="w-10">
        {handleRoomMateCheck(room, user) ? (
          <div
            className={`${
              loading ? "bg-yellow-600" : "bg-red-600"
            } text-white font-medium w-10 h-fit p-1 cursor-pointer text-xs flex items-center justify-center`}
            onClick={leaveRoom}
          >
            {loading ? "Wait" : "Leave"}
          </div>
        ) : (
          <div
            className="bg-green-900 text-white font-medium w-fit h-fit p-1 cursor-pointer text-xs flex items-center justify-center"
            onClick={joinNewRoom}
          >
            Join
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatRoomModal;
