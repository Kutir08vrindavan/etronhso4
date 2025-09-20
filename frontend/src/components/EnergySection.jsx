// src/components/EtronSection.jsx
import { motion } from "framer-motion";
import { Battery, Beaker, Droplet, FlaskConical } from "lucide-react";

export default function EtronSection() {
  return (
    <section className="bg-white py-12 md:py-20 font-['Poppins']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="/A.png"
            alt="E-tron Production"
            className="rounded-2xl shadow-lg w-full h-52 sm:h-72 md:h-full object-cover"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 leading-snug md:leading-tight">
            E-tron provide Innovative Solutions
          </h2>

          {/* Paragraphs */}
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600">
            E-tron has been a trusted name in battery manufacturing since 1968,
            focusing on innovation, safety, and quality in all our products.
          </p>

          <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-gray-500">
            Our proprietary <b>Shakti Acid Dilution Plants</b> – 2222, 4444, and 8888 –
            are designed to ensure consistent acid quality, safe handling, and efficient
            battery production. With decades of expertise, E-tron continues to innovate
            with advanced electrolyte systems and water charging technology, making us a
            trusted leader in North India’s battery industry.
          </p>

          {/* Features */}
          <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <FlaskConical className="text-[#d96327] w-6 h-6 md:w-8 md:h-8" />
              <span className="font-semibold text-sm sm:text-base">Acid Dilution Plant</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Beaker className="text-[#d96327] w-6 h-6 md:w-8 md:h-8" />
              <span className="font-semibold text-sm sm:text-base">Electrolyte</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Droplet className="text-[#d96327] w-6 h-6 md:w-8 md:h-8" />
              <span className="font-semibold text-sm sm:text-base">Water Charging Tub</span>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 md:gap-6">
            <div className="bg-[#d96327] text-white px-4 py-3 md:px-6 md:py-4 rounded-xl shadow-lg flex items-center gap-3">
              <Battery className="w-6 h-6 md:w-8 md:h-8" />
              <div>
                <h3 className="text-lg md:text-2xl font-bold">224k</h3>
                <p className="text-xs md:text-sm">Projects Completed</p>
              </div>
            </div>
            <div className="bg-[#283b91] text-white px-4 py-3 md:px-6 md:py-4 rounded-xl shadow-lg flex items-center gap-3">
              <Beaker className="w-6 h-6 md:w-8 md:h-8" />
              <div>
                <h3 className="text-lg md:text-2xl font-bold">983</h3>
                <p className="text-xs md:text-sm">Satisfied Clients</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
