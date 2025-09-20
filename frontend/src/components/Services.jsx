// src/pages/Services.jsx
import { Battery, Droplet, FlaskConical, Beaker, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Services() {
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
    <section className="py-20 bg-white overflow-hidden" id="services">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 font-['Poppins']"
        >
          Our <span className="text-[#d96327]">Services</span>
        </motion.h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative group p-8 rounded-xl shadow-lg border border-gray-200 bg-white 
                         hover:bg-[#283b91] cursor-pointer overflow-hidden font-['Poppins']"
            >
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[70px] border-l-[70px] border-t-[#d96327] border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Icon */}
              <div className="flex justify-center mb-6 text-[#d96327] group-hover:text-white transition-colors duration-300 relative z-10">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-4 text-[#d96327] group-hover:text-white transition-colors duration-300 relative z-10">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 group-hover:text-gray-100 transition-colors duration-300 relative z-10">
                {feature.desc}
              </p>

              {/* Read More + Arrow */}
              <Link
                to={feature.link}
                className="mt-4 flex items-center justify-center gap-2 text-[#d96327] group-hover:text-white relative z-10"
              >
                <span className="font-semibold">Read More</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
