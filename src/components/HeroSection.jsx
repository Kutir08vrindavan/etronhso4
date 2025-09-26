// src/components/HeroSection.jsx
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import EnergySection from "./EnergySection";

export default function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-screen flex items-start px-4 md:px-20 overflow-hidden 
                   bg-cover bg-center brightness-110"
        style={{ backgroundImage: "url('/Banner.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content (animation placeholder) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        ></motion.div>

        {/* ✅ Social Media Icons - always vertical, right side */}
        <div className="flex flex-col gap-3 absolute top-1/3 right-2 md:right-4 z-20">
          <a
            href="https://youtube.com/shorts/MT_qE7OOIxY?feature=share"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-[#283b91] hover:bg-[#d96327] rounded-full text-white transition"
          >
            <FaYoutube />
          </a>
          <a
            href="https://wa.me/919810022249"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-[#283b91] hover:bg-[#d96327] rounded-full text-white transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-[#283b91] hover:bg-[#d96327] rounded-full text-white transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-[#283b91] hover:bg-[#d96327] rounded-full text-white transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-[#283b91] hover:bg-[#d96327] rounded-full text-white transition"
          >
            <FaXTwitter />
          </a>
        </div>
      </section>

      {/* Energy Section Below */}
      <EnergySection />
    </>
  );
}
