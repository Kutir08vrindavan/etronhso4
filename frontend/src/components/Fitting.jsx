// src/pages/Fitting.jsx
import { motion } from "framer-motion";
import { Wrench, ShieldCheck, Clock } from "lucide-react";

export default function Fitting() {
  return (
    <section className="py-16 px-6 bg-white font-['Poppins'] text-[#283b91]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
        
        {/* Left Side - Text + Features */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#d96327]"
          >
            Acid Dilution Tank Fitting & Installation
          </motion.h1>

          <p className="text-base sm:text-lg mt-4 text-gray-700">
            Our expert team provides safe, reliable, and efficient installation
            and fitting services for acid dilution tanks to ensure smooth
            operations and compliance with industry standards.
          </p>

          {/* Bullet Features */}
          <div className="mt-8 space-y-6">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-start gap-4"
            >
              <Wrench className="w-8 h-8 text-[#283b91] shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Professional Setup</h3>
                <p className="text-sm text-gray-600">
                  Installation carried out with precision and high safety
                  standards.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-start gap-4"
            >
              <ShieldCheck className="w-8 h-8 text-[#283b91] shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Safety Guaranteed</h3>
                <p className="text-sm text-gray-600">
                  Ensuring safe handling and acid-resistant fittings for
                  durability.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-start gap-4"
            >
              <Clock className="w-8 h-8 text-[#283b91] shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">On-Time Delivery</h3>
                <p className="text-sm text-gray-600">
                  Fast and efficient service to keep your operations running.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Image */}
        <motion.img
          src="/Fitting.png"
          alt="Fitting Service"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl shadow-lg w-full h-72 sm:h-96 md:h-[32rem] object-cover object-center"
        />
      </div>
    </section>
  );
}
