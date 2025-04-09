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
      technologies: [
        "React",
        "JavaScript",
        "CSS",
        "HTML",
        "Node.js",
        "Express",
      ],
      link: "https://kreng.se/",
    },
    {
      title: "Trolska skogen",
      description: "Description for project 2",
      image: Trolska,
      technologies: ["HTML", "CSS"],
      link: "https://www.trolskaskogen.se/",
    },
    {
      title: "Thermo Nord",
      description: "Description for project 3",
      image: Thermonord,
      technologies: ["JavaScript", "CSS"],
      link: "https://thermonord.se/",
    },
    {
      title: "Urban Advisors",
      description: "Description for project 4",
      image: Urban,
      technologies: ["React", "JavaScript"],
      link: "https://urbanadvisors.se/",
    },
    {
      title: "Teamtech",
      description: "Description for project 4",
      image: Teamtech,
      technologies: ["React", "JavaScript"],
      link: "https://teamtech.se/",
    },
    {
      title: "Middler",
      description: "Description for project 4",
      image: Middler,
      technologies: ["React", "JavaScript"],
      link: "#",
      isComingSoon: true,
    },
  ];

  return (
    <section
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 py-12 md:py-24"
    >
      <h1 className="text-4xl md:text-6xl text-white font-light">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-[1200px]">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
