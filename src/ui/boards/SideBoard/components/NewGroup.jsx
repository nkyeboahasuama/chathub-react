import React, { useContext, useRef } from "react";
import { roomService } from "../../../../services/room.service";
import { AuthContext } from "../../../contexts/AuthContext";
import { AiOutlinePlusCircle } from "react-icons/ai";
const NewGroup = () => {
  const { user } = useContext(AuthContext);
  const inputRef = useRef();

  const handleAddNewRoom = async (e) => {
    e.preventDefault();
    const newRoomName = inputRef.current.value;
    if (newRoomName.trim() !== "") {
      await roomService.addRoom(newRoomName, user);
      inputRef.current.value = "";
    } else {
      console.log("error");
    }
  };
  return (
    <div>
      <form
        className="w-full h-20  flex flex-col items-center justify-center"
        onSubmit={handleAddNewRoom}
      >
        <input
          className="border-2 w-4/5 "
          placeholder="New room"
          type="text"
          ref={inputRef}
        />
        <button onClick={handleAddNewRoom}>
          <AiOutlinePlusCircle style={{ fontSize: "30px" }} />
        </button>
      </form>
    </div>
  );
};

export default NewGroup;
