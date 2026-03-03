import { useState, useEffect } from "react";
import Logo from "../assets/images/portfoliologo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    document.querySelector(targetId)?.scrollIntoView({
      behavior: "smooth",
    });
    setIsOpen(false);
  };

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`p-5 sticky top-0 z-50 shadow-lg transition-all duration-300 ${
        scrolled ? "bg-gray-900/95 backdrop-blur-md" : "bg-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img src={Logo} alt="AM Logo" className="w-14 h-auto" />
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Menu */}
        <div
          className={`${isOpen ? "block" : "hidden"} md:block absolute md:relative text-white top-16 md:top-auto left-0 right-0 bg-gray-900 md:bg-transparent shadow-xl md:shadow-none py-6 md:py-0 z-50`}
        >
          <ul className="flex flex-col md:flex-row items-center gap-8 md:gap-10 text-center md:text-left text-lg">
            <li>
              <a
                href="#home"
                onClick={(e) => handleSmoothScroll(e, "#home")}
                className="hover:text-gray-400 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => handleSmoothScroll(e, "#about")}
                className="hover:text-gray-400 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => handleSmoothScroll(e, "#projects")}
                className="hover:text-gray-400 transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#footer"
                onClick={(e) => handleSmoothScroll(e, "#footer")}
                className="hover:text-gray-400 transition-colors"
              >
                Contact
              </a>
            </li>

            <li>
              <a
                href="/cv/alexcv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Alex_CV.pdf"
                className="inline-block bg-white hover:bg-gray-100 text-gray-900 font-medium px-6 py-2.5 rounded-xl transition-all active:scale-95"
                onClick={() => setIsOpen(false)}
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
