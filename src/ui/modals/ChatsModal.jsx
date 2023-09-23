import React, { useContext, useState } from "react";
import NavBar from "../boards/SideBoard/components/ChatsNavbar";
import { BiMessageRoundedDots } from "react-icons/bi";

import ModalChatRooms from "./ModalChatRooms";
import useSubscription from "../shared/hooks/useSubscribeToRepo";
import NewGroup from "../boards/SideBoard/components/NewGroup";

const ChatsModal = ({ setIsShow }) => {
  const { data: rooms } = useSubscription("rooms");

  const closeChatsModal = () => {
    setIsShow(false);
  };
  return (
    <div className="bg-white max-h-fit w-full absolute top-0 left-0 z-10 opacity-95">
      <div className="flex justify-end bg-zinc-900">
        <div
          className="bg-red-600 text-white p-1 m-2 cursor-pointer"
          onClick={closeChatsModal}
        >
          Close
        </div>
      </div>
      <NavBar />

      <div>
        <div className="text-xs p-6 flex border-b-2 border-gray-300 text-sky-600 font-semibold">
          <div className="mr-1">
            <BiMessageRoundedDots />
          </div>
          <div>All messages</div>
        </div>
        {rooms ? (
          rooms.map((room) => (
            <ModalChatRooms setIsShow={setIsShow} room={room} key={room.id} />
          ))
        ) : (
          <div>Loading...</div>
        )}
        <NewGroup />{" "}
      </div>
    </div>
  );
};

export default ChatsModal;
