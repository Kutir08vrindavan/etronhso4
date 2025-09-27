// src/App.jsx
import { Routes, Route } from "react-router-dom";

// Global Layout Components
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Page Components
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import About from "./components/About";
import Services from "./components/Services";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import ProjectsSection from "./components/ProjectsSection";
import BlogSection from "./components/BlogSection";
import Gallery from "./components/Gallery";

// Service Detail Pages
import AcidStorageTank from "./components/AcidStorageTank";
import BatteryAcidDilutionPlant from "./components/BatteryAcidDilutionPlant";
import Electrolyte from "./components/Electrolyte";
import WaterChargingTub from "./components/WaterChargingTub";
import AcidDilutionTankInstallation from "./components/AcidDilutionTankInstallation";

// New Dilution Tank Detail Pages
import DilutionTank2222 from "./components/DilutionTank2222";
import DilutionTank4444 from "./components/DilutionTank4444";
import DilutionTank8888 from "./components/DilutionTank8888";
import BatteryGrade from "./components/BatteryGrade";
import LabGrade from "./components/LabGrade";
import WaterDilute from "./components/WaterDilute";

// Legal / Support Pages as Components
import FAQs from "./components/FAQs";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";

// ✅ Products listing page
import OurProducts from "./components/OurProducts";

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
              <Features />
              <ProjectsSection />
              <BlogSection />
            </>
          }
        />

        {/* Static Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />

        {/* Service Detail Pages */}
        <Route path="/acid-storage-tank" element={<AcidStorageTank />} />
        <Route
          path="/battery-acid-dilution"
          element={<BatteryAcidDilutionPlant />}
        />
        <Route path="/electrolyte" element={<Electrolyte />} />
        <Route path="/water-charging-tub" element={<WaterChargingTub />} />
        <Route
          path="/acid-dilution-tank-installation"
          element={<AcidDilutionTankInstallation />}
        />

        {/* New Acid Dilution Tank Pages */}
        <Route path="/dilution-tank-2222" element={<DilutionTank2222 />} />
        <Route path="/dilution-tank-4444" element={<DilutionTank4444 />} />
        <Route path="/dilution-tank-8888" element={<DilutionTank8888 />} />
        <Route path="/battery-grade" element={<BatteryGrade />} />
        <Route path="/lab-grade" element={<LabGrade />} />
        <Route path="/water-dilute" element={<WaterDilute />} />

        {/* ✅ Products Listing Page */}
        <Route path="/products" element={<OurProducts />} />

        {/* Legal / Support Pages */}
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
