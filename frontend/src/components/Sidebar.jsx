import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Sidebar() {

  const user = useSelector((state) => state.auth.user)
  const navigate = useNavigate()

  const handleDashboard = () => {

    if (user?.role === "hr") navigate("/hrdashboard")
    else if (user?.role === "admin") navigate("/admindashboard")
    else if (user?.role === "interviewer") navigate("/interviewerdashboard")
    else if (user?.role === "candidate") navigate("/dashboard")
  

  }
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-[#fff9ec] z-50">
      <div className="px-8 py-10">
        <h1 className="text-xl font-bold">Alchemist Admin</h1>
      </div>

      <nav className="px-4 space-y-2">
        <button className="flex gap-3 p-3 hover:bg-amber-100 rounded-lg w-full" onClick={handleDashboard}>Dashboard</button>
        <a className="flex gap-3 p-3 hover:bg-amber-100">All Users</a>
        <Link to={"/schedule"} className="flex gap-3 p-3 hover:bg-amber-100">All Interviews</Link>
        <a className="flex gap-3 p-3 hover:bg-amber-100">All Feedbacks</a>
      </nav>
    </aside>
  );
}

export default Sidebar;