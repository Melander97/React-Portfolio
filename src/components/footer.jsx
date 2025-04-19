import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="text-lg font-bold">About Me</h3>
            <p className="mt-2">
              I'm a web developer passionate about building awesome projects.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="mt-2">
              <li>
                <a
                  href="#home"
                  className="hover:underline hover:decoration-amber-200 underline-offset-2"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:underline hover:decoration-amber-200 underline-offset-2"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:underline hover:decoration-amber-200 underline-offset-2"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:underline hover:decoration-amber-200 underline-offset-2"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold p-2">Follow Me</h3>
            <div className="mt-2 flex space-x-4">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/alexander-melander-0b804726a/"
                className="p-2 hover:text-blue-500  hover:bg-gray-400/10 rounded-full transition-color duration-300"
              >
                <FaLinkedin size={36} />
              </a>
              <a
                target="_blank"
                href="https://github.com/Melander97"
                className="p-2 hover:text-purple-700 hover:bg-gray-400/10 rounded-full transition-color duration-300"
              >
                <FaGithub size={36} />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/alexmelandeer/"
                className="p-2 hover:text-orange-600 hover:bg-gray-400/10 rounded-full hover:bg-opacity-40 transition-color duration-300"
              >
                <FaInstagram size={36} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-6 border-t border-gray-700 pt-4">
          <p>
            &copy; {new Date().getFullYear()} Alexander Melander. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
