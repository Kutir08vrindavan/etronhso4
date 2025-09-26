// src/components/Products.jsx
import { motion } from "framer-motion";
import Banner from "./Banner"; // ✅ Import Banner component

export default function Products() {
  const products = [
    {
      name: "Premium Concrete",
      img: "/products/concrete.jpg",
      desc: "High-strength concrete for all types of construction projects.",
    },
    {
      name: "Eco-Friendly Bricks",
      img: "/products/bricks.jpg",
      desc: "Sustainable bricks made from recycled materials.",
    },
    {
      name: "Steel Beams",
      img: "/products/steel.jpg",
      desc: "Durable steel beams for safe and robust structures.",
    },
    {
      name: "Wood Panels",
      img: "/products/wood.jpg",
      desc: "High-quality wood panels for interiors and exteriors.",
    },
    {
      name: "Roofing Tiles",
      img: "/products/roof.jpg",
      desc: "Weather-resistant tiles for long-lasting roofs.",
    },
    {
      name: "Roofing Tiles",
      img: "/products/roof.jpg",
      desc: "Weather-resistant tiles for long-lasting roofs.",
    },
  ];

  return (
    <>
      {/* Products Section */}
      <section className="py-20 px-6 bg-gray-50 font-['Poppins']">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-[#d96327] mb-4">Our Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our range of high-quality products designed for excellence and durability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-2xl shadow-md bg-white flex flex-col"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-56 object-cover rounded-t-2xl"
              />
              <div className="p-6 text-center flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
                  <p className="text-gray-600 text-sm">{product.desc}</p>
                </div>
                <div className="mt-4 flex justify-center gap-4">
                  <button className="px-4 py-2 bg-[#d96327] text-white font-semibold rounded-lg hover:bg-[#bf4e1d] transition">
                    Learn More
                  </button>
                  <button className="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition">
                    Get a Quote
                  </button>
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
