import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-background text-white px-10 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-blue">CodeXMesh</h1>
            <p className="mt-2 text-sm font-light text-gray-300">
              Building cutting-edge digital products for modern businesses. We
              craft, develop, and grow your digital presence.
            </p>
          </div>

          <div className="flex flex-col">
            <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
            <ul className="space-y-1 text-sm font-light text-gray-300">
              <li>
                <Link to="/" className="hover:text-blue transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h2 className="text-lg font-semibold mb-2">Get In Touch</h2>
            <p className="text-sm font-light text-gray-300">
              Email: hello@CodeXMesh.dev
            </p>
            <p className="text-sm font-light text-gray-300">
              Phone: +1 234 567 890
            </p>
            <div className="flex gap-3 mt-3">
              <a href="#" className="hover:text-blue transition">
                LinkedIn
              </a>
              <a href="#" className="hover:text-blue transition">
                GitHub
              </a>
              <a href="#" className="hover:text-blue transition">
                Dribbble
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-5 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} CodeXMesh. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
