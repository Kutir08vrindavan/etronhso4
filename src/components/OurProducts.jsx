// src/components/Features.jsx
import { Battery, Droplet, FlaskConical, Beaker, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function FeatureCard({ feature }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="relative group p-8 h-[420px] flex flex-col justify-between 
                 rounded-xl shadow-lg border-[3px] border-[#d96327] bg-white 
                 hover:bg-[#283b91] hover:border-[#283b91] cursor-pointer 
                 overflow-hidden font-['Poppins'] transition-all duration-300
                 hover:shadow-[0_0_20px_#283b91]"
    >
      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-0 h-0 border-t-[70px] border-l-[70px] 
                      border-t-[#d96327] border-l-transparent opacity-0 
                      group-hover:opacity-100 transition-opacity duration-300"></div>

      <div>
        {/* Icon */}
        <div className="flex justify-center mb-6 text-[#d96327] group-hover:text-white transition-colors duration-300 relative z-10">
          {feature.icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-4 text-[#d96327] group-hover:text-white transition-colors duration-300 relative z-10">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-gray-700 font-semibold group-hover:text-gray-100 transition-colors duration-300 relative z-10">
          {feature.desc}
        </p>
      </div>

      {/* Read More Button */}
      <div className="mt-6 flex justify-center relative z-10">
        <span
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                     bg-[#d96327] text-white font-bold text-sm 
                     group-hover:bg-white group-hover:text-[#283b91] 
                     border-2 border-transparent group-hover:border-[#283b91] 
                     transition-all duration-300"
        >
          Read More <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </motion.div>
  );
}

export default function Features() {
  const features = [
    {
      title: "Acid Storage Tank",
      desc: "High-strength tanks ensuring safety, reliability, and long-lasting performance.",
      icon: <Battery className="w-12 h-12 transition-colors duration-300" />,
      link: "/acid-storage-tank",
    },
    {
      title: "Battery Acid Dilution Plant",
      desc: "Advanced plants engineered for efficient and safe acid dilution processes.",
      icon: <FlaskConical className="w-12 h-12 transition-colors duration-300" />,
      link: "/battery-acid-dilution",
    },
    {
      title: "Electrolyte",
      desc: "High-quality electrolyte ensuring safe and efficient battery performance.",
      icon: <Beaker className="w-12 h-12 transition-colors duration-300" />,
      link: "/electrolyte",
    },
    {
      title: "Water Charging Tub",
      desc: "Durable tubs designed for precise water charging and reliable usage.",
      icon: <Droplet className="w-12 h-12 transition-colors duration-300" />,
      link: "/water-charging-tub",
    },
  ];

  return (
    <>
      {/* Features Section */}
      <section className="py-20 bg-white overflow-hidden" id="features">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-extrabold mb-12 text-gray-800 font-['Poppins']"
          >
            Our <span className="text-[#d96327]">Products</span>
          </motion.h2>

          {/* All 4 Boxes in Same Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link to={feature.link} key={index} className="h-full">
                <FeatureCard feature={feature} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section Below Features */}
    </>
  );
}
