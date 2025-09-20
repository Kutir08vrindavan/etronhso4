// src/components/BannerSection.jsx
import { motion } from "framer-motion";

export default function BannerSection() {
  return (
    <section className="bg-white py-20 font-['Poppins']">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Welcome to Our Creative Projects
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            We design and deliver innovative solutions that help your business
            grow and stand out in the market.
          </p>
          <button className="bg-[#FF8000] text-white font-semibold px-6 py-3 rounded hover:bg-[#e67300] transition-colors duration-300">
            Get Started
          </button>
        </motion.div>

        {/* Right Image or Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <img
            src="A.png"
            alt="Banner Illustration"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
