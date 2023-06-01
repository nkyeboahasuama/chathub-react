import React from "react";
import logo512 from "../images/logo512.png";
import {
  HiOutlineDotsCircleHorizontal,
  HiOutlineVideoCamera,
} from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";

const MessageBoardNav = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-3 w-full h-16 p-2 bg-white border-b-2 border-gray-300">
        <div className="flex items-center">
          <div className="bg-gray-400 w-10 h-10 rounded-full p-1 mr-2">
            <img src={logo512} alt="img" />
          </div>
          <div className="flex flex-col justify-between">
            <div className="text-sm font-bold">Nayo</div>
            <div className="text-xs flex items-center gap-1 ">
              <div>Online</div>
              <div className="bg-green-600 w-2 h-2 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="text-lg cursor-pointer flex gap-3">
          <HiOutlineVideoCamera />
          <IoCallOutline />
          <HiOutlineDotsCircleHorizontal />
        </div>
      </div>
    </div>
  );
};

export default MessageBoardNav;
