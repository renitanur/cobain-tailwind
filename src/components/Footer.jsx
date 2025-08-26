 import React from "react";
import { Mail, Bot, MapPin, Clock } from "lucide-react";
import logoEvewash from "../assets/logo.webp";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white px-6 md:px-16 py-12 font-poppins">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        
        <div className="flex flex-col items-center md:items-start">
          <img
            src={logoEvewash}
            alt="Evewash Logo"
            className="w-40 mb-4 invert brightness-0"
          />
          <p className="text-sm leading-relaxed max-w-xs">
            Laundry Delivery Service di Solo Baru
          </p>
        </div>

        {/* Kontak */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold mb-4">Kontak</h4>
          <p className="flex items-center gap-2 text-sm mb-2">
            <Mail size={20} /> evewashsolo@gmail.com
          </p>
          <p className="flex items-center gap-2 text-sm mb-2">
            <Bot size={25} /> Chatbot Evewash
          </p>
          <p className="flex items-start gap-2 text-sm leading-snug max-w-xs">
            <MapPin size={40} />
            Jl. Pesanggrahan No.39F, Langenharjo, Solo Baru, Jawa Tengah 57552
            (Ruko abu-abu sebelah Alfamart)
          </p>
        </div>

        {/* Jam Buka */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold mb-4">Jam Buka</h4>
          <p className="flex items-center gap-2 text-sm mb-1">
            <Clock size={20} /> Senin – Sabtu
          </p>
          <p className="text-sm">Pukul 07:00 WIB – 19:00 WIB</p>
        </div>
      </div>

      <div className="border-t border-white/30 mt-10 pt-6">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm">
          <a href="#syarat" className="hover:underline">
            Syarat dan Ketentuan
          </a>
          <span className="hidden md:inline">|</span>
          <a href="#privasi" className="hover:underline">
            Privasi
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-4 text-center text-xs opacity-80">
          © 2025 Evewash Clone. All rights reserved.
        </p>
      </div>
    </footer>
  );
}