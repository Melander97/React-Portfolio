import { motion, spring } from "motion/react";
import ProjectCard from "./ProjectCard";
import Trolska from "../assets/images/trolska.webp";
import Urban from "../assets/images/urbanadvisor.webp";
import Teamtech from "../assets/images/teamtech.webp";
import Kreng from "../assets/images/kreng.webp";
import Middler from "../assets/images/middler.webp";
import Thermonord from "../assets/images/thermonord.webp";

export default function Projects() {
  const projectsData = [
    {
      title: "Kreng",
      description: "Description for project 1",
      image: Kreng,
      technologies: ["Next.js", "Tailwind", "Wordpress (Headless)", "GraphQL"],
      link: "https://kreng.se/",
    },
    {
      title: "Trolska skogen",
      description: "Description for project 2",
      image: Trolska,
      technologies: ["Wordpress", "PHP", "Tailwind", "MySQL"],
      link: "https://www.trolskaskogen.se/",
    },
    {
      title: "Thermo Nord",
      description: "Description for project 3",
      image: Thermonord,
      technologies: ["Next.Js", "Wordpress", "Tailwind", "Javascript"],
      link: "https://thermonord.se/",
    },
    {
      title: "Urban Advisors",
      description: "Wordpress SPA created solo by myself",
      image: Urban,
      technologies: ["JavaScript", "PHP", "Wordpress", "Tailwind"],
      link: "https://urbanadvisors.se/",
    },
    {
      title: "Teamtech",
      description: "Description for project 4",
      image: Teamtech,
      technologies: ["Next.js", "Typescript", "Wordpress", "Scss", "Tailwind"],
      link: "https://teamtech.se/",
    },
    {
      title: "Middler",
      description: "Description for project 4",
      image: Middler,
      technologies: ["React", "Vite", "JavaScript", "Tailwind", "Node.js"],
      link: "#",
      isComingSoon: true,
    },
  ];

  return (
    <section
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 py-12 "
    >
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl text-white font-light py-0 md:py-10"
      >
        My Projects
      </motion.h1>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-[1200px]"
      >
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { y: 30, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { type: "spring", stiffness: 100 },
              },
            }}
            whileHover={{
              y: -5,
              transition: { type: "spring", stiffness: 400 },
            }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
