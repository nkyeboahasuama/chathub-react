import React, { useContext, useRef, useState } from "react";
import logo512 from "../../ui/shared/assets/logo512.png";
import { MdKeyboardArrowUp } from "react-icons/md";
import { ChatContext } from "../contexts/ChatContext";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import GroupOptionsModal from "./GroupOptionsModal";

import { roomService } from "../../services/room.service";

const RoomDetailModal = ({ setShowRoomDetails }) => {
  const { currentChatRoom, setCurrentChatRoom } = useContext(ChatContext);
  const [toggleOptionsModal, setToggleOptionsModal] = useState(false);
  const [showEditInput, setShowEditInput] = useState(false);
  const editRoomNameInputRef = useRef(null);

  const roommates = currentChatRoom?.members?.map((member) => member);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newName = editRoomNameInputRef.current.value;
    roomService.editRoom(currentChatRoom.id, newName);
    const updatedChatRoom = { ...currentChatRoom, name: newName };
    setCurrentChatRoom(updatedChatRoom);
    setShowEditInput(false);
  };

  return (
    <>
      {currentChatRoom && (
        <div className="absolute top-0 h-full bg-slate-800 flex flex-col  justify-between text-white w-full">
          <div className="h-1/2  border-b-4 border-black flex flex-col justify-between">
            <div className="flex justify-between mx-5 items-center  text-black h-16">
              <MdKeyboardArrowUp
                onClick={() => setShowRoomDetails(false)}
                className=" bg-white rounded-full cursor-pointer"
                style={{ fontSize: "30px" }}
              />
              <div>
                <HiOutlineDotsCircleHorizontal
                  onClick={() => setToggleOptionsModal((prev) => !prev)}
                  className="bg-white rounded-full cursor-pointer"
                  style={{ fontSize: "30px" }}
                />
              </div>
            </div>
            <div className=" w-full h-3/4 flex py-5 flex-col items-center justify-center  text-center">
              <img
                src={logo512}
                alt="img"
                className="h-32 w-32 rounded-full border-2 border-gray-400 "
              />
              <div className="flex flex-col items-center justify-between ">
                <h1 className="text-2xl p-0 font-bold">
                  {currentChatRoom.name}
                </h1>
                <div>
                  {showEditInput && (
                    <form onSubmit={handleSubmit}>
                      <input
                        className="text-black font-semibold px-2 py-1 rounded-lg"
                        type="text"
                        placeholder="New Name"
                        // value={currentChatRoom.name}
                        ref={editRoomNameInputRef}
                      />
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className=" py-3 h-1/2 overflow-auto">
            <div className="px-5 pb-3">
              <h1 className="text-xl pb-3 font-semibold">Roommates</h1>
              <div className=" ">
                {roommates.map((member) => (
                  <div
                    className="border-b-2 py-2 border-white"
                    key={member.email}
                  >
                    {member.name} - {member.email}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {toggleOptionsModal && (
        <GroupOptionsModal
          setShowEditInput={setShowEditInput}
          setToggleOptionsModal={setToggleOptionsModal}
        />
      )}
    </>
  );
};

export default RoomDetailModal;
