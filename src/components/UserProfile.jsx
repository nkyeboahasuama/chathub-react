import React from "react";
import profileImg from "../images/profileImg.jpg";

const UserProfile = () => {
  return (
    <div className="flex gap-3 p-2 border-t-2 border-gray-300 cursor-pointer hover:bg-gray-200">
      <div className="bg-gray-200 h-10 rounded-full w-10 object-fill overflow-hidden">
        <img className="w-full h-full " src={profileImg} alt="" />
      </div>
      <div className="text-sm">
        <div className="font-bold ">Harry</div>
        <div className="font-medium text-xs cursor-pointer text-red-500">
          Logout
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
