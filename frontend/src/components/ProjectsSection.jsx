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
    <>
      {/* Section Heading */}
      <section className="bg-white font-['Poppins']">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12 relative">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block relative"
          >
            {/* Background line */}
            <div className="absolute inset-0 bg-[#FF8000] -z-10 h-3 top-1/2 transform -translate-y-1/2"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 relative z-10">
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
              className="bg-white shadow-lg overflow-hidden flex flex-col border-2 border-transparent hover:border-[#FF8000] transition-all duration-300"
            >
              <img
                src={proj.img}
                alt={proj.title}
                className="w-full h-64 sm:h-80 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6 sm:p-8 text-left">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3">
                  {proj.title}
                </h3>
                <p className="text-gray-600 text-base sm:text-base">{proj.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
