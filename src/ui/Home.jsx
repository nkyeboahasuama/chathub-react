import React, { useContext, useState } from "react";
import Sidebar from "./boards/SideBoard/main/Sidebar";
import MessageBoard from "./boards/MessageBoard/main/MessageBoard";
import ChatsModal from "./modals/ChatsModal";
import { AuthContext } from "./contexts/AuthContext";

const Home = () => {
  const [isShow, setIsShow] = useState(false);
  const { user } = useContext(AuthContext);

  return (
    user && (
      <div className="h-[100dvh] w-full flex items-center justify-center relative">
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
