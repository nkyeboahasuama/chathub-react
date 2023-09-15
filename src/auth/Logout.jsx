import React, { useContext } from "react";
import { AuthContext } from "../ui/contexts/AuthContext";

const Logout = () => {
  const { user, handleLogout } = useContext(AuthContext);

  const logoutUser = () => {
    handleLogout();
  };
  return (
    user && (
      <div>
        <button onClick={logoutUser}>Logout</button>
      </div>
    )
  );
};

export default Logout;
