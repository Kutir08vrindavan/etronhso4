// src/components/AcidDilutionTankInstallation.jsx
import { Battery } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AcidDilutionTankInstallation() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#fdfdfd] font-['Poppins']">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#283b91] text-center mb-10 sm:mb-12">
          Our Service
        </h2>

        {/* ✅ Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center">
          {/* ✅ Left Side Text */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="order-2 md:order-1 text-center md:text-left"
          >
            <Battery className="w-10 h-10 sm:w-12 sm:h-12 text-[#283b91] mx-auto md:mx-0 mb-4" />
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#d96327] leading-snug">
              Acid Dilution Storage Tank Installation & Fitting
            </h3>
            <p className="mt-3 sm:mt-4 text-[#283b91] text-sm sm:text-base md:text-lg leading-relaxed">
              Professional installation and fitting services for acid dilution
              storage tanks with top-notch safety and precision.
            </p>

            {/* CTA */}
            <Link to="/fitting">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-5 sm:mt-6 bg-[#283b91] hover:bg-[#d96327] text-white font-semibold 
                  px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-md transition text-sm sm:text-base md:text-lg"
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>

          {/* ✅ Right Side Image */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <img
              src="/Fitting.png" // 👉 replace with your actual image
              alt="Acid Dilution Tank Installation"
              className="rounded-xl shadow-lg w-full h-56 sm:h-72 md:h-80 lg:h-96 object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
