// src/components/Newsletter.jsx
import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section
      className="relative bg-cover bg-center py-16 font-['Poppins']"
      style={{ backgroundImage: "url('/Newsletter.png')" }} // replace with your image
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Subscribe Our Newsletter
        </motion.h2>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center items-center max-w-xl mx-auto"
        >
          <input
            type="email"
            placeholder="E-mail"
            className="px-4 py-3 w-full md:w-96 border border-yellow-500 focus:outline-none rounded-l-md text-gray-800"
          />
          <button
  type="submit"
  className="text-black font-semibold px-6 py-3 rounded-r-md transition"
  style={{
    backgroundColor: '#d96327',
  }}
  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#c85721')}
  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#d96327')}
>
  Subscribe
</button>

        </motion.form>
      </div>
    </section>
  );
}
