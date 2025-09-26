// src/components/HowWeWork.jsx
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    desc: "The process begins with an initial consultation to understand your requirements and goals.",
  },
  {
    number: "02",
    title: "Feasibility Study",
    desc: "The solar energy company assesses site conditions, energy needs, and project viability.",
  },
  {
    number: "03",
    title: "Customized Design",
    desc: "Based on the assessment and requirements, a tailored solar solution is designed.",
  },
  {
    number: "04",
    title: "Contracting",
    desc: "Final contracts are prepared, and the project is ready for execution with clear timelines.",
  },
];

export default function HowWeWork() {
  return (
    <section className="py-20 bg-white font-['Poppins']">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#283b91]">
          How We Work for Our Customers
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-left">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col items-start relative p-6 rounded-lg hover:shadow-xl transition-all duration-300 bg-[#d96327] text-white border-4 border-[#283b91]"
          >
            {/* Step Number */}
            <span className="absolute -top-6 left-6 text-[4rem] font-extrabold text-white/30">
              {step.number}
            </span>

            {/* STEP Label in Blue */}
            <span className="absolute -top-6 left-6 rotate-90 text-[#283b91] text-sm font-semibold">
              STEP
            </span>

            {/* Step Content */}
            <h3 className="text-xl font-bold mt-12">{step.title}</h3>
            <p className="mt-2 text-sm">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
