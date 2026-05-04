import React from "react";
import { useSelector } from "react-redux";
import Btn from "./Button";

const Topbar = () => {

  const user = useSelector(state=> state.auth.user)


  return (
    <header className="fixed left-64 right-0 top-0 h-16 bg-[#fff9ec]/70 backdrop-blur px-8 flex justify-between items-center">
      <input
        type="text"
        placeholder="Search..."
        className="w-96 px-4 py-2 rounded-full bg-yellow-100 outline-none"
      />

      <div className="flex items-center gap-4">
        <span>🔔</span>
        <span>⚙️</span>

        <div className="flex items-center gap-2">
          <div className="text-right">
            <p className="text-sm font-bold">{user.name}</p>
            <p className="text-xs">Admin</p>
          </div>

         { <Btn type="button" polish="w-[5vw] h-[5vh]">Logout</Btn>}
          
        </div>
      </div>
    </header>
  );
};

export default Topbar;