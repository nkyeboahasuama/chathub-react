import logo512 from "../../../shared/assets/logo512.png";
import {
  HiOutlineDotsCircleHorizontal,
  HiOutlineVideoCamera,
} from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import React from "react";
import Logout from "../../../../auth/Logout";
import { useRecentUserInfo } from "../../../shared/hooks/useRecentUserInfo";

const MessageBoardNav = ({ setIsShow }) => {
  const { recentUserInfo: senderInfo } = useRecentUserInfo();

  const showSideBar = () => {
    setIsShow(true);
  };

  return (
    <div>
      <div className="flex justify-between items-center px-3 w-full h-16 p-2 bg-white border-b-2 border-gray-300">
        <div className="flex items-center">
          <div
            className="max-sm:block hidden cursor-pointer"
            onClick={showSideBar}
          >
            @
          </div>
          <div className="bg-gray-400 w-10 h-10 rounded-full overflow-hidden mx-2">
            {senderInfo ? (
              <img src={senderInfo?.user?.profilePic} alt="img" />
            ) : (
              <img src={logo512} alt="img" />
            )}
          </div>
          <div className="flex flex-col justify-between">
            {senderInfo ? (
              <div className="text-sm font-bold">{senderInfo?.user?.name}</div>
            ) : (
              <div className="text-sm font-bold">Connect User</div>
            )}
            <div className="text-xs flex items-center gap-1 ">
              <div>Online</div>
              <div className="bg-green-600 w-2 h-2 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="text-lg cursor-pointer flex gap-3">
          <div className="flex gap-3 max-sm:hidden ">
            <HiOutlineVideoCamera />
            <IoCallOutline />
            <HiOutlineDotsCircleHorizontal />
          </div>
          <div className="text-xs max-sm:block hidden hover:font-semibold">
            <Logout />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBoardNav;
