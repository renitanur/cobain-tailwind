import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-5 right-5 z-[9999] font-[Poppins,sans-serif]">
      {isOpen ? (
        <div className="relative w-[350px] h-[500px] bg-white rounded-2xl shadow-2xl shadow-indigo-500/25 flex flex-col overflow-hidden animate-[fadeInUp_0.3s_ease-out] md:w-[300px] md:h-[450px]">
          {/* Tombol Close */}
          <button
            className="absolute top-2 right-2 bg-transparent border-none text-white hover:text-black transition-transform hover:scale-125 z-10"
            onClick={toggleChat}
          >
            <X size={20} />
          </button>

          {/* Header */}
          <div className="bg-gradient-to-r from-blue-700 to-sky-400 text-white px-4 py-3 font-semibold flex justify-between items-center">
            <span>Chat Admin</span>
          </div>

          {/* Body */}
          <div className="flex-1 bg-gray-100">
            <iframe
              src="https://cdn.botpress.cloud/webchat/v3.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/08/13/02/20250813023102-CXQS6IZA.json"
              title="EveWash Chatbot"
              className="w-full h-full border-none"
            />
          </div>
        </div>
      ) : (
        <div
          className="flex items-center bg-white px-3 py-2 rounded-full shadow-lg cursor-pointer animate-bounce transition-transform hover:scale-105"
          onClick={toggleChat}
        >
          <div className="mr-2 text-[12px] leading-snug text-black font-medium">
            <strong className="block text-lg font-semibold">
              Butuh Bantuan?
            </strong>
            Klik untuk memulai chat
          </div>
          <div className="bg-[#3A81BE] text-white rounded-full w-[60px] h-[60px] flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-700 hover:to-sky-400 hover:scale-110 transition-transform">
            <MessageCircle size={32} />
          </div>
        </div>
      )}
    </div>
  );
}
