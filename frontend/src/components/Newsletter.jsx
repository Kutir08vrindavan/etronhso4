// src/components/Newsletter.jsx
import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="relative w-full min-h-[220px] sm:min-h-[250px] md:min-h-[320px] font-['Poppins'] flex items-center justify-center">
      {/* ✅ Background Image from public folder */}
      <img
        src="/Tomar.png"
        alt="Newsletter Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl md:text-2xl font-semibold mb-4"
        >
          Subscribe Our Newsletter
        </motion.h2>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center items-center w-full max-w-sm"
        >
          <input
            type="email"
            placeholder="E-mail"
            className="px-3 py-2 w-full sm:w-56 border border-yellow-500 focus:outline-none rounded-md sm:rounded-l-md sm:rounded-r-none text-gray-800 text-sm"
          />
          <button
            type="submit"
            className="mt-2 sm:mt-0 sm:ml-0 w-full sm:w-auto text-white font-medium px-4 py-2 rounded-md sm:rounded-r-md sm:rounded-l-none text-sm transition"
            style={{ backgroundColor: "#d96327" }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#c85721")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#d96327")
            }
          >
            Subscribe
          </button>
        </motion.form>
      </div>
    </section>
  );
}
