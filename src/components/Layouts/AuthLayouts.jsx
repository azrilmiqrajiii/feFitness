import { Link } from "react-router-dom";
import bgImage from "../../assets/fitness-bg.jpg";

const AuthLayouts = ({ children, title }) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-linear-to-br from-black/70 via-emerald-900/60 to-black/80 backdrop-blur-md"></div>

      <div className="relative w-105 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.6)] p-10">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-linear-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              className="w-9 h-9 text-white"
              fill="currentColor"
            >
              <rect x="2" y="22" width="8" height="20" rx="2" />
              <rect x="12" y="18" width="6" height="28" rx="2" />
              <rect x="20" y="28" width="24" height="8" rx="4" />
              <rect x="46" y="18" width="6" height="28" rx="2" />
              <rect x="54" y="22" width="8" height="20" rx="2" />
            </svg>
          </div>
        </div>

        <h2 className="text-center text-white text-lg tracking-widest font-medium mb-8">
          MEMBER {title}
        </h2>
        {children}
        <div className="flex justify-center pt-2 text-sm text-white">
          <p className="mx-2">
            {" "}
            {title === "Login" ? "Belum punya akun?" : "Sudah punya akun?"}{" "}
            {title === "Login" && (
              <Link to="/register" className="font-semibold text-green-400">
                daftar
              </Link>
            )}
            {title === "Daftar" && (
              <Link to="/login" className="font-semibold text-green-400">
                login
              </Link>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
export default AuthLayouts;
