import React, { useState, useEffect } from "react";
import photo from "../../assets/chemistry.png"; // Ensure the path to your logo is correct
import { Link, Outlet } from "react-router-dom"; // Use Link from react-router-dom
import { MoonIcon, SunIcon } from "@heroicons/react/solid"; // Import icons from Heroicons

const NavbarMain = ({ isDarkMode, setIsDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle dark mode on button click
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("darkMode", !isDarkMode); // Save state in localStorage
  };

  return (
    <nav className={`p-4 transition-colors shadow-md ${isDarkMode ? "bg-gray-900" : "bg-gray-800"}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <a href="/">
            <img src={photo} alt="Logo" className="h-10 w-auto" />
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10 rtl:space-x-reverse text-white">
          <Link to="/" className="px-4 hover:text-gray-300">
            تسجيل الخروج
            {localStorage.removeItem("code")}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        {/* Dark Mode Toggle Button */}
        <button onClick={toggleDarkMode} className="text-white">
          {isDarkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 mt-4 rtl bg-gray-800 p-4 rounded-lg">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">
              تسجيل الخروج
              {localStorage.removeItem("code")}
            </Link>
          </li>
        </ul>
      )}
      <Outlet />
    </nav>
  );
};

export default NavbarMain;
