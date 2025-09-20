// src/App.jsx
import React from "react";

function App() {
  return (
    <div className="font-['Poppins']">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-white">
        {/* Background Image */}
        <img
          src="/About.png"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative text-center px-6 z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to E-tron
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Innovation • Trust • Excellence since 1968
          </p>
          <button className="px-6 py-3 bg-white text-[#283b91] rounded-2xl shadow-lg font-semibold hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Text Section */}
      <section className="py-16 px-6 md:px-20 bg-[#e6f2ff] text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Journey</h2>
          <div className="space-y-6 text-lg leading-relaxed text-justify">
            <p>
              The Oberoi family has been a trusted name in the battery industry since 1968,
              building a legacy of excellence under the brand name E-tron. With a strong
              vision and commitment to innovation, we took a significant step in 1981,
              establishing our first battery manufacturing unit. Despite the early challenges,
              our determination and dedication to quality helped us overcome obstacles and
              create products that stood out in the market.
            </p>
            <p>
              In 1985, we strengthened our presence by opening our showroom at Gokhle Market,
              Kashmere Gate, officially registering Oberoi Batteries as a prominent player
              in the industry. This milestone marked the beginning of our steady growth and
              customer trust.
            </p>
            <p>
              Continuing our journey, we expanded into inverter battery manufacturing through
              our unit at M/s Parwat Industries, further diversifying our offerings while
              maintaining a strong focus on reliability and customer satisfaction.
            </p>
            <p>
              A major leap came in 2013, when E-tron established an advanced acid dilution
              plant dedicated to serving North India’s battery industry. This enabled us to
              deliver batteries with superior quality and performance.
            </p>
            <p>
              Staying true to our commitment to innovation, in 2023, we further expanded by
              setting up a state-of-the-art acid dilution and water charging plant to meet
              the evolving demands of the battery sector.
            </p>
            <p>
              Today, with decades of experience and a passion for excellence, E-tron by
              Oberoi Marketing Pvt. Ltd. stands as a symbol of trust, quality, and innovation
              in the battery industry. Our journey from humble beginnings to becoming a
              leading name reflects our unwavering promise to deliver only the best to our
              valued customers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
