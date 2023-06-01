import React from "react";
import { BsSend } from "react-icons/bs";
import { IoAttachSharp } from "react-icons/io5";

const Input = () => {
  return (
    <div className="bg-white w-full h-14 border-t-2 border-gray-200 flex items-center justify-center gap-3 cursor-pointer">
      <IoAttachSharp className="text-2xl hover:text-3xl  w-1/12 " />
      <input
        className="h-8 text-sm w-9/12 p-2 placeholder:text-black rounded-xl bg-gray-200 outline-none"
        placeholder="Text here..."
        type="text"
      />
      <div className="w-1/12 hover:text-xl">
        <BsSend />
      </div>
    </div>
  );
};

export default Input;
