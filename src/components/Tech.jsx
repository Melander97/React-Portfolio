import {
  BiLogoDocker,
  BiLogoFigma,
  BiLogoGit,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoPhp,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoWordpress,
} from "react-icons/bi";
import { SiVercel } from "react-icons/si";
import { motion } from "motion/react";

export default function Tech() {
  const techGroups = [
    {
      title: "Frontend",
      items: [
        { name: "React", Icon: BiLogoReact, color: "text-sky-400" },
        { name: "TypeScript", Icon: BiLogoTypescript, color: "text-sky-500" },
        {
          name: "JavaScript",
          Icon: BiLogoJavascript,
          color: "text-yellow-300",
        },
        { name: "Tailwind", Icon: BiLogoTailwindCss, color: "text-sky-400" },
      ],
    },
    {
      title: "Backend & CMS",
      items: [
        { name: "Node.js", Icon: BiLogoNodejs, color: "text-green-400" },
        { name: "PHP", Icon: BiLogoPhp, color: "text-purple-500" },
        { name: "WordPress", Icon: BiLogoWordpress, color: "text-white" },
      ],
    },
    {
      title: "Tools",
      items: [
        { name: "Git", Icon: BiLogoGit, color: "text-orange-500" },
        { name: "Docker", Icon: BiLogoDocker, color: "text-blue-500" },
        { name: "Figma", Icon: BiLogoFigma, color: "text-pink-400" },
        { name: "Vercel", Icon: SiVercel, color: "text-white" },
      ],
    },
  ];

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="tech"
      className="scroll-mt-20 bg-gray-800 py-20 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-extrabold text-white mb-2"
        >
          My <span className="text-yellow-300">Stack</span>
        </motion.h2>
        <div className="w-16 h-1 bg-yellow-300 mb-10 rounded-full" />

        <p className="text-gray-200 text-lg max-w-2xl">
          Tools I reach for daily — and a few I've picked up along the way.
        </p>

        <div className="space-y-10 mt-12">
          {techGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-yellow-300 text-sm uppercase tracking-wider font-semibold mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-x-8 gap-y-6 ">
                {group.items.map(({ name, Icon, color }) => (
                  <motion.div
                    key={name}
                    variants={variants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="group flex flex-col items-center gap-2 cursor-pointer"
                  >
                    <Icon
                      className={`${color} text-5xl md:text-7xl transition-transform duration-300 group-hover:-translate-y-2`}
                    />
                    <span className="text-gray-300 text-sm font-medium opacity-70 group-hover:opacity-100 transition-opacity">
                      {name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
