import React from 'react';

const Footer = () => {
  return (
    <footer className="bottom-0 w-full bg-gray-800 text-white border-t border-zinc-600 shadow-md z-50 py-4">
      <div className="container mx-auto px-4 flex flex-col items-center md:flex-row md:justify-between">
        {/* Copyright */}
        <p className="text-sm md:text-base text-center md:text-left">
          &copy; {new Date().getFullYear()} Josh Abrams. All rights reserved.
        </p>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-4 mt-4 md:mt-0">
          <li>
            <a
              href="#"
              className="text-sm md:text-base hover:text-cyan-300 transition-colors duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-sm md:text-base hover:text-cyan-300 transition-colors duration-200"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="text-sm md:text-base hover:text-cyan-300 transition-colors duration-200"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-sm md:text-base hover:text-cyan-300 transition-colors duration-200"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-sm md:text-base hover:text-cyan-300 transition-colors duration-200"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
