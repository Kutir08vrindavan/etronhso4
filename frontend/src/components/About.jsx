// src/App.jsx
import React from "react";

function App() {
  return (
    <div className="font-['Poppins']">
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[80vh] md:h-screen flex items-center justify-center">
        {/* Background Image */}
        <img
          src="/Banner.png"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>

      {/* Text Section */}
      <section className="py-12 px-4 sm:px-6 md:px-20 bg-[#e6f2ff]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#d96327]">
            Our Journey
          </h2>
          <div className="space-y-5 text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose text-justify text-[#283b91]">
            <p>
              In 1968, the Oberoi family’s business journey began under the leadership of{" "}
              <span className="text-[#d96327] font-bold">
                Late Shri Jogender Lal Oberoi
              </span>
              , the visionary founder of the Battery Group. In 1981, the family took a
              significant step forward by establishing its first battery manufacturing
              unit under the name Guru Kirpa DX, laying the foundation for decades of
              innovation, trust, and excellence in the industry.
            </p>
            <p>
              In 1985, we strengthened our presence by opening our showroom at Gokhle
              Market, Kashmere Gate, officially registering Oberoi Batteries as a
              prominent player in the industry. This milestone marked the beginning of
              our steady growth and customer trust.
            </p>
            <p>
              In 1991, the company expanded into inverter and battery manufacturing by
              establishing a new unit under M/s Electriomatic at the Anand Parvat
              Industrial Area, further diversifying its offerings while maintaining a
              strong focus on reliability and customer satisfaction.
            </p>
            <p>
              A major leap came in 2013, when E-tron established an advanced acid
              dilution plant dedicated to serving North India’s battery industry. This
              enabled us to deliver batteries with superior quality and performance.
            </p>
            <p>
              Staying true to our commitment to innovation, in 2023, we further expanded
              by setting up a state-of-the-art acid dilution and water charging plant to
              meet the evolving demands of the battery sector.
            </p>
            <p>
              Today, with decades of experience and a passion for excellence, E-tron by
              Oberoi Marketing Pvt. Ltd. stands as a symbol of trust, quality, and
              innovation in the battery industry. Our journey from humble beginnings to
              becoming a leading name reflects our unwavering promise to deliver only the
              best to our valued customers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
