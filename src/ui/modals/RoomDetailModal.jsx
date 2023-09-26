import React, { useContext } from "react";
import logo512 from "../../ui/shared/assets/logo512.png";
import { MdKeyboardArrowUp, MdArrowBackIosNew } from "react-icons/md";
import { ChatContext } from "../contexts/ChatContext";

const RoomDetailModal = ({ setShowRoomDetails }) => {
  const { currentChatRoom } = useContext(ChatContext);

  const roommates = currentChatRoom?.members?.map((member) => member);
  return (
    <>
      {currentChatRoom && (
        <div className="absolute top-0 h-3/4 bg-slate-800 flex flex-col  justify-between text-white w-full">
          <div className="h-1/2  border-b-4 border-black flex flex-col justify-between">
            <div
              className="flex justify-start items-center  text-black h-16 "
              onClick={() => setShowRoomDetails(false)}
            >
              <MdKeyboardArrowUp
                className="mx-5 bg-white rounded-full"
                style={{ fontSize: "30px" }}
              />
            </div>
            <div className=" w-full h-3/4 flex py-5 flex-col items-center justify-center  text-center">
              <img
                src={logo512}
                alt="img"
                className="h-32 w-32 rounded-full border-2 border-gray-400 "
              />
              <h1 className="text-2xl font-bold">{currentChatRoom.name}</h1>
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
    </>
  );
};

export default RoomDetailModal;
