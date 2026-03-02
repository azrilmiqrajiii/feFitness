import { useState } from "react";
import Button from "../components/Elements/Button";

export default function LandingPage() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="bg-white text-gray-900">
      <header className="fixed w-full bg-white/80 backdrop-blur-lg border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between relative">
          <h1 className="text-3xl font-bold text-emerald-500 tracking-tight">
            FitTrack
          </h1>

          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-14 text-gray-700 text-lg font-semibold">
            <a href="#features" className="hover:text-emerald-500 transition">
              Features
            </a>
            <a href="#about" className="hover:text-emerald-500 transition">
              About
            </a>
            <a href="#contact" className="hover:text-emerald-500 transition">
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="md">
              Masuk
            </Button>
            <Button size="md">Daftar</Button>
          </div>

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden text-3xl"
          >
            ☰
          </button>
        </div>

        {mobileMenu && (
          <div className="md:hidden bg-white border-t border-gray-200 px-8 py-8 space-y-8">
            <div className="flex flex-col gap-6 text-gray-700 text-lg font-semibold text-center">
              <a href="#features" onClick={() => setMobileMenu(false)}>
                Features
              </a>
              <a href="#about" onClick={() => setMobileMenu(false)}>
                About
              </a>
              <a href="#contact" onClick={() => setMobileMenu(false)}>
                Contact
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <Button variant="outline" fullWidth>
                Masuk
              </Button>
              <Button fullWidth>Daftar</Button>
            </div>
          </div>
        )}
      </header>

      <section className="min-h-screen flex items-center justify-center text-center px-6 pt-24 bg-linear-to-b from-white to-gray-50">
        <div>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Build Your Best <span className="text-emerald-500">Body</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            Kalkulator nutrisi, pelacakan progress, dan panduan video latihan
            dalam satu platform modern.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="text-white">Get Started</Button>
            <Button variant="outline" clas>
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features
          </h3>
          <p className="text-gray-500">
            Semua yang kamu butuhkan untuk mencapai goals fitness kamu
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-4 text-emerald-500">
              Nutrition Calculator
            </h4>
            <p className="text-gray-500">
              Hitung kebutuhan kalori dan makronutrien sesuai dengan tujuan
              fitness kamu.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-4 text-emerald-500">
              Progress Tracking
            </h4>
            <p className="text-gray-500">
              Pantau perkembangan berat badan dan performa latihan secara
              visual.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-4 text-emerald-500">
              Workout Videos
            </h4>
            <p className="text-gray-500">
              Akses panduan video latihan profesional untuk berbagai level.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Transform Your Body, Transform Your Life
            </h3>
            <p className="text-gray-500 mb-6">
              FitTrack dirancang untuk membantu kamu mencapai bentuk tubuh ideal
              dengan pendekatan berbasis data dan teknologi modern.
            </p>
            <Button size="lg">Start Now</Button>
          </div>

          <div className="bg-white h-80 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-center text-gray-400">
            Image Placeholder
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-white px-6">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Stay Connected</h3>
          <p className="text-gray-500 mb-8">
            Dapatkan update terbaru dan tips fitness langsung ke email kamu.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <Button className="text-white">Subscribe</Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200 py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} FitTrack. All rights reserved.
      </footer>
    </div>
  );
}
