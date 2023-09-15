import React from "react";
import { useRecentUserInfo } from "../shared/hooks/useRecentUserInfo";

const ChatsModal = ({ setIsShow }) => {
  const { recentUserInfo: info } = useRecentUserInfo();

  const closeChatsModal = () => {
    setIsShow(false);
  };
  return (
    <div className="bg-white h-4/6 w-full absolute top-0 left-0 z-10 opacity-90">
      <div className="flex justify-end">
        <div
          className="bg-red-600 text-white p-1 m-2 cursor-pointer"
          onClick={closeChatsModal}
        >
          Close
        </div>
      </div>
      {info && info.user && (
        <div className="flex justify-between py-3 px-2 bg-slate-300 hover:bg-slate-200 cursor-pointer items-center border-b-2 border-gray-400">
          <div className="flex items-center">
            <div className="bg-gray-400 w-10 h-10 rounded-full overflow-hidden mr-2">
              <img src={info?.user.profilePic} alt="img" />
            </div>
            <div className="flex flex-col justify-between">
              <div className="text-sm font-bold">
                {info?.user.name.length > 20
                  ? info?.user.name.slice(0, 15) + "..."
                  : info?.user.name}
              </div>
              <div className="text-xs">{info?.text}</div>
            </div>
          </div>
          <div className="flex flex-col items-end justify-between">
            <div className="text-xs">
              {/* {userObj?.time.hour}:{userObj?.time.minute} */}
              {/* {info?.createdAt} */}
            </div>
            <div className="bg-red-600 text-white font-medium w-4 h-4 rounded-full text-xs flex items-center justify-center">
              {/* {messages.length} */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatsModal;
