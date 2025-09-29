// src/components/DilutionTank2222.jsx
export default function DilutionTank2222() {
  return (
    <>
      {/* ✅ Details Section with Image + Text */}
      <section className="py-20 px-6 max-w-6xl mx-auto font-['Poppins']">
        <h2 className="text-3xl font-bold text-[#d96327] mb-12 text-center">
          E-tron Shakti Dilution Plant-2222
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="flex justify-center">
            <img
              src="/2222.png" // 👉 replace with actual product image
              alt="E-tron Shakti 2222 Dilution Plant"
              className="rounded-2xl shadow-lg w-full max-w-md h-[520px] object-cover"
            />
          </div>

          {/* Product Text */}
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              <strong>The E-tron Shakti Dilution Plant-2222</strong> is our
              compact solution, ideal for small to medium-scale operations
              requiring precise acid dilution.
            </p>

            <p>
              <strong>Quantity:</strong> Capable of diluting{" "}
              <span className="text-[#d96327] font-semibold">
                2000 – 2200 Liters
              </span>{" "}
              of acid per batch, making it suitable for consistent, moderate
              production volumes.
            </p>

            <p>
              <strong>Support:</strong> Features a robust{" "}
              <span className="text-[#d96327] font-semibold">
                MS (Mild Steel) Frame
              </span>{" "}
              that provides sturdy structural integrity and long-term
              durability, ensuring stable operation.
            </p>

            <p>
              <strong>Tank Capacity:</strong> Designed with a total tank
              capacity of{" "}
              <span className="text-[#d96327] font-semibold">2500 Liters</span>
              , allowing for efficient operations with a practical usable volume
              of approximately 90% to prevent overflow and ensure optimal
              mixing.
            </p>

            <p>
              <strong>Dust Control:</strong> Operates as a{" "}
              <span className="text-[#d96327] font-semibold">
                98% dust-free
              </span>{" "}
              plant, significantly minimizing airborne particulate matter, which
              is crucial for maintaining acid purity and ensuring a safer
              working environment.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
