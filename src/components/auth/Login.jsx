import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getAuthState, setAuthState, clearAuthState } from "./AuthSession";

const Login = () => {
  const { isAuthenticated, user, loginWithRedirect } = useAuth0();

  useEffect(() => {
    const storedAuthState = getAuthState();
    if (storedAuthState) {
      setAuthState(storedAuthState);
    }
    console.log(storedAuthState);
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      setAuthState({ isAuthenticated: true, user });
    } else {
      clearAuthState();
    }
  }, [isAuthenticated, user]);

  return (
    !isAuthenticated && (
      <div className="w-[20rem] h-3/5 bg-slate-500 flex self-center">
        <div className="w">
          <button
            className="border-white bg-gray-800 text-white"
            onClick={() => loginWithRedirect()}
          >
            Go to authentication page
          </button>
        </div>
      </div>
    )
  );
};

export default Login;
