// src/components/DilutionTank4444.jsx
export default function DilutionTank4444() {
  return (
    <>
      {/* ✅ Details Section with Image Left + Text Right */}
      <section className="py-20 px-6 max-w-6xl mx-auto font-['Poppins']">
        <h2 className="text-3xl font-bold text-[#d96327] mb-12 text-center">
          E-tron Shakti Dilution Plant - 4444
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="flex justify-center">
            <img
              src="/e-4444.jpg" // 👉 replace with actual product image
              alt="E-tron Shakti Dilution Plant - 4444"
              className="rounded-2xl shadow-lg w-full max-w-md h-[450px] object-cover"
            />
          </div>

          {/* Product Text */}
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              <strong>The E-tron Shakti Dilution Plant - 4444</strong> offers a
              mid-range capacity, balancing footprint with increased output for
              growing production needs.
            </p>

            <p>
              <strong>Quantity:</strong> Processes up to{" "}
              <span className="text-[#d96327] font-semibold">4500 Liters</span>{" "}
              of acid, making it a versatile option for various battery
              manufacturing scales.
            </p>

            <p>
              <strong>Support:</strong> Supported by a durable{" "}
              <span className="text-[#d96327] font-semibold">
                MS (Mild Steel) Frame
              </span>
              , providing the necessary stability and resilience for continuous
              operation.
            </p>

            <p>
              <strong>Tank Capacity:</strong> Features a generous total tank
              capacity of{" "}
              <span className="text-[#d96327] font-semibold">5000 Liters</span>,
              with a 90% usable volume, allowing for efficient batch processing.
            </p>

            <p>
              <strong>Dust Control:</strong> Maintains a{" "}
              <span className="text-[#d96327] font-semibold">
                98% dust-free environment
              </span>
              , ensuring the integrity of the electrolyte and contributing to
              workplace safety and cleanliness.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
