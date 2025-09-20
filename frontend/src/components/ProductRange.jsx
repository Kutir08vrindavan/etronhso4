// src/components/ProductRange.jsx
import { motion } from "framer-motion";
import {
  Droplet,
  FlaskConical,
  Box,
  Package,
  Beaker,
  Wind,
  Pipette,
  Battery,
  Database,
  Layers,
} from "lucide-react";

export default function ProductRange() {
  const products = [
    {
      title: "Electrolyte (Sulfuric Acid - H₂SO₄)",
      desc: "Our core product, meticulously processed sulfuric acid that serves as the vital electrolyte in batteries, ensuring efficient energy transfer and longevity.",
      icon: <Droplet className="w-8 h-8 text-[#d96327]" />,
    },
    {
      title: "Acid Dilution Plants",
      desc: "Flagship systems, designed for precise, automated dilution of concentrated sulfuric acid to the desired specific gravity, crucial for battery manufacturing.",
      icon: <FlaskConical className="w-8 h-8 text-[#d96327]" />,
    },
    {
      title: "Water Charging Tubs",
      desc: "Specialized tubs used for the initial filling of batteries with water or diluted acid, built for durability and chemical resistance.",
      icon: <Box className="w-8 h-8 text-[#d96327]" />,
    },
    {
      title: "Acid Storage Tanks",
      desc: "Robust and chemically resistant tanks for the safe and efficient storage of both concentrated and diluted sulfuric acid, preventing leakage and contamination.",
      icon: <Database className="w-8 h-8 text-[#d96327]" />,
    },
    {
      title: "Dilute Electrolyte",
      desc: "Pre-diluted sulfuric acid solutions, ready for use in various battery types, offering convenience and consistent quality.",
      icon: <Beaker className="w-8 h-8 text-[#d96327]" />,
    },
    {
      title: "Pumps",
      desc: "Industrial-grade pumps specifically designed for handling corrosive acids, ensuring safe and efficient transfer within the production facility.",
      icon: <Pipette className="w-8 h-8 text-[#d96327]" />,
    },
    {
      title: "HDPE Pipes",
      desc: "High-density polyethylene pipes, ideal for conveying corrosive chemicals like sulfuric acid due to their excellent resistance and durability.",
      icon: <Layers className="w-8 h-8 text-[#d96327]" />,
    },
    {
      title: "Cooling Towers",
      desc: "Essential components for dissipating heat generated during the acid dilution process, maintaining optimal temperatures for quality control.",
      icon: <Wind className="w-8 h-8 text-[#d96327]" />,
    },
    {
      title: "Plastic Pallets",
      desc: "Chemically resistant and durable pallets made from high-grade plastic, perfect for safely storing and transporting battery components and chemicals.",
      icon: <Package className="w-8 h-8 text-[#d96327]" />,
    },
    {
      title: "Plinking Tanks",
      desc: "Specialized tanks used for specific processes in battery manufacturing, such as electrolyte preparation or post-assembly treatments, designed for chemical compatibility.",
      icon: <Battery className="w-8 h-8 text-[#d96327]" />,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-[#283b91] to-[#d96327] font-['Poppins'] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-center mb-12"
        >
          Our <span className="text-yellow-300">Product Range</span>
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white text-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                {item.icon}
                <h3 className="text-lg md:text-xl font-semibold">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm md:text-base text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
