import React from "react";

const Topbar = () => {
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
            <p className="text-sm font-bold">Alex Morgan</p>
            <p className="text-xs">Admin</p>
          </div>
          <img
            src="https://i.pravatar.cc/40"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Topbar;