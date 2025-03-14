export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="text-lg font-bold">About Me</h3>
            <p className="mt-2">
              I’m a web developer passionate about building awesome projects.
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
            <h3 className="text-lg font-bold">Follow Me</h3>
            <div className="mt-2 flex space-x-4">
              <a href="https://twitter.com" className="hover:text-gray-400">
                Twitter
              </a>
              <a href="https://github.com" className="hover:text-gray-400">
                GitHub
              </a>
              <a href="https://linkedin.com" className="hover:text-gray-400">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-6 border-t border-gray-700 pt-4">
          <p>
            &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
