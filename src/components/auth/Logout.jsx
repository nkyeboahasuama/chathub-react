import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
  const { logout, isAuthenticated, loginWithRedirect } = useAuth0();

  const handleLogout = () => {
    logout(() => loginWithRedirect());
  };
  return (
    isAuthenticated && (
      <div>
        <button onClick={handleLogout}>Log out</button>
      </div>
    )
  );
};

export default Logout;
