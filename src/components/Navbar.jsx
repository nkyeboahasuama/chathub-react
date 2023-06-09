import React from "react";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="bg-white flex h-16 w-full justify-between items-center p-4 text-xl border-b-2 border-gray-300">
      <div className="font-bold text-sky-600">Messages</div>
      <div className="bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer">
        <CiSearch />
      </div>
    </div>
  );
};

export default Navbar;
