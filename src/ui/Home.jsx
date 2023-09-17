import React, { useContext, useState } from "react";
import Sidebar from "./boards/SideBoard/main/Sidebar";
import MessageBoard from "./boards/MessageBoard/main/MessageBoard";
import ChatsModal from "./modals/ChatsModal";
import { AuthContext } from "./contexts/AuthContext";

const Home = () => {
  const [isShow, setIsShow] = useState(false);
  const { user } = useContext(AuthContext);

  return (
    <div className="h-[100dvh] w-[100vw] flex items-center justify-center relative">
      <div className="border-2 border-gray-300 flex  overflow-hidden w-full h-full">
        {isShow && <ChatsModal setIsShow={setIsShow} />}
        <Sidebar />
        <MessageBoard setIsShow={setIsShow} />
      </div>
    </div>
  );
};

export default Home;
