// src/components/AcidDilutionTankInstallation.jsx
import { Battery, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AcidDilutionTankInstallation() {
  const feature = {
    title: "Acid Dilution Storage Tank Installation & Fitting",
    desc: "Professional installation and fitting services for acid dilution storage tanks with top-notch safety and precision.",
    icon: <Battery className="w-12 h-12 transition-colors duration-300" />,
    link: "/acid-dilution-tank-installation",
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="relative group p-8 h-[420px] flex flex-col justify-between 
                 rounded-xl shadow-lg border border-gray-200 bg-white 
                 hover:bg-[#283b91] cursor-pointer overflow-hidden font-['Poppins'] 
                 max-w-sm mx-auto"
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
        <h3 className="text-xl font-semibold mb-4 text-[#d96327] group-hover:text-white transition-colors duration-300 relative z-10">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 group-hover:text-gray-100 transition-colors duration-300 relative z-10">
          {feature.desc}
        </p>
      </div>

      {/* Read More Button */}
      <div className="mt-6 flex justify-center relative z-10">
        <Link
          to={feature.link}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                     bg-[#d96327] text-white font-semibold text-sm 
                     group-hover:bg-white group-hover:text-[#283b91] 
                     transition-colors duration-300"
        >
          Read More <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}
