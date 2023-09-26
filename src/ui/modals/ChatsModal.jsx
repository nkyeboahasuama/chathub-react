import React, { useContext } from "react";
import NavBar from "../boards/SideBoard/components/ChatsNavbar";
import { BiMessageRoundedDots } from "react-icons/bi";

import ModalChatRooms from "./ModalChatRooms";
import NewGroup from "../boards/SideBoard/components/NewGroup";
import useSubscription from "../shared/hooks/useSubscribeToRepo";
import { ChatContext } from "../contexts/ChatContext";
import { MdKeyboardArrowUp } from "react-icons/md";

const ChatsModal = ({ setIsShow }) => {
  const { data: rooms } = useSubscription("rooms");
  const { currentChatRoom } = useContext(ChatContext);

  const closeChatsModal = () => {
    setIsShow(false);
  };
  return (
    <div className="bg-white h-fit w-full absolute top-0 left-0 z-10 opacity-95">
      {/* <div className="flex justify-end bg-zinc-900">
        <div
          className="bg-red-600 text-white p-1 m-2 cursor-pointer"
          onClick={closeChatsModal}
        >
          Close
        </div>
      </div> */}
      <NavBar />

      {/* <div> */}
      <div className="text-xs p-6 flex border-b-2 border-gray-300 text-sky-600 font-semibold">
        <div className="mr-1">
          <BiMessageRoundedDots />
        </div>
        <div>All rooms</div>
      </div>
      {rooms ? (
        rooms.map((room) => (
          <ModalChatRooms
            setIsShow={setIsShow}
            room={room}
            key={room.id}
            currentChatRoom={currentChatRoom}
          />
        ))
      ) : (
        <div>Loading...</div>
      )}
      <div className="flex flex-col items-center justify-center">
        <div className="w-full">
          <NewGroup />
        </div>
        <MdKeyboardArrowUp
          onClick={closeChatsModal}
          style={{
            fontSize: "30px",
            margin: "10px 0px 0px 0px",
            cursor: "pointer",
          }}
        />
      </div>
    </div>
    // </div>
  );
};

export default ChatsModal;
