// src/components/Navbar.jsx
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const [langDropdownDesktop, setLangDropdownDesktop] = useState(false);
  const [langDropdownMobile, setLangDropdownMobile] = useState(false);
  const langRefDesktop = useRef();
  const langRefMobile = useRef();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Gallery", path: "/gallery" }, // ✅ Added Gallery section
    { name: "Blogs", path: "/blogs" },
    { name: "Contact Us", path: "/contact" },
  ];

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setLangDropdownDesktop(false);
    setLangDropdownMobile(false);
    // Add logic to change website content language here
  };

  // Close dropdowns if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        langRefDesktop.current &&
        !langRefDesktop.current.contains(event.target)
      ) {
        setLangDropdownDesktop(false);
      }
      if (
        langRefMobile.current &&
        !langRefMobile.current.contains(event.target)
      ) {
        setLangDropdownMobile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-md font-['Poppins'] rounded-b-2xl transition-all duration-500 ease-in-out">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 ml-8 md:ml-4">
          <img
            src="/Logo.png"
            alt="Logo"
            className="h-14 w-auto transform scale-125 transition-transform duration-500 hover:scale-135"
          />
        </div>

        {/* Links - Desktop */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="font-bold hover:text-[#d96327] transition-colors duration-300 hover:scale-110"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Desktop Language Dropdown */}
          <div className="relative" ref={langRefDesktop}>
            <button
              onClick={() => setLangDropdownDesktop(!langDropdownDesktop)}
              className="flex items-center border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#d96327] hover:bg-gray-100"
            >
              {language === "en" ? "English" : "हिंदी"}
              <ChevronDownIcon className="h-4 w-4 ml-1" />
            </button>
            {langDropdownDesktop && (
              <div className="absolute right-0 mt-1 w-28 bg-white border border-gray-300 rounded-lg shadow-md z-50">
                <button
                  onClick={() => handleLanguageChange("en")}
                  className="block w-full text-left px-3 py-2 hover:bg-gray-100"
                >
                  English
                </button>
                <button
                  onClick={() => handleLanguageChange("hi")}
                  className="block w-full text-left px-3 py-2 hover:bg-gray-100"
                >
                  हिंदी
                </button>
              </div>
            )}
          </div>

          {/* Search */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-gray-600 hover:text-[#d96327] transition"
          >
            <MagnifyingGlassIcon className="h-6 w-6" />
          </button>

          {searchOpen && (
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#d96327]"
            />
          )}

          {/* Get Quote Button */}
          <Link
            to="/contact"
            className="bg-[#d96327] text-white px-4 py-2 rounded-lg shadow hover:bg-[#283b91] transition-all duration-300 hover:scale-105"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 transition-transform duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XMarkIcon className="h-7 w-7" />
          ) : (
            <Bars3Icon className="h-7 w-7" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 px-6 py-4 space-y-3 rounded-b-2xl animate-[slideDownFade_0.5s_ease-in-out]">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block font-bold hover:text-[#d96327] transition-all duration-300 hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Language Dropdown */}
          <div className="relative" ref={langRefMobile}>
            <button
              onClick={() => setLangDropdownMobile(!langDropdownMobile)}
              className="w-full flex items-center justify-between border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#d96327] hover:bg-gray-100"
            >
              {language === "en" ? "English" : "हिंदी"}
              <ChevronDownIcon className="h-4 w-4" />
            </button>
            {langDropdownMobile && (
              <div className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-md mt-1 z-50">
                <button
                  onClick={() => handleLanguageChange("en")}
                  className="block w-full text-left px-3 py-2 hover:bg-gray-100"
                >
                  English
                </button>
                <button
                  onClick={() => handleLanguageChange("hi")}
                  className="block w-full text-left px-3 py-2 hover:bg-gray-100"
                >
                  हिंदी
                </button>
              </div>
            )}
          </div>

          {/* Mobile Search */}
          <div className="flex items-center space-x-2">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-600" />
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#d96327]"
            />
          </div>

          {/* Get Quote Button */}
          <Link
            to="/contact"
            className="block bg-[#d96327] text-white text-center px-4 py-2 rounded-lg shadow hover:bg-[#283b91] transition-all duration-300 hover:scale-105"
            onClick={() => setIsOpen(false)}
          >
            Get Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
