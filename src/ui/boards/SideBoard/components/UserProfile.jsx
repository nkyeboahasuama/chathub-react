import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import Logout from "../../../../auth/Logout";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    user && (
      <div className="flex gap-3 p-2 border-t-2 border-gray-300 cursor-pointer hover:bg-gray-200">
        <div className="bg-gray-200 h-10 rounded-full w-10 object-fill overflow-hidden">
          <img src={user.profilePic} alt="" />
        </div>
        <div className="text-sm">
          <div className="font-bold ">
            {user.name.length > 20 ? user.name.slice(0, 15) + "..." : user.name}
          </div>
          <div className="font-medium text-xs cursor-pointer text-red-500 hover:text-orange-500">
            <Logout />
          </div>
        </div>
      </div>
    )
  );
};

export default UserProfile;
