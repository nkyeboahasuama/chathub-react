import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import Logout from "../../../../auth/Logout";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    user && (
      <div className="flex gap-3 p-2 cursor-pointer bg-neutral-800 hover:bg-neutral-900">
        <div className="bg-gray-200 h-10 rounded-full w-10 object-fill overflow-hidden">
          <img src={user.profilePic} alt="" />
        </div>
        <div className="text-sm">
          <div className="font-bold text-gray-300">
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
