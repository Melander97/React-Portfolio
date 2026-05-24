import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Button from "./Button";

export default function Contact() {
  return (
    <div className="scroll-mt-20 bg-gray-900 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-6xl font-extrabold text-white mb-2">
          Let's <span className="text-yellow-300">Connect</span>
        </h2>
        <div className="w-16 h-1 bg-yellow-300 mb-8 rounded-full mx-auto" />

        <p className="text-gray-200 text-lg max-w-2xl mx-auto mb-10">
          I'm currently open to frontend or full-stack roles in Sweden, remote,
          or hybrid — and always happy to chat about an interesting project.
          Drop me an email or find me below.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <Button variant="primary" href="mailto:alexandermelander1@gmail.com">
            Email Me
          </Button>
          <Button
            variant="outline"
            href="/cv/alexcv.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </Button>
        </div>

        <div className="flex gap-6 justify-center text-gray-300">
          <a
            href="https://www.linkedin.com/in/alexander-melander-0b804726a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-3xl" />
          </a>
          <a
            href="https://github.com/Melander97"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="text-3xl" />
          </a>
          <a
            href="https://www.instagram.com/alexmelandeer/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram className="text-3xl" />
          </a>
        </div>
      </div>
    </div>
  );
}
