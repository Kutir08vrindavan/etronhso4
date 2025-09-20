// src/components/Banner.jsx
import React from "react";

export default function Banner() {
  return (
    <section className="bg-white w-full py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Left Text */}
        <div className="md:w-1/2 text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Welcome to Our Website
          </h1>
          <p className="text-gray-700 mb-6">
            Discover our amazing products and services designed to make your life easier and better.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

        {/* Right Image or Illustration */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src="/E.png" // replace with your image path
            alt="Banner"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
