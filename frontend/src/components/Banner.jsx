import { motion } from "framer-motion";

export default function Banner() {
  return (
    <>
      {/* ✅ Banner Section with Background Image */}
      <section
        className="relative text-white h-[240px] px-6 font-['Poppins'] text-center bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/quote.png')" }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl"
        >
          <h2 className="text-2xl md:text-5xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="mb-6 text-lg md:text-xl">
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
    </>
  );
}
