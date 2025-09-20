// src/pages/Electrolyte.jsx
import { Beaker } from "lucide-react";
import { motion } from "framer-motion";

export default function Electrolyte() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto font-['Poppins']">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-4 mb-8"
      >
        <Beaker className="w-12 h-12 text-[#d96327]" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Electrolyte
        </h1>
      </motion.div>

      {/* Description */}
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        We manufacture and supply{" "}
        <span className="font-semibold">high-quality electrolyte</span> suitable
        for a wide range of batteries. Our electrolyte ensures optimal chemical
        reactions, resulting in consistent performance, safety, and efficiency
        for both industrial and automotive batteries.
      </p>

      {/* Key Features */}
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <div className="p-6 border rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#d96327] mb-2">
            Purity Guaranteed
          </h3>
          <p className="text-gray-600">
            Processed under strict quality control to achieve high chemical
            purity for maximum efficiency.
          </p>
        </div>

        <div className="p-6 border rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#d96327] mb-2">
            Reliable Supply
          </h3>
          <p className="text-gray-600">
            Available in bulk and custom packaging, ensuring uninterrupted
            production cycles.
          </p>
        </div>
      </div>
    </section>
  );
}
