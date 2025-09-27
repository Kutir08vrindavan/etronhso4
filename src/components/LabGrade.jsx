// LaboratoryGrid.jsx
export default function LaboratoryGrid() {
  return (
    <section className="py-20 px-6 font-['Poppins'] bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-[#d96327] mb-4">
          Laboratory Grid - Sulfuric Acid Properties
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          The sulfuric acid material shall have the below given properties:
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-3 py-2">Sl. No</th>
              <th className="border px-3 py-2">Parameters</th>
              <th className="border px-3 py-2">Unit</th>
              <th className="border px-3 py-2">1.140</th>
              <th className="border px-3 py-2">1.200</th>
              <th className="border px-3 py-2">1.220</th>
              <th className="border px-3 py-2">1.400</th>
              <th className="border px-3 py-2">1.830</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-3 py-2">1</td>
              <td className="border px-3 py-2">Specific gravity @ 27°C</td>
              <td className="border px-3 py-2">-</td>
              <td className="border px-3 py-2">1.135-1.145</td>
              <td className="border px-3 py-2">1.190-1.210</td>
              <td className="border px-3 py-2">1.210-1.230</td>
              <td className="border px-3 py-2">1.390-1.410</td>
              <td className="border px-3 py-2">1.820-1.840</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">2</td>
              <td className="border px-3 py-2">Residue matter</td>
              <td className="border px-3 py-2">PPM</td>
              <td className="border px-3 py-2">60</td>
              <td className="border px-3 py-2">90</td>
              <td className="border px-3 py-2">90</td>
              <td className="border px-3 py-2">150</td>
              <td className="border px-3 py-2">300</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">3</td>
              <td className="border px-3 py-2">Color</td>
              <td className="border px-3 py-2">Visual</td>
              <td className="border px-3 py-2" colSpan="5">Colorless</td>
            </tr>
            <tr>
              <td className="border px-3 py-2" rowSpan="5">4</td>
              <td className="border px-3 py-2">Copper (Cu)</td>
              <td className="border px-3 py-2">PPM</td>
              <td className="border px-3 py-2">4</td>
              <td className="border px-3 py-2">6</td>
              <td className="border px-3 py-2">6</td>
              <td className="border px-3 py-2">10</td>
              <td className="border px-3 py-2">20</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Iron (Fe)</td>
              <td className="border px-3 py-2">PPM</td>
              <td className="border px-3 py-2">2</td>
              <td className="border px-3 py-2">3</td>
              <td className="border px-3 py-2">4</td>
              <td className="border px-3 py-2">6</td>
              <td className="border px-3 py-2">10</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Manganese (Mn)</td>
              <td className="border px-3 py-2">PPM</td>
              <td className="border px-3 py-2">0.15</td>
              <td className="border px-3 py-2">0.25</td>
              <td className="border px-3 py-2">0.25</td>
              <td className="border px-3 py-2">0.4</td>
              <td className="border px-3 py-2">0.5</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Chloride (Cl)</td>
              <td className="border px-3 py-2">PPM</td>
              <td className="border px-3 py-2">1</td>
              <td className="border px-3 py-2">1.5</td>
              <td className="border px-3 py-2">1.5</td>
              <td className="border px-3 py-2">3</td>
              <td className="border px-3 py-2">5</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Organic</td>
              <td className="border px-3 py-2">PPM</td>
              <td className="border px-3 py-2" colSpan="5">Nil</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
