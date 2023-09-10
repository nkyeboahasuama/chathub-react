import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import useSubscription from "../hooks/useSubscription";
import { dateInfo } from "../functions/dateInfo";
import DateInfo from "./Date";

const Messages = () => {
  const { messages } = useSubscription();
  const [filtered, setFiltered] = useState(null);
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    month: "long",
    weekday: "long",
    day: "numeric",
  });

  // const scrollDown = useRef();

  // useEffect(() => {
  //   scrollDown.current.scrollIntoView({ behavior: "smooth" });
  // }, [messages]);

  // useEffect(() => {
  //   function getDayForMessages() {
  //     const filtered = messages.filter(
  //       (e) => dateInfo.getDate(e) !== formattedDate
  //     );
  //     const newArray = filtered.map((e) => dateInfo.getDate(e));
  //     const uniqueSet = new Set(newArray);
  //     const uniqueArray = [...uniqueSet];
  //     setFiltered(uniqueArray);
  //     console.log(uniqueArray);
  //   }
  //   getDayForMessages();
  // }, [messages, formattedDate]);

  return (
    <>
      {" "}
      {
        <div className="flex flex-col overflow-y-scroll">
          <div className="flex flex-col gap-5 max-w-full">
            <Message />
            <div></div>
          </div>
        </div>
      }
    </>
  );
};

export default Messages;
