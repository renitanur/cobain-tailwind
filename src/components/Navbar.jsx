import React, { useState } from "react";
import logo from "../assets/logo.webp"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-auto"
            />
            <span className="ml-2 text-white font-bold text-xl"></span>
          </div>

          {/* ================== MENU DESKTOP & TABLET ================== */}
          <div className="hidden md:flex space-x-8"> 
            {/* hidden → disembunyikan default (untuk mobile) 
                md:flex → tampil flex mulai dari tablet (≥768px) sampai desktop */}
            <a href="#home" className="text-white text-xl hover:text-blue-400">
              Beranda
            </a>
            <a href="#about" className="text-white text-xl hover:text-blue-400">
              Tentang Kami
            </a>
            <a href="#services" className="text-white text-xl hover:text-blue-400">
              Layanan
            </a>
            <a href="#blog" className="text-white text-xl hover:text-blue-400">
              Blog
            </a>
          </div>

          {/* Tombol "Pesan Sekarang" → juga khusus tablet & desktop */}
          <div className="hidden md:flex">
            {/* hidden → disembunyikan di mobile
                md:flex → baru tampil di tablet dan desktop */}
            <a
              href="#order"
              className="bg-blue-600 text-white text-xl px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Pesan Sekarang
            </a>
          </div>

          {/* ================== MENU ☰ ================== */}
          <div className="md:hidden flex items-center">
            {/* md:hidden → tombol hanya tampil di mobile (<768px)*/}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="absolute top-4 right-4 text-white hover:text-gray-200"
            >
              {isOpen ? (
                // Icon "X" (close) 
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Icon ☰
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

     {/* ================== MENU MOBILE ================== */}
  {isOpen && (
  <div className="md:hidden fixed top-0 left-0 w-full h-1/3,5 bg-blue-400 shadow-lg px-4 py-6 space-y-4 z-50 transition-all duration-300 ease-in-out">
    
    {/* Tombol Close di dalam Navbar */}
    <div className="flex justify-end">
      <button onClick={() => setIsOpen(false)} className="text-white text-2xl">
        ✕
      </button>
    </div>

    {/* Link Menu */}
    <a href="#home" className="block text-white text-xl hover:text-gray-200">
      Beranda
    </a>
    <a href="#about" className="block text-white text-xl hover:text-gray-200">
      Tentang Kami
    </a>
    <a href="#services" className="block text-white text-xl hover:text-gray-200">
      Layanan
    </a>
    <a href="#blog" className="block text-white text-xl hover:text-gray-200 ">
      Blog
    </a>
    <a href="#order"
      className="block bg-sky-600 text-white text-xl px-4 py-2 rounded-md text-center hover:bg-sky-600 transition mt-10">
      Pesan Sekarang
    </a>

  </div>
)}
    </nav>
  );
}
