// src/components/AcidDilutionTankInstallation.jsx
import { Battery } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AcidDilutionTankInstallation() {
  return (
    <section className="py-16 px-6 bg-[#fdfdfd] font-['Poppins']">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#283b91] text-center mb-12">
          Our Service
        </h2>

        {/* ✅ Grid Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* ✅ Left Side Text */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Battery className="w-12 h-12 text-[#283b91] mb-4" />
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#d96327]">
              Acid Dilution Storage Tank Installation & Fitting
            </h3>
            <p className="mt-4 text-[#283b91] text-base sm:text-lg">
              Professional installation and fitting services for acid dilution
              storage tanks with top-notch safety and precision.
            </p>

            {/* CTA */}
            <Link to="/acid-dilution-tank-installation">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 bg-[#283b91] hover:bg-[#d96327] text-white font-semibold 
                  px-6 py-3 rounded-lg shadow-md transition text-base sm:text-lg"
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
          >
            <img
              src="/Fitting.png" // 👉 replace with your actual image
              alt="Acid Dilution Tank Installation"
              className="rounded-xl shadow-lg w-full h-72 sm:h-96 object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
