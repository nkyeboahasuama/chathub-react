import React from "react";

const DateInfo = ({ date }) => {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="bg-white text-xs font-bold w-fit p-1 flex justify-center items-center rounded-lg text-center my-7">
          {date}
        </div>
      </div>
    </>
  );
};

export default DateInfo;
