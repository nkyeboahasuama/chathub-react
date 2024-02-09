import React from "react";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="bg-neutral-800 flex h-16 w-full justify-between items-center p-4 text-xl">
      <div className="font-bold text-sky-600">Messages</div>
      <div className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer bg-neutral-600 text-sky-300 hover:font-extrabold hover:bg-neutral-700 hover:text-sky-600">
        <CiSearch />
      </div>
    </div>
  );
};

export default Navbar;
