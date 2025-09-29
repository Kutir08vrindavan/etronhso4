// src/components/OurProducts.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Banner from "./Banner";

export default function Products() {
  const products = [
    {
      name: "Acid Storage Tank",
      img: "/Storage.jpg",
      link: "/acid-storage-tank",
    },
    {
      name: "E-Tron Shakti Acid Dilution Plant-2222",
      img: "/2222.png",
      link: "/dilution-tank-2222",
    },
    {
      name: "E-Tron Shakti Acid Dilution Plant-4444",
      img: "/e-4444.jpg",
      link: "/dilution-tank-4444",
    },
    {
      name: "E-Tron Shakti Acid Dilution Plant-8888",
      img: "/8888.png",
      link: "/dilution-tank-8888",
    },
    {
      name: "Electrolyte",
      img: "/Elect.png",
      link: "/electrolyte",
    },
    {
      name: "Water White",
      img: "/WW.png",
      link: "/water-dilute",
    },
    {
      name: "Laboratory Grid",
      img: "/WhiteTank.png",
      link: "/lab-grade",
    },
    {
      name: "Battery Grid",
      img: "/Blue.png",
      link: "/battery-grade",
    },
    {
      name: "NS40 to IT Battery Water Charging Tub",
      img: "/NS40.png",
      link: "/water-charging-tub",
    },
  ];

  return (
    <>
      {/* Products Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 font-['Poppins']">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#d96327]">
            Our Products
          </h2>
          <p className="mt-3 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Explore our wide range of high-quality industrial products designed
            for durability, safety, and performance.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-2xl shadow-md bg-white flex flex-col"
            >
              {/* Product Image */}
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-56 sm:h-64 object-cover rounded-t-2xl"
              />

              {/* Content */}
              <div className="p-5 text-center flex flex-col justify-between flex-1">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
                  {product.name}
                </h3>

                <div className="flex justify-center">
                  <Link
                    to={product.link}
                    className="px-5 py-2 bg-[#d96327] text-white font-semibold rounded-lg hover:bg-[#bf4e1d] transition-all duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Banner Section */}
      <Banner />
    </>
  );
}
