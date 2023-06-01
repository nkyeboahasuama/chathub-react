import React from "react";
import logo512 from "../images/logo512.png";

const RecieverMessage = () => {
  return (
    <div className="flex items-center p-2">
      <div className="bg-gray-400 w-10 h-10 rounded-full p-1 mr-2">
        <img src={logo512} alt="img" />
      </div>
      <div className="flex max-w-1/4 flex-col justify-between">
        <div className="text-sm font-bold">Nayo</div>
        <div className="text-xs bg-white p-2 rounded-xl rounded-tl-none w-fit">
          hi, bro... hi, bro.
        </div>
      </div>
    </div>
  );
};

export default RecieverMessage;
