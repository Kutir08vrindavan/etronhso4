// src/components/Topbar.jsx
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6"; // 👈 FaXTwitter from fa6

export default function Topbar() {
  return (
    <div
      className="text-white text-sm font-['Poppins']"
      style={{ backgroundColor: "#283b91" }} // 👈 Custom Hex color
    >
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
        
        {/* Left Side - Contact Info */}
        <div className="flex flex-col items-center sm:flex-row sm:space-x-6 space-y-1 sm:space-y-0 text-center sm:text-left">
          <span>📞 +91 9810022249</span>
          <span>✉️ info@.in</span>
        </div>

        {/* Right Side - Socials */}
        <div className="flex justify-center sm:justify-end space-x-5 text-lg">
          <a
            href="https://www.instagram.com/p/DOiAk5sAbYm/?igsh=ejRlejVweTdlMGJs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/share/p/17TFqSi3Sr/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://x.com/etronh2so4"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400"
          >
            <FaXTwitter /> {/* 👈 New X icon */}
          </a>
        </div>
      </div>
    </div>
  );
}
