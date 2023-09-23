import React from "react";

const DisplayCard = ({ message }) => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-fit px-2 font-semibold rounded-lg bg-white text-center">
        {message}
      </div>
    </div>
  );
};

export default DisplayCard;
