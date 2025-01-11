import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa"; // FontAwesome for X icon
import { logo } from "../../assets";

const NavMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "auto"; // Reset overflow on unmount
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white py-3 transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img src={logo} alt="Logo" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-14 text-base font-medium">
          <a
            href="#home"
            className="cursor-pointer transition-colors duration-300 hover:underline"
          >
            Home
          </a>
          <a href="#download" className="cursor-pointer hover:underline">
            Download
          </a>
          <a href="#pricing" className="cursor-pointer hover:underline">
            Pricing
          </a>
          <a href="#features" className="cursor-pointer hover:underline">
            Features
          </a>
          <a href="#about" className="cursor-pointer hover:underline">
            About Us
          </a>
        </nav>

        {/* Sign In Button (Desktop) */}
        <div className="hidden md:block">
          <a
            href="/login"
            className="py-2 px-5 bg-brandGold text-base font-medium rounded-md hover:bg-opacity-90"
          >
            Sign In
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)} // Close menu when overlay is clicked
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white z-50 transition-transform duration-300 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 text-gray-700 focus:outline-none"
        >
          <FaTimes className="h-6 w-6" />
        </button>

        {/* Mobile Menu Links */}
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          <a
            href="#home"
            className="text-xl font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#download"
            className="text-xl font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Download
          </a>
          <a
            href="#pricing"
            className="text-xl font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </a>
          <a
            href="#features"
            className="text-xl font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </a>
          <a
            href="#about"
            className="text-xl font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </a>
          <a
            href="/login"
            className="py-2 px-5 bg-brandGold text-base font-medium rounded-md hover:bg-opacity-90"
            onClick={() => setIsMenuOpen(false)}
          >
            Sign In
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavMenu;
