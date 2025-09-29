import React from "react";
import Newsletter from "./Newsletter"; // ✅ Import kiya

const blogs = [
  {
    id: 1,
    date: "22",
    month: "Sep",
    img: "/e-4444.jpg",
    title: "Why Acid Dilution Tanks are Essential for Safe Battery Operations",
    desc: "Understand the importance of acid dilution tanks in ensuring safety, reliability, and efficiency in battery operations.",
  },
  {
    id: 2,
    date: "30",
    month: "Dec",
    img: "/BG.png",
    title: "Water Charging Tubs: Ensuring Precision and Reliability",
    desc: "Explore how durable water charging tubs improve accuracy and extend the lifespan of batteries.",
  },
  {
    id: 3,
    date: "12",
    month: "July",
    img: "/electrolyte.jpg",
    title: "Electrolyte Quality and Its Impact on Battery Performance",
    desc: "Learn why using high-quality electrolyte is crucial for safe, long-lasting, and efficient battery performance.",
  },
];

export default function BlogSection() {
  return (
    <>
      <section className="py-12 bg-[#fdfcf9] text-center font-['Poppins']">
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#283b91] px-4">
          Our <span className="text-[#d96327]">Blogs</span>
        </h2>

        {/* Blog Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-6 md:px-12">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="relative flex flex-col rounded-xl overflow-hidden shadow-md bg-white border border-[#283b91] hover:shadow-xl hover:border-[#1f2e6e] transition-all duration-300"
            >
              {/* Blog Image */}
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-44 sm:h-48 md:h-52 object-cover"
              />

              {/* Date Badge */}
              <div className="absolute top-3 left-3 bg-[#283b91] text-white px-2 py-1 rounded-md text-center shadow">
                <span className="block text-sm font-bold">{blog.date}</span>
                <span className="block text-[#d96327] font-semibold text-xs">
                  {blog.month}
                </span>
              </div>

              {/* Blog Content */}
              <div className="p-4 flex flex-col flex-grow text-left">
                <h3 className="text-base sm:text-lg font-semibold text-[#283b91] leading-snug">
                  {blog.title}
                </h3>
                <p className="text-[#283b91] mt-2 text-xs sm:text-sm flex-grow">
                  {blog.desc}
                </p>
                <button className="mt-3 text-[#d96327] text-sm font-semibold hover:underline self-start">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Newsletter Section Below Blog */}
      <Newsletter />
    </>
  );
}
