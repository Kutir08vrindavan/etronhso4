// src/components/WorldMapSection.jsx
import { motion } from "framer-motion";

export default function WorldMapSection() {
  return (
    <section className="py-16 bg-[#FFFCF7] font-['Poppins']">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
       
        

        {/* Map Container */}
        <div className="relative w-full">
          <img
            src="/map.png" // <-- add your world map image here
            alt="World map"
            className="w-full h-auto"
          />

          {/* Location Pins */}
          <motion.div
            className="absolute top-[40%] left-[20%] transform -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-10 h-10 bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-full border-4 border-white shadow-md"></div>
          </motion.div>

          <motion.div
            className="absolute top-[35%] left-[55%] transform -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-10 h-10 bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-full border-4 border-white shadow-md"></div>
          </motion.div>

          <motion.div
            className="absolute top-[55%] left-[70%] transform -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Pin */}
            <div className="w-10 h-10 bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-full border-4 border-white shadow-md"></div>

            {/* Label */}
            <div className="mt-3 bg-red-500 text-white text-sm px-4 py-2 rounded-lg shadow-lg">
              32, Walse Street,<br /> New York, USA
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
