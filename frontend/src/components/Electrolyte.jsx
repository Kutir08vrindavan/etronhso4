// src/components/Electrolyte.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Electrolyte() {
  return (
    <>
      {/* ✅ Two Column Section (Text Left, Image Right) */}
      <section className="py-20 px-6 max-w-6xl mx-auto font-['Poppins'] grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-[#283b91]">
            Why Our Electrolyte?
          </h2>
          <p className="text-lg text-[#283b91] font-medium leading-relaxed">
            Our <strong>Electrolyte (Sulfuric Acid - H₂SO₄)</strong> is the
            lifeblood of any lead-acid battery. At Oberoi, we produce it with
            uncompromising quality, meticulously processed and purified to ensure
            the highest standards of chemical composition and consistency.
          </p>
          <p className="text-lg text-[#283b91] font-medium leading-relaxed">
            The purity and specific gravity of the electrolyte directly impact the{" "}
            <span className="text-[#283b91] font-semibold">
              performance, lifespan, and reliability of batteries
            </span>
            .
          </p>
          <p className="text-lg text-[#283b91] font-medium leading-relaxed">
            Our electrolyte ensures optimal conductivity, minimizes
            self-discharge, and prevents premature degradation, leading to{" "}
            <span className="text-[#283b91] font-semibold">
              superior battery efficiency and durability
            </span>
            .
          </p>
          <p className="text-lg text-[#283b91] font-medium leading-relaxed">
            We guarantee a consistent and reliable product, vital for seamless
            battery manufacturing processes, allowing our clients to produce
            batteries that stand the test of time.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="/Elect.png"
            alt="Electrolyte"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </motion.div>
      </section>

      {/* ✅ Product Types Grid Section */}
      <section className="py-20 bg-gray-50 font-['Poppins']">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#283b91] mb-12 text-center"
          >
            Types of Electrolyte
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Water White */}
            <Link to="/water-dilute">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-white border-4 border-[#283b91] rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl hover:border-[5px] transition-all duration-500"
              >
                <div className="overflow-hidden">
                  <img
                    src="/WW.png"
                    alt="Water White Electrolyte"
                    className="w-full h-72 object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-[#283b91] mb-2">
                    Water White (WW)
                  </h3>
                  <p className="text-sm text-gray-600">
                    Diluted electrolyte solution for controlled applications and
                    specific battery requirements.
                  </p>
                </div>
              </motion.div>
            </Link>

            {/* Laboratory Grade */}
            <Link to="/lab-grade">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-white border-4 border-[#283b91] rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl hover:border-[5px] transition-all duration-500"
              >
                <div className="overflow-hidden">
                  <img
                    src="/WhiteTank.png"
                    alt="Laboratory Grade Electrolyte"
                    className="w-full h-72 object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-[#283b91] mb-2">
                    Laboratory Grid (LR)
                  </h3>
                  <p className="text-sm text-gray-600">
                    High-purity electrolyte designed for accurate lab testing and
                    research experiments.
                  </p>
                </div>
              </motion.div>
            </Link>

            {/* Battery Grade */}
            <Link to="/battery-grade">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-white border-4 border-[#283b91] rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl hover:border-[5px] transition-all duration-500"
              >
                <div className="overflow-hidden">
                  <img
                    src="/Blue.png"
                    alt="Battery Grade Electrolyte"
                    className="w-full h-72 object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-[#283b91] mb-2">
                    Battery Grid (BG)
                  </h3>
                  <p className="text-sm text-gray-600">
                    Specially formulated for use in lead-acid batteries, ensuring
                    long life and reliable performance.
                  </p>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
