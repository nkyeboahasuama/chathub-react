import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "./auth/Logout";

const UserProfile = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div className="flex gap-3 p-2 border-t-2 border-gray-300 cursor-pointer hover:bg-gray-200">
        <div className="bg-gray-200 h-10 rounded-full w-10 object-fill overflow-hidden">
          <img src={user.picture} alt="" />
        </div>
        <div className="text-sm">
          <div className="font-bold ">{user.name}</div>
          <div className="font-medium text-xs cursor-pointer text-red-500 hover:text-orange-500">
            <Logout />
          </div>
        </div>
      </div>
    )
  );
};

export default UserProfile;
