import { FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp, FaXTwitter, FaFacebookF } from "react-icons/fa6";
import EnergySection from "./EnergySection";

export default function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-[90vh] md:h-screen flex items-center justify-center 
                   bg-cover bg-center"
        style={{ backgroundImage: "url('/Banner.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* ✅ Social Media Icons (Right Side Vertical) */}
        <div className="absolute top-1/2 right-4 -translate-y-1/2 flex flex-col gap-3 z-20">
          <a
            href="https://youtube.com/shorts/MT_qE7OOIxY?feature=share"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center 
                       bg-[#283b91] hover:bg-[#d96327] rounded-full text-white transition"
          >
            <FaYoutube />
          </a>
          <a
            href="https://wa.me/919810022249"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center 
                       bg-[#283b91] hover:bg-[#d96327] rounded-full text-white transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center 
                       bg-[#283b91] hover:bg-[#d96327] rounded-full text-white transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center 
                       bg-[#283b91] hover:bg-[#d96327] rounded-full text-white transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center 
                       bg-[#283b91] hover:bg-[#d96327] rounded-full text-white transition"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center 
                       bg-[#283b91] hover:bg-[#d96327] rounded-full text-white transition"
          >
            <FaFacebookF />
          </a>
        </div>
      </section>

      {/* Energy Section Below */}
      <EnergySection />
    </>
  );
}
