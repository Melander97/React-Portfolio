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
      description:
        "A responsive portfolio site for a Swedish web dev agency, built with Next.js, Tailwind, and a headless WordPress CMS powered by GraphQL.",
      image: Kreng,
      technologies: ["Next.js", "Tailwind", "Wordpress (Headless)", "GraphQL"],
      link: "https://kreng.se/",
    },
    {
      title: "Trolska skogen",
      description:
        "A custom WordPress site for Trolska Skogen, built from the ground up with Tailwind. Focused on vibrant colors and immersive imagery to better reflect the park's playful, magical atmosphere.",
      image: Trolska,
      technologies: ["Wordpress", "PHP", "Tailwind", "MySQL", "WooCommerce"],
      link: "https://www.trolskaskogen.se/",
    },
    {
      title: "Urban Advisors",
      description:
        "A lightweight, single-page WordPress site for Urban Advisors, designed and developed solo. Built with Tailwind and PHP to deliver a fast, modern layout for a streamlined business presence.",
      image: Urban,
      technologies: ["JavaScript", "PHP", "Wordpress", "Tailwind"],
      link: "https://urbanadvisors.se/",
    },
    {
      title: "Thermo Nord",
      description:
        "A modern marketing and product site for Thermo Nord, built with Next.js, Tailwind, and WordPress. We implemented WooCommerce to showcase heating systems for commercial and agricultural buildings, combining clean design with simple product browsing.",
      image: Thermonord,
      technologies: [
        "Next.Js",
        "Wordpress",
        "WooCommerce",
        "Tailwind",
        "Javascript",
      ],
      link: "https://thermonord.se/",
    },
    {
      title: "Teamtech",
      description:
        "A colorful marketing site for Teamtech, built with Next.js, WordPress, TypeScript, and Tailwind. Developed to deliver a modern, multi-page layout with dynamic content and a responsive design.",
      image: Teamtech,
      technologies: ["Next.js", "Typescript", "Wordpress", "Scss", "Tailwind"],
      link: "https://teamtech.se/",
    },
    {
      title: "Middler",
      description:
        "An in-progress secure trading platform built with React, Vite, and Node.js. Designed to support peer-to-peer transactions involving Swish, Steam, and other systems, with a focus on safety, reliability, and user-friendly trading workflows.",
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
