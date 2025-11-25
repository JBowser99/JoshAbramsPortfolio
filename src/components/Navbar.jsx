import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenuItems, setShowMenuItems] = useState([false, false, false, false]);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      showMenuItemsOneByOne();
    } else {
      setShowMenuItems([false, false, false, false]);
    }
  };

  const showMenuItemsOneByOne = () => {
    setShowMenuItems([false, false, false, false]);
    for (let i = 0; i < 4; i++) {
      setTimeout(() => {
        setShowMenuItems((prev) => {
          const newItems = [...prev];
          newItems[i] = true;
          return newItems;
        });
      }, i * 10); // Faster stagger effect
    }
  };

  useEffect(() => {
    if (!isOpen) {
      setShowMenuItems([false, false, false, false]);
    }
  }, [isOpen]);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
  <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white border-b border-zinc-600 shadow-md z-50">
    <div className="container mx-auto flex justify-between items-center px-4 py-4 sm:px-6 md:px-8 lg:px-10">
      {/* Logo Container with Glassmorphism */}
      <div
        onClick={scrollToTop} // Trigger scroll to top on click
        className="flex flex-row items-center bg-slate-400/40 border border-teal-400 backdrop-blur-sm rounded-lg shadow-lg cursor-pointer"
      >
        <img src="/images/JA.png" className="w-10 h-10 object-contain" />
        {/* Hide text on mobile */}
        <span className="border-l pl-1 pr-1 border-teal-400 text-teal-400 text-2xl font-bold hidden md:block">
          <Link to="/">Personal Portfolio</Link>
        </span>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 text-white text-lg font-bold">
        <a href="#about" className="hover:text-cyan-200">About</a>
        <a href="#experience" className="hover:text-cyan-200">Experience</a>
        <a href="#projects" className="hover:text-cyan-200">Projects</a>
        <a href="#contact" className="hover:text-cyan-200">Contact</a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={handleMenuToggle}
          className={`focus:outline-none transform transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
          aria-label="Toggle menu"
        >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
        >
        </path>
      </svg>
    </button>
  </div>

  {/* Mobile Menu */}
  {isOpen && (
  <div className="absolute h-screen top-[100%] left-0 w-full border-t border-zinc-600 bg-gray-800/90 backdrop-blur-sm	text-white py-4 md:hidden">
    <div className="dropdown-container mt-20 text-lg text-white font-bold">
      {['About', 'Experience', 'Projects', 'Contact'].map((item, index) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={handleMenuToggle}
          className={`block px-4 py-2 transition-opacity duration-200 ${showMenuItems[index] ? 'opacity-100' : 'opacity-0'} hover:text-cyan-200`} style={{ transitionDelay: `${index * 50}ms` }}>{item}
        </a>
      ))}
    </div>
  </div>
  )}
  </div>
</nav>
  );
};

export default Navbar;
