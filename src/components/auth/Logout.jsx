import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { clearAuthState } from "./AuthSession";

const Logout = () => {
  const { logout, isAuthenticated } = useAuth0();

  const handleLogout = () => {
    clearAuthState();
    logout({ returnTo: window.location.origin });
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
