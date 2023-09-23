import { signInWithPopup } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth, provider } from "../../config/firebase";

export const AuthContext = createContext();
const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = localStorage.getItem("user");
    if (checkUser) {
      const userData = JSON.parse(checkUser);
      setUser(userData);
    }
  }, []);
  console.log(user);

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const userInfo = {
          name: result.user.displayName,
          email: result.user.email,
          profilePic: result.user.photoURL,
        };
        const userJSON = JSON.stringify(userInfo);
        localStorage.setItem("user", userJSON);
        setUser(userInfo);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
  return (
    <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
