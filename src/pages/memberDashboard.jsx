import { useNavigate } from "react-router-dom";
import { Dumbbell, LogOut, Activity, Flame, Calendar } from "lucide-react";

const MemberDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-emerald-950 to-black text-white flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white/5 backdrop-blur-xl border-r border-white/10 p-6 hidden md:flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-10">
            <Dumbbell className="text-emerald-400" />
            <h1 className="text-xl font-semibold">FitMember</h1>
          </div>

          <nav className="space-y-4 text-sm">
            <div className="flex items-center gap-3 text-emerald-400">
              <Activity size={18} />
              Dashboard
            </div>
            <div className="flex items-center gap-3 text-gray-400 hover:text-white cursor-pointer transition">
              <Calendar size={18} />
              Schedule
            </div>
            <div className="flex items-center gap-3 text-gray-400 hover:text-white cursor-pointer transition">
              <Flame size={18} />
              Progress
            </div>
          </nav>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 text-red-400 hover:text-red-500 transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h2 className="text-3xl font-bold mb-8">Welcome Back 👋</h2>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <p className="text-gray-400 text-sm">Workout Completed</p>
            <h3 className="text-3xl font-bold mt-2 text-emerald-400">24</h3>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <p className="text-gray-400 text-sm">Calories Burned</p>
            <h3 className="text-3xl font-bold mt-2 text-emerald-400">12,540</h3>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <p className="text-gray-400 text-sm">Active Days</p>
            <h3 className="text-3xl font-bold mt-2 text-emerald-400">18</h3>
          </div>
        </div>

        {/* Activity Section */}
        <div className="mt-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <p className="text-gray-400 text-sm">
            You completed Chest Workout yesterday 💪
          </p>
        </div>
      </main>
    </div>
  );
};

export default MemberDashboard;
