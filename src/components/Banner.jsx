// src/components/Banner.jsx
import { motion } from "framer-motion";
import CardSection from "./CardSection"; // ✅ Import CardSection

export default function Banner() {
  return (
    <>
      {/* ✅ Banner Section */}
      <section className="bg-black text-white py-16 px-6 font-['Poppins'] text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="mb-8 text-lg">
            Contact us today for a free consultation and get a quote instantly.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-[#d96327] text-white font-semibold rounded-2xl shadow-lg hover:bg-[#bf4e1d] transition"
          >
            Get a Quote
          </a>
        </motion.div>
      </section>

      {/* ✅ Card Section Below Banner */}
      <CardSection />
    </>
  );
}
