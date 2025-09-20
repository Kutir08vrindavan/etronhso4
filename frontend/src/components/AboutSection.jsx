// src/components/AboutSection.jsx
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutSection() {
  const points = [
    "Legacy in batteries since 1968",
    "First manufacturing unit in 1981, showroom in 1985",
    "Diversification & advanced acid dilution plants (2013 & 2023)",
    "Trusted brand E-tron symbolizing quality & innovation",
  ];

  return (
    <section className="bg-[#fffaf3] py-12 md:py-20 font-['Poppins']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Left Side Images */}
        <motion.div
          className="grid grid-cols-2 gap-3 sm:gap-4"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.img
            src="/A.png"
            alt="Battery Legacy"
            className="rounded-lg shadow-lg object-cover w-full h-40 sm:h-56 md:h-72 lg:h-[300px]"
            whileHover={{ scale: 1.05 }}
          />
          <motion.img
            src="/Acid.jpg"
            alt="Battery Plant"
            className="rounded-lg shadow-lg object-cover w-full h-40 sm:h-56 md:h-72 lg:h-[300px]"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>

        {/* Right Side Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a1a] leading-snug">
            Our Legacy <br />
            <span className="text-[#283b91]">Of Trust & Innovation</span>
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-700">
            From humble beginnings to becoming a leading name, Oberoi Batteries
            under the brand E-tron has built a reputation of quality and
            reliability for decades.
          </p>

          {/* Bullet Points with animation */}
          <motion.ul
            className="mt-5 sm:mt-6 space-y-2 sm:space-y-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {points.map((point, idx) => (
              <motion.li
                key={idx}
                className="flex items-center gap-2 sm:gap-3 text-gray-800 text-sm sm:text-base md:text-lg"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <FaCheckCircle className="text-[#283b91]" size={16} />
                {point}
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-5 sm:mt-6 bg-[#283b91] hover:bg-[#1f2a75] text-white font-semibold 
              px-4 py-2 sm:px-6 sm:py-3 rounded shadow-md transition text-sm sm:text-base md:text-lg"
          >
            Explore About Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
