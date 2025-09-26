// src/components/AcidStorageTank.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

export default function AcidStorageTank() {
  const purposePoints = [
    "Safely dilute concentrated acid to desired strength",
    "Ensure accurate concentration levels for industrial processes",
    "Prevent hazards of direct handling of concentrated acid",
  ];

  const products = [
    {
      id: "2222",
      title: "Acid Dilution Plant 2222",
      desc: "Compact design ideal for small-scale applications. Built with corrosion-resistant materials ensuring safety and reliability.",
    },
    {
      id: "4444",
      title: "Acid Dilution Plant 4444",
      desc: "Medium-capacity tank designed for industrial use. Provides efficient dilution with advanced cooling and safety systems.",
    },
    {
      id: "8888",
      title: "Acid Dilution Plant 8888",
      desc: "Heavy-duty solution for large-scale plants. Engineered for continuous operation, superior durability, and environmental protection.",
    },
  ];

  return (
    <div className="font-['Poppins']">
      {/* ✅ Main Headline */}
      <section className="py-16 bg-white text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-[#d96327]"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Acid Dilution Plant
        </motion.h1>
      </section>

      {/* ✅ Purpose Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto md:flex md:items-center md:gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#283b91] mb-6">
              Purpose of Acid Dilution Plant
            </h2>
            <ul className="space-y-4 text-lg text-gray-700">
              {purposePoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#d96327] mt-1">
                    <FaCheckCircle />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center mt-10 md:mt-0"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/e-4444.jpg"
              alt="Acid Dilution Plant"
              className="rounded-lg shadow-lg w-full max-w-md h-[420px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ✅ Products Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#d96327] mb-12">
            E-tron Shakti Dilution Plants
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {products.map((tank, i) => (
              <Link
                key={i}
                to={`/dilution-tank-${tank.id}`}
                className="flex flex-col justify-between border-2 border-[#283b91] bg-white shadow-lg rounded-2xl p-8 font-['Poppins'] hover:shadow-2xl hover:border-[#d96327] hover:bg-[#fff5f0] hover:-translate-y-3 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-[#283b91] mb-4">{tank.title}</h3>
                <p className="text-[#2d2d2d] leading-relaxed font-semibold">{tank.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
