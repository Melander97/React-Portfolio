import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const SocialIcon = ({ href, icon, color, platform }) => (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      aria-label={`${platform} (opens in new tab)`}
      className={`p-3 hover:bg-gray-400/10 rounded-full transition-all duration-300 active:scale-95 active:bg-gray-400/50 ${color}`}
    >
      {icon}
    </a>
  );

  return (
    <footer id="footer" className="bg-gray-800 text-white p-6 mt-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div>
            <h3 className="text-lg font-bold">Let's Connect</h3>
            <p className="mt-2">
              Interested in working together? Reach out via
              <a
                href="mailto:alexandermelander1@gmail.com"
                className="text-amber-300 underline underline-offset-4 decoration-transparent hover:decoration-amber-300 ml-1"
              >
                email
              </a>
              .
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold ">Follow Me</h3>
            <div className="mt-2 flex space-x-4">
              {SocialIcon({
                href: "https://www.linkedin.com/in/alexander-melander-0b804726a/",
                icon: <FaLinkedin size={36} />,
                color: "hover:text-blue-500",
                platform: "LinkedIn",
              })}

              {SocialIcon({
                href: "https://github.com/Melander97",
                icon: <FaGithub size={36} />,
                color: "hover:text-purple-700",
                platform: "GitHub",
              })}

              {SocialIcon({
                href: "https://www.instagram.com/alexmelandeer/",
                icon: <FaInstagram size={36} />,
                color: "hover:text-orange-600",
                platform: "Instagram",
              })}
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
