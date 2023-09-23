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

const MessageBoardNav = ({ setIsShow }) => {
  const { currentChatRoom, setCurrentChatRoom } = useContext(ChatContext);
  const [isOptionsModalVisible, setIsOptionsModalVisible] = useState(false);

  const showSideBar = () => {
    setIsShow(true);
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
          <div
            className="max-sm:block hidden mx-2 cursor-pointer"
            onClick={showSideBar}
          >
            <BsChevronDown />
          </div>
          <div className="bg-gray-400 w-10 h-10 rounded-full overflow-hidden mx-2">
            <img src={logo512} alt="img" />
          </div>
          <div className="flex flex-col justify-between">
            {currentChatRoom ? (
              <div className="text-sm font-bold" id="allow-edits">
                {currentChatRoom.name}
              </div>
            ) : (
              <div className="text-sm font-bold">Join a room</div>
            )}
            {currentChatRoom && (
              <div className="text-xs flex items-center gap-1 w-full overflow-hidden">
                <div>Members :</div>

                {/* <div>
                  {currentChatRoom?.members?.map(
                    (member) => member.email.slice(0, 10) + "... "
                  )}
                </div> */}
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
            <div className="flex items-center justify-between w-20">
              <HiOutlineDotsCircleHorizontal
                onClick={toggleOptionsModal}
                style={{ fontSize: "20px" }}
              />
              <Logout />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBoardNav;
