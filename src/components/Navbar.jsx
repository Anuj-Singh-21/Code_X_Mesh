import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Adjust scroll threshold as needed
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-transparent transition-transform duration-700 ease-in-out ${
        isNavbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left Column (Logo/Brand) */}
        <div className="w-1/3">
          <Link to="/" className="text-white hover:text-gray-300">
            Logo
          </Link>
        </div>

        {/* Middle Column (Navigation Links) */}
        {/* Middle Column (Navigation Links) */}
        <div className="w-1/3 flex justify-center space-x-4">
          <Link
            to="/"
            className="hidden md:block text-white hover:text-gray-300"
          >
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300">
            About
          </Link>
          <Link to="/services" className="text-white hover:text-gray-300">
            Services
          </Link>
          <Link
            to="/contact"
            className="hidden md:block text-white hover:text-gray-300"
          >
            Contact
          </Link>
        </div>

        {/* Right Column (Buttons/Actions) */}
        <div className="w-1/3 flex justify-end">
          <button className="text-xs md:text-sm bg-blue hover:bg-blue text-white font-semibold py-2 px-4 rounded">
            <Link to="/contact">Let's Connect</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
