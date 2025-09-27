// src/components/AboutSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 
import AcidDilutionTankInstallation from "./AcidDilutionTankInstallation"; // 👈 import kiya

export default function AboutSection() {
  const points = [
    "Legacy in the battery industry since 1968",
    "First battery manufacturing showroom in Gokhle, 1985",
    "Inverter & Battery Manufacturing Unit opening at M/S Electromatic in Anand Parbat Industrial Area",
    "Entered the acid industry in 2013, with E-tron established in 2016",
    "In 2023, started manufacturing acid dilution plants and water charging tubs for the battery industry",
  ];

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* ✅ About Section */}
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
              src="/Blue.png"
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
            {/* Animated Heading */}
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#283b91] leading-snug"
              variants={sentence}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              {"Our Legacy".split("").map((char, idx) => (
                <motion.span key={idx} variants={letter}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
              <br />
              <span className="text-[#283b91]">
                {"Of Trust & Innovation".split("").map((char, idx) => (
                  <motion.span key={idx} variants={letter}>
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
            </motion.h2>

            {/* Founder Line */}
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-semibold text-[#283b91]">
              <span className="text-[#d96327] font-bold">
                Late Shri Jogender Lal Oberoi
              </span>
              , founder of Oberoi Group, has built a reputation of quality and reliability Since 1968.
            </p>

            {/* Bullet Points */}
            <motion.ul
              className="mt-5 sm:mt-6 list-disc list-inside space-y-2 sm:space-y-3 text-[#283b91] text-sm sm:text-base md:text-lg marker:text-[#283b91]"
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
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  {point}
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA */}
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-5 sm:mt-6 bg-[#283b91] hover:bg-[#d96327] text-white font-semibold 
                  px-4 py-2 sm:px-6 sm:py-3 rounded shadow-md transition text-sm sm:text-base md:text-lg"
              >
                Explore About Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ✅ Acid Dilution Section Below About */}
      <AcidDilutionTankInstallation />
    </>
  );
}
