import logo512 from "../../images/logo512.png";
import {
  HiOutlineDotsCircleHorizontal,
  HiOutlineVideoCamera,
} from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import React, { useState, useEffect, useContext } from "react";
import { ChatContext } from "../../contexts/ChatContext";
import Logout from "../auth/Logout";
import { useAuth0 } from "@auth0/auth0-react";

const MessageBoardNav = () => {
  // const { message, userId } = useContext(ChatContext);
  const { user } = useAuth0();
  const message = ["jay", "bay"];
  const [senderInfo, setSenderInfo] = useState();

  useEffect(() => {
    const senderInfo = message.filter((ms) => ms.senderId !== user);
    if (senderInfo) {
      setSenderInfo(senderInfo[senderInfo.length - 1]?.sender);
    }
  }, [message, user]);

  return (
    <div>
      <div className="flex justify-between items-center px-3 w-full h-16 p-2 bg-white border-b-2 border-gray-300">
        <div className="flex items-center">
          <div className="bg-gray-400 w-10 h-10 rounded-full overflow-hidden mr-2">
            {senderInfo ? (
              <img src={senderInfo.picture} alt="img" />
            ) : (
              <img src={logo512} alt="img" />
            )}
          </div>
          <div className="flex flex-col justify-between">
            {senderInfo ? (
              <div className="text-sm font-bold">{senderInfo.name}</div>
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
          <div className="flex gap-3 max-md:hidden ">
            <HiOutlineVideoCamera />
            <IoCallOutline />
            <HiOutlineDotsCircleHorizontal />
          </div>
          <div className="text-xs max-lg:block hidden hover:font-semibold">
            <Logout />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBoardNav;
