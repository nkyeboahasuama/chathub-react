import React, { useState, useRef, useEffect, useContext } from "react";
import { BsSend } from "react-icons/bs";
import { IoAttachSharp } from "react-icons/io5";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../../../config/firebase";
import { AuthContext } from "../../../contexts/AuthContext";
import { ChatContext } from "../../../contexts/ChatContext";
import { handleRoomMateCheck } from "../../../shared/functions/groupMembershipCheck";

const Input = () => {
  const [input, setInput] = useState("");
  const inputRef = useRef();
  const { user } = useContext(AuthContext);
  const { currentChatRoom } = useContext(ChatContext);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  const handleSubmit = async (input) => {
    const messagesRef = collection(db, "messages");
    await addDoc(messagesRef, {
      text: input,
      createdAt: serverTimestamp(),
      user: user,
      room: currentChatRoom,
    });
  };
  const handleInputSubmit = (event) => {
    event.preventDefault();
    if (input.length > 0) {
      handleSubmit(input);
    }
    setInput("");
  };

  return (
    <div>
      <form
        className="bg-white w-full h-14 border-t-2 border-gray-200 flex items-center justify-center gap-3 cursor-pointer"
        onSubmit={handleInputSubmit}
      >
        {currentChatRoom && handleRoomMateCheck(currentChatRoom, user) && (
          <>
            <IoAttachSharp className="text-2xl hover:text-3xl  w-1/12 " />
            <input
              className="h-8 text-sm w-9/12 p-2 placeholder:text-black rounded-xl bg-gray-200 outline-none"
              placeholder="Text here..."
              type="text"
              name="message"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              required
              ref={inputRef}
            />
            <div className="w-1/12 hover:text-2xl" onClick={handleInputSubmit}>
              <BsSend />
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default Input;
