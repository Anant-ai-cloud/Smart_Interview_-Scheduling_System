// import React from "react";

// const Sidebar = () => {
//   return (
//     <aside className="fixed left-0 top-0 h-screen w-64 bg-[#fff9ec] z-50 flex flex-col">
//       <div className="p-8">
//         <div className="flex items-center gap-3">
//           <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white">
//             ✨
//           </div>
//           <div>
//             <h1 className="text-xl font-black">Alchemist Admin</h1>
//             <p className="text-[10px] uppercase">Interview Intelligence</p>
//           </div>
//         </div>
//       </div>

//       <nav className="flex-1 px-4 space-y-2">
//         {["Dashboard", "User Management", "Schedules", "Feedback"].map(
//           (item, i) => (
//             <div
//               key={i}
//               className={`px-4 py-3 rounded-xl cursor-pointer ${
//                 item === "Schedules"
//                   ? "bg-orange-200 font-bold"
//                   : "hover:bg-orange-100"
//               }`}
//             >
//               {item}
//             </div>
//           )
//         )}
//       </nav>

//       <div className="p-8">
//         <div className="bg-yellow-100 rounded-xl p-4">
//           <p className="text-xs font-bold">QUICK STATS</p>
//           <div className="flex justify-between">
//             <span className="text-2xl font-black">12</span>
//             <span className="text-xs">TODAY</span>
//           </div>
//         </div>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;
function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-[#fff9ec] z-50">
      <div className="px-8 py-10">
        <h1 className="text-xl font-bold">Alchemist Admin</h1>
      </div>

      <nav className="px-4 space-y-2">
        <a className="flex gap-3 p-3 bg-amber-100 rounded-lg">Dashboard</a>
        <a className="flex gap-3 p-3 hover:bg-amber-100">Users</a>
        <a className="flex gap-3 p-3 hover:bg-amber-100">Schedules</a>
        <a className="flex gap-3 p-3 hover:bg-amber-100">Feedback</a>
      </nav>
    </aside>
  );
}

export default Sidebar;