import React, { useContext } from "react";
import { ChatContext } from "../../../contexts/ChatContext";
import { roomService } from "../../../../services/room.service";
import { AuthContext } from "../../../contexts/AuthContext";
import { handleRoomMateCheck } from "../../../shared/functions/groupMembershipCheck";

const Chat = ({ room }) => {
  const { handleOpenChat, currentChatRoom } = useContext(ChatContext);
  const { user } = useContext(AuthContext);

  const handleViewChatMessages = () => {
    handleOpenChat(room);
  };

  const joinNewRoom = async () => {
    try {
      await roomService.joinRoom(room, user);
    } catch (error) {
      console.error(error);
    }
  };

  const leaveRoom = async () => {
    try {
      await roomService.leaveRoom(room, user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div onClick={handleViewChatMessages}>
      <div
        className={`flex justify-between py-3 px-2   ${
          currentChatRoom === room
            ? "bg-green-300 "
            : "bg-green-200 hover:bg-green-100"
        } cursor-pointer items-center border-b-2 border-gray-300`}
      >
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

        {handleRoomMateCheck(room, user) ? (
          <div
            className="bg-red-600 text-white font-medium w-fit h-fit p-1 cursor-pointer text-xs flex items-center justify-center"
            onClick={leaveRoom}
          >
            Leave
          </div>
        ) : (
          <div
            className="bg-red-600 text-white font-medium w-fit h-fit p-1 cursor-pointer text-xs flex items-center justify-center"
            onClick={joinNewRoom}
          >
            Join
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
