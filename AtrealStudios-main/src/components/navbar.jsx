import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Close menu whenever location changes
  useEffect(() => {
    closeMenu();
  }, [location]);

  const handleLogoClick = (e) => {
    if (location.pathname === "/") {
      // If already on home page, scroll to top
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
    // Otherwise, default NavLink behavior will handle navigation
  };

  const linkStyle = `
    relative after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:bg-white
    after:w-0 hover:after:w-full after:transition-all after:duration-300
  `;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 transition-all duration-300 bg-blue-950 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo with scroll-to-top functionality */}
        <NavLink 
          to="/" 
          className="text-2xl font-bold"
          onClick={handleLogoClick}
        >
          <img
            src="https://res.cloudinary.com/dlm8wf7gu/image/upload/v1743143678/logo_uq8pvi.svg"
            alt="logo"
            className="w-auto md:h-14 h-10"
          />
        </NavLink>

        {/* Mobile toggle button */}
        <button
          onClick={toggleMenu}
          className="block md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <NavLink to="/" className={linkStyle} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={linkStyle}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={linkStyle}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={linkStyle}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/career" className={linkStyle}>
              Career
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Dropdown - Centered Links */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-blue-950 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-screen py-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 text-lg">
          <li>
            <NavLink to="/" className={linkStyle} end onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={linkStyle} onClick={closeMenu}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={linkStyle} onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={linkStyle} onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/career" className={linkStyle} onClick={closeMenu}>
              Career
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;