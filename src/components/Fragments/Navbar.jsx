import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-black/70 backdrop-blur-lg z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white tracking-wide">
          FitTrack
        </h1>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#features" className="hover:text-white transition">
            Features
          </a>
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <button className="bg-green-500 hover:bg-green-600 text-black px-5 py-2 rounded-lg font-semibold transition">
            Get Started
          </button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-4 flex flex-col gap-4 text-gray-300">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <button className="bg-green-500 text-black py-2 rounded-lg font-semibold">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
