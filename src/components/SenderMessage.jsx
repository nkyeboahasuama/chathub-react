import React from "react";
import profileImg from "../images/profileImg.jpg";

const Message = () => {
  return (
    <div className="flex flex-row-reverse items-center gap-2">
      <div className="bg-gray-400 w-10 h-10 rounded-full mr-2 overflow-hidden object-fill">
        <img className="w-full h-full" src={profileImg} alt="img" />
      </div>
      <div className="flex max-w-1/4 flex-col justify-between">
        <div className="text-sm text-right font-bold">You</div>
        <div className="text-xs flex flex-wrap bg-white p-2 rounded-xl rounded-tr-none ">
          Hello, bro
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Message;
