import { useNavigate } from "react-router-dom";
import {
  Shield,
  Users,
  DollarSign,
  TrendingUp,
  LogOut,
  LayoutDashboard,
  Settings,
} from "lucide-react";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-black text-white flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white/5 backdrop-blur-xl border-r border-white/10 p-6 hidden md:flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-10">
            <Shield className="text-emerald-400" />
            <h1 className="text-xl font-semibold">Admin Panel</h1>
          </div>

          <nav className="space-y-4 text-sm">
            <div className="flex items-center gap-3 text-emerald-400">
              <LayoutDashboard size={18} />
              Overview
            </div>

            <div className="flex items-center gap-3 text-gray-400 hover:text-white cursor-pointer transition">
              <Users size={18} />
              Members
            </div>

            <div className="flex items-center gap-3 text-gray-400 hover:text-white cursor-pointer transition">
              <Settings size={18} />
              Settings
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

      {/* Main */}
      <main className="flex-1 p-8">
        <h2 className="text-3xl font-bold mb-8">Admin Overview 👑</h2>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <p className="text-gray-400 text-sm">Total Members</p>
            <h3 className="text-3xl font-bold mt-2 text-emerald-400">1,284</h3>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <p className="text-gray-400 text-sm">Monthly Revenue</p>
            <h3 className="text-3xl font-bold mt-2 text-emerald-400">$8,540</h3>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <p className="text-gray-400 text-sm">Growth Rate</p>
            <h3 className="text-3xl font-bold mt-2 text-emerald-400">+12%</h3>
          </div>
        </div>

        {/* Activity Section */}
        <div className="mt-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-4">System Activity</h3>
          <p className="text-gray-400 text-sm">
            24 new members registered today.
          </p>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
