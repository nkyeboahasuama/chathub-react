import React, { useState } from "react";
import Sidebar from "./SideBoard/Sidebar";
import MessageBoard from "./MessagingBoard/MessageBoard";
import { useAuth0 } from "@auth0/auth0-react";
import ChatsModal from "./ChatsModal";

const Home = () => {
  const { isAuthenticated } = useAuth0();
  const [isShow, setIsShow] = useState(false);

  return (
    isAuthenticated && (
      <div className="h-screen w-full flex items-center justify-center relative">
        <div className="border border-white flex rounded-md overflow-hidden w-full h-full">
          {isShow && <ChatsModal setIsShow={setIsShow} />}
          <Sidebar />
          <MessageBoard setIsShow={setIsShow} />
        </div>
      </div>
    )
  );
};

export default Home;
