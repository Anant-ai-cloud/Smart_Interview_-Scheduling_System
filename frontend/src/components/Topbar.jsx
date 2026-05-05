import React from "react";
import { useSelector } from "react-redux";
import Btn from "./Button";
import { Logout } from "../setup/authThunk.js";
import { useDispatch } from "react-redux";


const Topbar = () => {

  const user = useSelector(state=> state.auth.user)
  const dispatch = useDispatch()


  return (
    <header className="fixed left-64 right-0 top-0 h-16 bg-[#fff9ec]/70 backdrop-blur px-8 flex justify-between items-center">
      <input
        type="text"
        placeholder="Search..."
        className="w-96 px-4 py-2 rounded-full bg-yellow-100 outline-none"
      />

       <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm font-bold">{user?.name}</p>
            <p className="text-xs">{user?.role.toUpperCase()}</p>
           </div>

    { <Btn type="button" polish="w-[5vw] h-[5vh]" onClick={()=>dispatch(Logout())} text="Logout"></Btn>}
         
          
        </div>

    </header>
  );
};

export default Topbar;