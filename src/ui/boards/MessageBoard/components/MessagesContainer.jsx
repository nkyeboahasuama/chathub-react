import React from "react";
import Message from "./Message";

const Messages = () => {
  return (
    <>
      <div className="flex flex-col overflow-y-scroll">
        <div className="flex flex-col gap-5 max-w-full">
          <Message />
          {/* <div></div> */}
        </div>
      </div>
    </>
  );
};

export default Messages;
