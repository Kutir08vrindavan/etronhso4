// src/components/TeamSection.jsx
import { motion } from "framer-motion";

export default function TeamSection() {
  return (
    <section className="py-20 bg-[#fdfdfd] font-['Poppins']">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="/AmitOberoi.png"
            alt="Mr. Amit Oberoi - Founder of Etron"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover h-auto"
          />
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center md:text-left max-w-lg mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#283b91] mb-4">
            Founder of Etron
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-[#d96327] mb-4">
            Mr. Amit Oberoi
          </h3>
          <p className="text-[#283b91] leading-relaxed mb-6">
            Mr. Amit Oberoi, the visionary founder of <b>Etron</b>, has been at
            the forefront of innovation in the battery and energy solutions
            industry. With decades of expertise and a passion for technology, he
            has built a legacy rooted in trust, quality, and forward-thinking
            solutions.
          </p>
          <p className="text-[#283b91] leading-relaxed">
            Under his leadership, Etron has grown into a trusted name in
            electrolyte systems, acid dilution plants, and water charging
            technology, driving progress across North India’s battery industry.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
