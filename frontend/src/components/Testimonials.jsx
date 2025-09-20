// src/components/Testimonials.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Working with E-tron was an excellent experience. Their battery solutions are reliable and truly innovative.",
    name: "Rohit Saini",
    role: "Business Owner",
  },
  {
    id: 2,
    text: "I am very satisfied with the quality and professionalism. The products exceeded my expectations.",
    name: "Aditya Panchal",
    role: "Industrial Client",
  },
  {
    id: 3,
    text: "E-tron’s support team is amazing! I’m saving costs and getting better performance with their technology.",
    name: "Anjali Tomar",
    role: "Entrepreneur",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-[#FFFCF7] font-['Poppins']">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-[#d96327]">Thoughts</span> Of Our Satisfied
          Clients <br />
          <span className="text-[#283b91]">About Us</span>
        </h2>

        {/* Testimonial Card */}
        <motion.div
          key={testimonials[current].id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#FFF7E6] shadow-lg rounded-lg p-10 mx-auto max-w-3xl"
        >
          <Quote className="w-12 h-12 text-[#283b91] mx-auto mb-6" />
          <p className="text-lg font-medium text-gray-800">
            {testimonials[current].text}
          </p>

          {/* Name & Role */}
          <div className="mt-6 flex flex-col items-center">
            <h4 className="text-xl font-semibold text-[#d96327]">
              {testimonials[current].name}
            </h4>
            <span className="text-sm text-gray-600">
              {testimonials[current].role}
            </span>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#d96327] text-white p-3 rounded-full hover:bg-[#283b91] transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#d96327] text-white p-3 rounded-full hover:bg-[#283b91] transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
