import React, { useState, useEffect, useContext } from "react";
import { BsSend } from "react-icons/bs";
import { IoAttachSharp } from "react-icons/io5";
import { ChatContext } from "../contexts/ChatContext";

const Input = () => {
  const [input, setInput] = useState("");
  const { handleSubmit } = useContext(ChatContext);

  const handleInputSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e);
    setInput("");
  };

  // console.log("input render");
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <form
        className="bg-white w-full h-14 border-t-2 border-gray-200 flex items-center justify-center gap-3 cursor-pointer"
        onSubmit={handleInputSubmit}
      >
        <IoAttachSharp className="text-2xl hover:text-3xl  w-1/12 " />
        <input
          className="h-8 text-sm w-9/12 p-2 placeholder:text-black rounded-xl bg-gray-200 outline-none"
          placeholder="Text here..."
          type="text"
          name="message"
          onChange={handleChange}
          value={input}
        />
        <div className="w-1/12 hover:text-xl">
          <BsSend />
        </div>
      </form>
    </div>
  );
};

export default Input;
