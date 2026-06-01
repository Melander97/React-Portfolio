import { motion, spring } from "motion/react";
import ProjectCard from "./ProjectCard";
import Trolska from "../assets/images/trolska.webp";
import Urban from "../assets/images/urbanadvisor.webp";
import Teamtech from "../assets/images/teamtech.webp";
import Kreng from "../assets/images/kreng.webp";
import Skinheim from "../assets/images/skinheim.webp";
import Thermonord from "../assets/images/thermonord.webp";
import Partyhat from "../assets/images/partyhat.webp";

export default function Projects() {
  const projectsData = [
    {
      title: "Kreng",
      description:
        "The official website for Swedish agency Kreng, built with a headless WordPress backend and a Next.js frontend. Focused on a fast, content-driven experience so the team can update projects and copy without touching code.",
      image: Kreng,
      technologies: ["Next.js", "Tailwind", "WordPress (Headless)", "GraphQL"],
      link: "https://kreng.se/",
    },
    {
      title: "Trolska skogen",
      description:
        "A vibrant marketing and ticketing site for Trolska Skogen, a Swedish fairytale event destination. Built as a 2-person team — I owned most of the frontend and worked on the WooCommerce ticket integration with support from the team",
      image: Trolska,
      technologies: ["WordPress", "PHP", "Tailwind", "MySQL", "WooCommerce"],
      link: "https://www.trolskaskogen.se/",
    },
    {
      title: "Thermo Nord",
      description:
        "A corporate site for Thermo Nord, presenting their automated heating systems for property owners. Built as a 2-person project with Next.js and a headless WordPress CMS, focused on fast page loads and a content workflow the client could manage independently.",
      image: Thermonord,
      technologies: ["Next.js", "WordPress", "Tailwind", "JavaScript"],
      link: "https://thermonord.se/",
    },
    {
      title: "Urban Advisors",
      description:
        "A single-page site for Stockholm urban planning consultancy STHLM Urban Advisors. Built solo end-to-end — everything you see is custom: WordPress theme, layout,JavaScript-driven section transitions, and styling. No prebuilt themes or page builders.",
      image: Urban,
      technologies: ["JavaScript", "PHP", "WordPress", "Tailwind"],
      link: "https://urbanadvisors.se/",
    },
    {
      title: "Teamtech",
      description:
        "A recruiting site for IT consultancy TeamTech, built as a 2-person project with a teammate. Next.js + TypeScript on the frontend, WordPress as a headless CMS, with SCSS for styling. A stack choice driven by my teammate's experience that gave me a chance to learn SCSS in a real project.",
      image: Teamtech,
      technologies: ["Next.js", "Typescript", "WordPress", "Scss", "Tailwind"],
      link: "https://teamtech.se/",
    },
    {
      title: "Skinheim",
      description:
        "A CS2 skin marketplace built primarily by my brother, where I contributed frontend work and UI polish. Live but lightly used after a Valve update changed the market shortly after launch",
      image: Skinheim,
      technologies: ["React", "Vite", "JavaScript", "Tailwind", "Node.js"],
      link: "https://www.skinheim.com/",
      isComingSoon: false,
    },
    {
      title: "Partyhat",
      description:
        "Higher or Lower built on live Old School RuneScape item prices. Solo full-stack project — Phase 1 is a polished playable game with persistent records and accessibility support; Phase 2 will replace static data with the live OSRS Wiki API and a Postgres backend. Built to deepen my Next.js App Router, state management, and full-stack skills.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind",
        "Framer Motion",
        "Vercel",
      ],
      link: "https://partyhat-orpin.vercel.app",
      image: Partyhat,
      isComingSoon: false,
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-6xl"
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
