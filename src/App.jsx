import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./components/services";
import HeroSection from "./components/Herosection";
import Chatbot from "./components/chatbot";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection/>

      <Services/>
      <Chatbot/>

      {/* Footer di bawah */}
      <Footer />
    </div>
  );
}
