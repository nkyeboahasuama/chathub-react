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
        className="w-full flex items-center justify-center"
        onSubmit={handleAddNewRoom}
      >
        <input
          className="border-2 w-3/5 h-7 px-2 py-1 font-semibold m-5"
          placeholder="New room"
          type="text"
          ref={inputRef}
        />
        <div className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center">
          <button onClick={handleAddNewRoom}>
            <AiOutlinePlusCircle style={{ fontSize: "25px", color: "white" }} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewGroup;
