// src/components/ProjectsSection.jsx
import { motion } from "framer-motion";

export default function ProjectsSection() {
  const projects = [
    {
      img: "electrolyte.jpg",
      title: "Electrolyte",
      desc: "High-quality electrolyte ensuring durability and performance.",
    },
    {
      img: "watertub.jpg",
      title: "Water Charging Tub for Battery",
      desc: "Efficient water charging system designed for long-lasting use.",
    },
    {
      img: "Acid.jpg",
      title: "Acid Storage Tank",
      desc: "Reliable and secure acid storage tank for industrial needs.",
    },
  ];

  return (
    <section className="bg-[#fffaf3] font-['Poppins']">
      {/* Section Heading */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-12 relative">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block relative"
        >
          {/* Orange underline behind heading */}
          <div className="absolute inset-0 bg-[#d96327] -z-10 h-3 top-1/2 transform -translate-y-1/2"></div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#283b91] relative z-10">
            We Created a Huge <br /> Amount of Creative Projects
          </h2>
        </motion.div>
      </div>

      {/* Project Cards */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 pb-20">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col border-2 border-[#283b91]/20 hover:border-[#283b91] hover:shadow-[0_0_25px_#283b91aa] transition-all duration-300"
          >
            <img
              src={proj.img}
              alt={proj.title}
              className="w-full h-64 sm:h-80 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="p-6 sm:p-8 text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-[#283b91] mb-2 sm:mb-3">
                {proj.title}
              </h3>
              <p className="text-[#d96327] text-base sm:text-lg font-medium">
                {proj.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
