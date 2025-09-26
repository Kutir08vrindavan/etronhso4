// src/components/DilutionTank8888.jsx
import { motion } from "framer-motion";

export default function DilutionTank8888() {
  return (
    <>
      {/* ✅ Details Section with Text Left + Image Right + Animation */}
      <section className="py-20 px-6 max-w-6xl mx-auto font-['Poppins']">
        <h2 className="text-3xl font-bold text-[#d96327] mb-12 text-center">
          E-tron Shakti Dilution Plant - 8888
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Product Text */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-700 leading-relaxed"
          >
            <p>
              <strong>The Shakti 8888</strong> is our high-capacity workhorse,
              engineered for large-scale battery manufacturing facilities
              requiring substantial volumes of diluted acid.
            </p>

            <p>
              <strong>Quantity:</strong> Capable of handling{" "}
              <span className="text-[#d96327] font-semibold">
                8500 – 9000 Liters
              </span>{" "}
              of acid per cycle, making it ideal for high-production
              environments.
            </p>

            <p>
              <strong>Gravity Control:</strong> Features advanced controls to
              achieve precise specific gravities between{" "}
              <span className="text-[#d96327] font-semibold">1200 – 1400</span>,
              which is critical for formulating superior electrolytes.
            </p>

            <p>
              <strong>Battery Quality Focus:</strong> Engineered with features
              that contribute directly to the production of{" "}
              <span className="text-[#d96327] font-semibold">
                high-quality electrolytes
              </span>
              , directly impacting the performance and longevity of final
              batteries.
            </p>

            <p>
              <strong>Dust Control:</strong> Operates as a{" "}
              <span className="text-[#d96327] font-semibold">
                98% dust-free plant
              </span>
              , ensuring pristine acid quality and a cleaner, safer production
              area.
            </p>

            <p>
              <strong>Tank Capacity:</strong> Possesses a substantial total tank
              capacity of{" "}
              <span className="text-[#d96327] font-semibold">10,000 Liters</span>
              , with a practical usable volume of 90%, designed for large-batch
              efficiency.
            </p>

            <p>
              <strong>Max. Temperature:</strong> Built to manage and operate
              effectively up to{" "}
              <span className="text-[#d96327] font-semibold">55°C – 60°C</span>,
              accommodating exothermic reactions during dilution while
              maintaining control.
            </p>
          </motion.div>

          {/* Product Image */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src="/8888.png" // 👉 replace with actual product image
              alt="E-tron Shakti Dilution Plant 8888"
              className="rounded-2xl shadow-lg w-full max-w-md object-cover"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
