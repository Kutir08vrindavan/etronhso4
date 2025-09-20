// src/pages/WaterChargingTub.jsx
import { Droplet } from "lucide-react";
import { motion } from "framer-motion";

export default function WaterChargingTub() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto font-['Poppins']">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-4 mb-8"
      >
        <Droplet className="w-12 h-12 text-[#d96327]" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Water Charging Tub
        </h1>
      </motion.div>

      {/* Description */}
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Our <span className="font-semibold">Water Charging Tubs</span> are
        designed to deliver precision water charging with durability and ease of
        use. Perfect for industrial battery maintenance, these tubs ensure
        accurate water levels and long-term reliability.
      </p>

      {/* Key Features */}
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <div className="p-6 border rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#d96327] mb-2">
            Durable Build
          </h3>
          <p className="text-gray-600">
            Manufactured using high-strength, corrosion-resistant materials for
            long service life.
          </p>
        </div>

        <div className="p-6 border rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#d96327] mb-2">
            Easy Operation
          </h3>
          <p className="text-gray-600">
            User-friendly design with accurate calibration for precise water
            charging every time.
          </p>
        </div>
      </div>
    </section>
  );
}
