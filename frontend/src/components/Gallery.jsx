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
    
  ];

  return (
    <>
      {/* ✅ Hero Section (Banner) */}
      <section className="relative w-full h-[70vh] sm:h-screen font-['Poppins']">
        <img
          src="/GalleryBanner.png"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </section>

      {/* ✅ Feature Strip (Responsive) */}
      <section className="bg-white py-8 px-4 sm:px-6 font-['Poppins'] shadow-md relative z-20 -mt-8 sm:-mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 text-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center p-4 sm:p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              {feature.icon}
              <h3 className="mt-2 sm:mt-3 text-sm sm:text-lg font-semibold text-gray-800">
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
