import React, { useContext, useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import {
  HiOutlineVideoCamera,
  HiOutlineDotsCircleHorizontal,
} from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import Logout from "../../../../auth/Logout";
import { ChatContext } from "../../../contexts/ChatContext";

import logo512 from "../../../shared/assets/logo512.png";
import GroupOptionsModal from "../../../modals/GroupOptionsModal";

const MessageBoardNav = ({ setIsShow, setShowRoomDetails }) => {
  const { currentChatRoom, setCurrentChatRoom, chatRooms } =
    useContext(ChatContext);
  const [isOptionsModalVisible, setIsOptionsModalVisible] = useState(false);
  const [roomMemberslength, setRoomMemberslength] = useState([]);

  useEffect(() => {
    if (chatRooms && currentChatRoom) {
      const updatedChatRoom = chatRooms.filter(
        (chatRoom) => chatRoom.id === currentChatRoom.id
      );
      const updatedChatRoomMembers = updatedChatRoom[0].members.length;
      setRoomMemberslength(updatedChatRoomMembers);
    }
  }, [currentChatRoom, chatRooms]);

  const showSideBar = () => {
    setIsShow(true);
  };

  const showRoomInfo = () => {
    if (!currentChatRoom) {
      return;
    }
    setShowRoomDetails(true);
  };

  const toggleOptionsModal = () => {
    setIsOptionsModalVisible((prev) => !prev);
  };

  const renderOptionsModal = () => {
    if (isOptionsModalVisible) {
      return (
        <GroupOptionsModal
          currentChatRoom={currentChatRoom}
          setCurrentChatRoom={setCurrentChatRoom}
          setIsOptionsModalVisible={setIsOptionsModalVisible}
        />
      );
    }
    return null;
  };

  return (
    <div>
      <div className="flex justify-between items-center px-3 w-full h-16 p-2 bg-white border-b-2 border-gray-300">
        <div className="flex items-center">
          <div className="bg-gray-400 w-10 h-10 rounded-full overflow-hidden mx-2">
            <img
              src={logo512}
              alt="img"
              onClick={showRoomInfo}
              className=" cursor-pointer"
            />
          </div>
          <div className="flex flex-col justify-between h-full ">
            <div className="text-md font-bold flex items-end " id="allow-edits">
              {currentChatRoom ? (
                <div>{currentChatRoom.name}</div>
              ) : (
                <div className="text-sm font-bold">Join rooms</div>
              )}
              <div
                className="max-sm:block hidden mx-2 cursor-pointer"
                onClick={showSideBar}
              >
                <BsChevronDown style={{ fontSize: "20px" }} />
              </div>
            </div>

            {currentChatRoom && (
              <div className="text-xs flex items-center gap-1 w-full overflow-hidden">
                <div>Members :</div>

                <div className="bg-slate-800 rounded-full text-white h-5 w-5 flex justify-center items-center font-semibold">
                  {roomMemberslength}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="text-lg cursor-pointer flex gap-3">
          <div className="flex gap-3 max-sm:hidden ">
            <HiOutlineVideoCamera />
            <IoCallOutline />
            <HiOutlineDotsCircleHorizontal onClick={toggleOptionsModal} />
          </div>
          {renderOptionsModal()}
          <div className="text-xs max-sm:block hidden hover:font-semibold">
            <Logout className="flex items-center justify-between w-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBoardNav;
