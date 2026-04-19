import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-[#fff9ec] z-50">
      <div className="px-8 py-10">
        <h1 className="text-xl font-bold">Alchemist Admin</h1>
      </div>

      <nav className="px-4 space-y-2">
        <Link to={"/admindashboard"} className="flex gap-3 p-3 hover:bg-amber-100 rounded-lg">Dashboard</Link>
        <a className="flex gap-3 p-3 hover:bg-amber-100">All Users</a>
        <Link to={"/schedule"} className="flex gap-3 p-3 hover:bg-amber-100">All Interviews</Link>
        <a className="flex gap-3 p-3 hover:bg-amber-100">All Feedbacks</a>
      </nav>
    </aside>
  );
}

export default Sidebar;