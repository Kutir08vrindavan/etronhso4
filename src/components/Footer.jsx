// src/components/Footer.jsx
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";  // ← updated import

export default function Footer() {
  return (
    <footer
      className="text-white font-['Playfair_Display'] mt-12"
      style={{ backgroundColor: "#283b91" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-2">E-tron</h2>
          <p className="text-gray-300">
            Leading the way in innovative technology solutions. Contact us for
            more information.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-2">Quick Links</h2>
          <ul className="space-y-1">
            <li>
              <a href="/" className="hover:text-orange-400 transition-colors">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-orange-400 transition-colors">About</a>
            </li>
            <li>
              <a href="/services" className="hover:text-orange-400 transition-colors">Services</a>
            </li>
            <li>
              <a href="/blogs" className="hover:text-orange-400 transition-colors">Blogs</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-orange-400 transition-colors">Contact</a>
            </li>
          </ul>
        </div>

        {/* Policies & FAQs */}
        <div>
          <h2 className="text-xl font-bold mb-2">Support</h2>
          <ul className="space-y-1">
            <li>
              <a href="/faqs" className="hover:text-orange-400 transition-colors">FAQs</a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms" className="hover:text-orange-400 transition-colors">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        {/* Subscribe & Social Media */}
        <div>
          <h2 className="text-xl font-bold mb-2">Subscribe</h2>
          <p className="text-gray-300 mb-2">Get latest updates via email</p>
          <div className="flex mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 rounded-l-lg focus:outline-none text-black"
            />
            <button className="bg-[176eb5] px-4 py-2 rounded-r-lg hover:bg-orange-700 transition-all duration-300">
              Subscribe
            </button>
          </div>

          <h2 className="text-xl font-bold mb-2">Follow Us</h2>
          <div className="flex space-x-4 mt-2 text-xl">
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
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center text-gray-400 py-4">
        &copy; {new Date().getFullYear()} E-tron. All rights reserved.
      </div>
    </footer>
  );
}
