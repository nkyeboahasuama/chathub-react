import React, { useContext } from "react";
import { AuthContext } from "../ui/contexts/AuthContext";

const Login = () => {
  const { handleLogin } = useContext(AuthContext);

  const loginUser = () => {
    handleLogin();
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <button
        className="hover:shadow-lg shadow-black hover:bg-gray-800 p-3 rounded-xl hover:-translate-y-2 bg-sky-700 font-medium text-white duration-300"
        onClick={loginUser}
      >
        Go to authentication page
      </button>
    </div>
  );
};

export default Login;
