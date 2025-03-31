import react, { useState } from "react";
import Logo from "../assets/images/amlogo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img src={Logo} alt="AM Logo" width="100" height="100" />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              // Close icon (X) when menu is open
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon when menu is closed
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
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
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isOpen ? "fixed inset-0 z-50" : "hidden"
          } md:block md:relative`}
        >
          {/* Menu content */}
          <ul
            className={`${
              isOpen
                ? "absolute top-0 left-0 w-full bg-gray-800 p-4 shadow-lg"
                : "hidden"
            } md:flex md:space-x-4 md:bg-transparent md:p-0 md:shadow-none`}
          >
            {/* Close button for mobile */}
            {isOpen && (
              <div className="flex justify-end pt-4 md:hidden">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white focus:outline-none"
                  aria-label="Close navigation"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            )}

            <li>
              <a
                href="#home"
                className="text-white hover:text-gray-400 block py-2 md:inline md:py-0"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white hover:text-gray-400 block py-2 md:inline md:py-0"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-white hover:text-gray-400 block py-2 md:inline md:py-0"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white hover:text-gray-400 block py-2 md:inline md:py-0"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
