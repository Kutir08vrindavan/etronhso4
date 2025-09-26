// src/components/AcidStorageTank.jsx
import { Link } from "react-router-dom";

export default function AcidStorageTank() {
  return (
    <>
      {/* ✅ Hero Section */}
      <section className="relative h-[90vh] font-['Poppins']">
        <img
          src="/Banner.png"
          alt="Acid Storage Tank"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>

      {/* ✅ About Section */}
      <section className="py-20 px-6 font-['Poppins'] bg-[#fffaf3]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#d96327] mb-6">
              What is an Acid Storage Tank?
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-[#283b91] font-medium">
              An <span className="font-bold">acid storage tank</span> is a
              specially designed industrial container built to safely store
              corrosive chemicals such as{" "}
              <span className="font-bold">sulfuric, hydrochloric, or nitric acid</span>.
              These tanks are constructed with{" "}
              <span className="font-bold">corrosion-resistant materials</span>{" "}
              like FRP, HDPE, or rubber-lined steel to ensure durability,
              chemical safety, and long service life.
            </p>
          </div>

          {/* Right Side Image */}
          <div className="flex justify-center">
            <img
              src="/e-4444.jpg" // Replace with Acid Storage Tank image
              alt="Acid Storage Tank"
              className="rounded-lg shadow-lg w-full max-w-md h-[420px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ✅ How It Works Section (Left Image + Right Text) */}
      <section className="py-20 px-6 bg-gray-50 font-['Poppins']">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side Image */}
          <div className="flex justify-center">
            <img
              src="/how-it-works.jpg"
              alt="Acid Storage Tank Working"
              className="rounded-lg shadow-lg w-full max-w-md h-[420px] object-cover"
            />
          </div>

          {/* Right Side Text */}
          <div>
            <h2 className="text-3xl font-bold text-[#d96327] mb-6">
              How It Works
            </h2>
            <ul className="list-disc list-inside text-[#283b91] text-lg md:text-xl font-medium space-y-4">
              <li>
                <span className="font-bold">Material Selection:</span> Tanks are
                built using FRP, HDPE, or rubber-lined steel for maximum
                corrosion resistance.
              </li>
              <li>
                <span className="font-bold">Design:</span> Cylindrical or
                rectangular designs ensure strength and optimized space usage.
              </li>
              <li>
                <span className="font-bold">Safety Features:</span> Includes
                venting, level indicators, and secondary containment to prevent
                leaks or overflows.
              </li>
              <li>
                <span className="font-bold">Applications:</span> Widely used in
                chemical, fertilizer, and water treatment industries for safe
                acid handling.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ✅ CTA Section */}
      <section className="py-16 bg-[#d96327] text-white text-center font-['Poppins']">
        <h2 className="text-3xl font-bold mb-4">Need a Customized Acid Storage Tank?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Our experts design and manufacture acid storage tanks tailored to your
          industrial requirements, ensuring maximum safety and durability.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-white text-[#d96327] px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </section>
    </>
  );
}
