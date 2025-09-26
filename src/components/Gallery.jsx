// src/components/HeroSection.jsx
import { motion } from "framer-motion";
import { CheckCircle, Hammer, Building2, Shield, Sparkles } from "lucide-react";
import Products from "./Products"; // ✅ Import Products component

export default function HeroSection() {
  const features = [
    { icon: <CheckCircle className="w-8 h-8 text-[#d96327]" />, title: "Quality" },
    { icon: <Hammer className="w-8 h-8 text-[#d96327]" />, title: "Craftsmanship" },
    { icon: <Building2 className="w-8 h-8 text-[#d96327]" />, title: "Innovation" },
    { icon: <Shield className="w-8 h-8 text-[#d96327]" />, title: "Safety" },
    { icon: <Sparkles className="w-8 h-8 text-[#d96327]" />, title: "Excellence" },
  ];

  return (
    <>
      {/* ✅ Hero Section */}
      <section className="relative bg-gray-900 text-white min-h-screen flex items-center justify-center font-['Poppins']">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/hero-bg.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <motion.div
          className="relative z-10 text-center px-6 max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
            Building With Precision & Innovation
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8">
            Delivering excellence in construction and design with every project.
          </p>
          <motion.a
            href="#gallery"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-[#d96327] text-white font-semibold rounded-2xl shadow-lg hover:bg-[#bf4e1d] transition"
          >
            View Our Work
          </motion.a>
        </motion.div>
      </section>

      {/* ✅ Feature Strip (5 boxes) */}
      <section className="bg-white py-10 px-6 font-['Poppins'] shadow-md relative z-20 -mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              {feature.icon}
              <h3 className="mt-3 text-lg font-semibold text-gray-800">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ Products Section */}
      <Products />
    </>
  );
}
