import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getAuthState, setAuthState, clearAuthState } from "./AuthSession";

const Login = () => {
  const { isAuthenticated, user, isLoading, loginWithRedirect } = useAuth0();

  useEffect(() => {
    const storedAuthState = getAuthState();
    if (storedAuthState) {
      setAuthState(storedAuthState);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      setAuthState({ isAuthenticated: true, user });
    } else {
      clearAuthState();
    }
  }, [isAuthenticated, user]);

  return (
    !isAuthenticated &&
    (isLoading ? (
      "Loading..."
    ) : (
      <div className="w-full h-full flex items-center justify-center">
        <button
          className="hover:shadow-lg shadow-black hover:bg-gray-800 p-3 rounded-xl hover:-translate-y-2 bg-sky-700 font-medium text-white duration-300"
          onClick={() => loginWithRedirect()}
        >
          Go to authentication page
        </button>
      </div>
    ))
  );
};

export default Login;
