import {
  BiLogoDocker,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoPhp,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoWordpress,
} from "react-icons/bi";
import { motion } from "motion/react";

export default function Tech() {
  const techIcons =
    "cursor-pointer transition-all duration-300 text-7xl hover:translate-y-5 sm:text-8xl md:text-[115px]";

  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div
        id="tech"
        className="min-h-[70vh] bg-gray-800 p-4 flex flex-col items-center justify-center gap-16 md:gap-32 font-thin"
      >
        <motion.h1
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl text-white mt-10 lg:mt-10"
        >
          Technologies
        </motion.h1>
        <div className="flex flex-wrap justify-center items-center gap-10 p-5">
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
          >
            <BiLogoTypescript className={`${techIcons} text-sky-500`} />
          </motion.div>

          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
          >
            <BiLogoJavascript className={`${techIcons} text-yellow-300`} />
          </motion.div>

          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
          >
            <BiLogoDocker className={`${techIcons} text-blue-600`} />
          </motion.div>

          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
          >
            <BiLogoPhp className={`${techIcons} text-purple-600`} />
          </motion.div>

          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
          >
            <BiLogoTailwindCss className={`${techIcons} text-sky-400`} />
          </motion.div>

          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
          >
            <BiLogoNodejs className={`${techIcons} text-green-400`} />
          </motion.div>

          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
          >
            <BiLogoReact className={`${techIcons} text-sky-400`} />
          </motion.div>

          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
          >
            <BiLogoWordpress className={`${techIcons} text-white`} />
          </motion.div>
        </div>
      </div>
    </>
  );
}
