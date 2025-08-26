import React from "react";
import { Calendar, Sparkles, Truck } from "lucide-react";

const services = [
  {
    icon: <Calendar className="w-10 h-10 text-red-500" />,
    title: "Jadwalkan Pengambilan",
    desc: "Pilih hari dan lokasi cucian diambil.",
  },
  {
    icon: <Sparkles className="w-10 h-10 text-blue-500" />,
    title: "Kualitas Pencucian",
    desc: "Proses higienis dan terpercaya.",
  },
  {
    icon: <Truck className="w-10 h-10 text-green-500" />,
    title: "Antar Kembali",
    desc: "Disampaikan ke depan pintu kamu.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-blue-50 text-center">
      {/* Judul */}
      <h2 className="text-3xl font-bold text-gray-800 mb-10">Layanan Kami</h2>

      {/* Grid Cards */}
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {services.map((srv, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:shadow-xl transition"
          >
            <div className="mb-4">{srv.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{srv.title}</h3>
            <p className="text-gray-600 text-sm">{srv.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
