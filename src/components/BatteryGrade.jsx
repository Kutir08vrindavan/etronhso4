import React from "react";

const columns = [
  "Sl. No",
  "Parameters",
  "Unit",
  "1.140",
  "1.200",
  "1.220",
  "1.400",
  "1.830 with 10 ppm",
];

const rows = [
  ["1", "Specific gravity @ 27°C", "-", "1.135-1.145", "1.190-1.210", "1.210-1.230", "1.390-1.410", "1.820-1.840"],
  ["2", "Residue matter", "PPM", "60", "90", "90", "150", "300"],
  ["3", "Color", "Visual", "Colorless", "", "", "", ""],
  ["4", "Copper (Cu)", "PPM", "4", "6", "6", "10", "20"],
  ["", "Iron (Fe)", "PPM", "2", "3", "3", "6", "10"],
  ["", "Manganese (Mn)", "PPM", "0.15", "0.25", "0.25", "0.4", "0.5"],
  ["", "Chloride (Cl)", "PPM", "1", "1.5", "1.5", "3", "5"],
  ["", "Organic", "PPM", "Nil", "", "", "", ""],
];

export default function GradeBTable() {
  return (
    <div className="p-6 max-w-full overflow-x-auto font-sans">
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">
        Battery Grid Sulfuric Acid — Grade B 
      </h3>

      <div className="rounded-xl border border-gray-300 shadow-md overflow-hidden">
        <table className="min-w-[900px] w-full border-collapse text-sm">
          <thead className="bg-gray-100">
            <tr>
              {columns.map((col) => (
                <th
                  key={col}
                  className="px-4 py-2 text-left font-semibold text-gray-700 border"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`px-4 py-2 border ${
                      j === 1 ? "font-medium text-gray-800" : "text-gray-700"
                    }`}
                  >
                    {cell || "-"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-gray-600 mt-3">
        Notes: Values are PPM where indicated. Specific gravity measured at 27°C.
      </p>
    </div>
  );
}
