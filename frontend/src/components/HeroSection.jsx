// src/components/HeroSection.jsx
import { motion } from "framer-motion";
import EnergySection from "./EnergySection"; // 👈 Import Energy Section

export default function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] md:h-[100vh] flex items-center px-4 md:px-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/hero.png"
            alt="Hero background"
            className="absolute inset-0 w-full h-full object-cover object-center brightness-110"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-white max-w-xl text-left px-2 sm:px-0"
        >
          {/* Logo */}
          <div className="mb-6 flex justify-start">
            <img
              src="/Logo.png"
              alt="E-tron Logo"
              className="h-20 w-auto sm:h-28 md:h-52 drop-shadow-2xl"
            />
          </div>

          {/* CTA Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            style={{ backgroundColor: "#d96327" }}
            className="inline-block text-white font-semibold 
              px-4 py-2 text-xs sm:text-sm   /* 👈 compact on small screens */
              sm:px-6 sm:py-2.5
              md:px-8 md:py-3 md:text-base   /* 👈 larger on desktop */
              rounded-full shadow-lg transition-all duration-300 font-['Poppins'] hover:opacity-90"
          >
            Explore now
          </motion.a>
        </motion.div>
      </section>

      {/* Energy Section Below */}
      <EnergySection />
    </>
  );
}
