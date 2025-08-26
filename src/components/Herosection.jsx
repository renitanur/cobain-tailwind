import React, { useState, useEffect } from "react";
import bg1 from "../assets/bg2.jpg";
import bg2 from "../assets/bg3.png";
import bg3 from "../assets/bg4.webp";
import bg4 from "../assets/laundry2.jpg";

export default function HeroSection() {
  const images = [bg1, bg2, bg3, bg4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-[100vh] w-screen overflow-x-hidden flex items-center justify-center">
      
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-center text-white max-w-2xl px-6">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-snug">
          Express Laundry Delivery Service di Solo Baru
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Kami jemput, cuci, dan antar kembali cucian kamu dengan bersih, cepat, 
          dan tanpa ribet.
        </p>
        <a
          href="#order"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold text-white shadow-lg transition"
        >
          Yuk, Pesan Sekarang!
        </a>
      </div>
    </section>
  );
}
