import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

// Import your page components
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import About from "./components/About";
import Services from "./components/Services";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Team from "./components/Team";
import WorldMapSection from "./components/WorldMapSection";
import HowWeWork from "./components/HowWeWork";
import ProjectsSection from "./components/ProjectsSection";
import Testimonials from "./components/Testimonials";
import BlogSection from "./components/BlogSection";

// 👇 Import individual service detail pages
import AcidStorageTank from "./components/AcidStorageTank";
import BatteryAcidDilutionPlant from "./components/BatteryAcidDilutionPlant"; // ✅ Added
import Electrolyte from "./components/Electrolyte";
import WaterChargingTub from "./components/WaterChargingTub";

function App() {
  return (
    <>
      <Topbar />
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Features /> {/* 👈 Services preview grid */}
              <WorldMapSection />
              <HowWeWork />
              <ProjectsSection />
              <Testimonials />
              <BlogSection />
            </>
          }
        />

        {/* Static Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />

        {/* Service Detail Pages */}
        <Route path="/acid-storage-tank" element={<AcidStorageTank />} />
        <Route path="/battery-acid-dilution" element={<BatteryAcidDilutionPlant />} /> {/* ✅ Added */}
        <Route path="/electrolyte" element={<Electrolyte />} />
        <Route path="/water-charging-tub" element={<WaterChargingTub />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
