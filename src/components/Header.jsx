import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full shadow-md tracking-wide z-50 bg-black">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/">
          <img src="/lg2.png" alt="logo" className="w-20" />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="white" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 5h14a1 1 0 010 2H3a1 1 0 110-2zM3 10h14a1 1 0 110 2H3a1 1 0 110-2zM3 15h14a1 1 0 110 2H3a1 1 0 110-2z" clipRule="evenodd" />
            </svg>
          )}
        </button>

        {/* Navigation Menu */}
        <nav className={`lg:flex space-x-6 text-white lg:text-lg xl:text-xl ${menuOpen ? "block fixed top-0 left-0 w-full h-screen bg-black/90 flex flex-col items-center justify-center space-y-6 text-2xl" : "hidden lg:flex"}`}>
          <a href="#" className="hover:text-green-400 transition-all duration-300">Home</a>
          <a href="#" className="hover:text-green-400 transition-all duration-300">About</a>
          <a href="#" className="hover:text-green-400 transition-all duration-300">Services</a>
          <a href="#" className="hover:text-green-400 transition-all duration-300">Review</a>
          <a href="#" className="hover:text-green-400 transition-all duration-300">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
