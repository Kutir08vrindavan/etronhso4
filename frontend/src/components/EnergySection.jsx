// src/components/EtronSection.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Beaker, Droplet, FlaskConical } from "lucide-react";

// Variants for heading animation
const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.05,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function EtronSection() {
  //  Array of images
  const images = ["/e-4444.jpg", "/2222.png", "/8888.png"];
  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  //  Auto change image (pause on hover) every 3 seconds
  useEffect(() => {
    if (isPaused) return; // pause when hovered
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, images.length]);

  // ✅ Increased uniform fixed height for all images
  const imageHeight = "h-72 sm:h-96 md:h-[32rem]";

  return (
    <section className="bg-white py-12 md:py-20 font-['Poppins'] text-[#283b91]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        
        {/* Left Image with Slideshow + Pause on Hover */}
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <img
            src={images[currentImage]}
            alt="E-tron Production"
            className={`rounded-2xl shadow-lg w-full ${imageHeight} object-cover object-center`}
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Animated Heading */}
          <motion.h2
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#d96327] leading-snug md:leading-tight inline-block"
            variants={sentence}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            {"Innovative Solutions".split("").map((char, index) => (
              <motion.span key={index} variants={letter}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>

          {/* Paragraph */}
          <p className="mt-4 text-sm sm:text-base md:text-lg">
            The Oberoi family has been a prominent name in the battery industry since 1968,
            focusing on innovation, safety, and quality in all our products.
          </p>

          {/* Shakti Plants Bullet List */}
          <div className="mt-4 text-xs sm:text-sm md:text-base">
            <p className="mb-2 font-semibold text-[#d96327] text-lg sm:text-xl md:text-2xl">
              E-Tron Shakti Acid Dilution Plants:
            </p>

            <ul className="list-disc list-inside space-y-1 mb-3 marker:text-[#d96327]">
              <li><b>E-Tron Shakti Acid Dilution Plants-2222</b></li>
              <li><b>E-Tron Shakti Acid Dilution Plants-4444</b></li>
              <li><b>E-Tron Shakti Acid Dilution Plants-8888</b></li>
            </ul>
            <p>
              These plants are designed to ensure consistent acid quality, safe handling,
              and efficient battery production. With decades of expertise, E-Tron continues
              to innovate with advanced electrolyte systems and water charging technology,
              making us a trusted leader in North India’s battery industry.
            </p>
          </div>

          {/* Features */}
          <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <FlaskConical className="text-[#283b91] w-6 h-6 md:w-8 md:h-8" />
              <span className="font-semibold text-sm sm:text-base">Acid Dilution Plant</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Beaker className="text-[#283b91] w-6 h-6 md:w-8 md:h-8" />
              <span className="font-semibold text-sm sm:text-base">Electrolyte</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Droplet className="text-[#283b91] w-6 h-6 md:w-8 md:h-8" />
              <span className="font-semibold text-sm sm:text-base">Water Charging Tub</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
