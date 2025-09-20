import React from "react";
import Newsletter from "./Newsletter"; // 👈 yahan import kiya

const blogs = [
  {
    id: 1,
    date: "22",
    month: "Sep",
    img: "workflow.jpg",
    title: "How to Manage Workflow",
    desc: "Learn effective strategies to streamline project workflow and ensure smooth delivery.",
  },
  {
    id: 2,
    date: "30",
    month: "Dec",
    img: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Managing Client Relationships",
    desc: "Discover how to build strong communication channels and improve client satisfaction.",
  },
  {
    id: 3,
    date: "12",
    month: "July",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Optimizing Workflows for Teams",
    desc: "Tips to coordinate teams, track progress, and maintain productivity across projects.",
  },
];

export default function BlogSection() {
  return (
    <>
      <section className="py-16 bg-[#fdfcf9] text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold">
          Read Our Daily <span className="text-orange-500">Blog</span>
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-base sm:text-lg text-gray-600">
          Insights, strategies, and best practices to manage workflow, handle
          clients, and streamline business processes.
        </p>

        {/* Blog Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-16">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="relative rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Blog Image */}
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-64 sm:h-72 md:h-64 lg:h-72 object-cover"
              />

              {/* Date Badge */}
              <div className="absolute top-4 left-4 bg-black text-white px-3 py-2 rounded-md text-center">
                <span className="block text-lg font-bold">{blog.date}</span>
                <span className="block text-yellow-400 font-semibold text-sm">
                  {blog.month}
                </span>
              </div>

              {/* Blog Content */}
              <div className="p-5 sm:p-6 text-left">
                <h3 className="text-lg sm:text-xl font-semibold">{blog.title}</h3>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">
                  {blog.desc}
                </p>
                <button className="mt-4 text-orange-600 font-semibold hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section Below Blog */}
      <Newsletter />
    </>
  );
}
