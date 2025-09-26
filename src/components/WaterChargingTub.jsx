// src/components/WaterChargingTub.jsx
import { motion } from "framer-motion";

export default function WaterChargingTub() {
  return (
    <>
      {/* ✅ Products Section */}
      <section className="py-24 bg-gray-50 font-['Poppins']">
        <div className="max-w-6xl mx-auto px-6 space-y-24">
          {/* Top Main Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#283b91]">
              Water Charging Tubs
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Durable and efficient solutions for safe battery water charging and management.
            </p>
          </div>

          {/* Motorcycle Battery Tub */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <img
              src="/watercharging.jpg"
              alt="Motorcycle Battery Water Charging Tub"
              className="w-full h-[32rem] object-cover rounded-2xl shadow-lg"
            />
            <div>
              <h2 className="text-3xl font-bold text-[#283b91] mb-4">
                Motorcycle Battery Water Charging Tub
              </h2>
              <p className="leading-relaxed text-lg mb-4 text-[#283b91] font-medium">
                A protective case that keeps motorcycle batteries safe, secure,
                and organized.
              </p>
              <ul className="space-y-2 list-disc list-inside text-[#283b91] text-lg font-medium">
                <li>
                  <span className="text-[#d96327] font-bold">Protection:</span>{" "}
                  Shields against shocks, vibrations, water, and dust.
                </li>
                <li>
                  <span className="text-[#d96327] font-bold">Organization:</span>{" "}
                  Keeps the electrical system neat and stable.
                </li>
                <li>
                  <span className="text-[#d96327] font-bold">Corrosion Resistance:</span>{" "}
                  Rust-proof materials extend battery life.
                </li>
                <li>
                  <span className="text-[#d96327] font-bold">Space Saving:</span>{" "}
                  Some designs integrate other electrical parts for a cleaner setup.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* NS40 to IT Battery Tub */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-[#283b91] mb-4">
                NS40 to IT Battery Water Charging Tub
              </h2>
              <p className="leading-relaxed text-lg mb-4 text-[#283b91] font-medium">
                A special container designed to hold and manage the electrolyte
                and water charging process of medium to large automotive and
                industrial batteries such as NS40, IT, and similar models.
              </p>
              <ul className="space-y-2 list-disc list-inside text-[#283b91] text-lg font-medium">
                <li>
                  <span className="text-[#d96327] font-bold">Size Compatibility:</span>{" "}
                  Built to fit larger battery types (NS40 to IT).
                </li>
                <li>
                  <span className="text-[#d96327] font-bold">Durability:</span>{" "}
                  Made from strong, chemical-resistant materials to handle heavy-duty use.
                </li>
                <li>
                  <span className="text-[#d96327] font-bold">Efficient Charging:</span>{" "}
                  Helps maintain proper water levels during charging cycles.
                </li>
                <li>
                  <span className="text-[#d96327] font-bold">Protection:</span>{" "}
                  Prevents spills, leakage, and ensures safe handling.
                </li>
                
              </ul>
            </div>
            <img
              src="/NS40.png"
              alt="NS40 to IT Battery Water Charging Tub"
              className="order-1 md:order-2 w-full h-[32rem] object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
