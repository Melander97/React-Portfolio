import React from "react";
import Button from "./Button";
import { motion } from "motion/react";

export default function Hero({
  title,
  description,
  Portrait,
  PortraitFallback,
}) {
  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4 py-10 md:py-20 md:px-8 max-w-7xl mx-auto">
        {/* Text Content */}
        <motion.div
          className="flex flex-col gap-y-4 text-center md:text-start w-full"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 100,
            delay: 0.2,
          }}
        >
          <h1 className="text-4xl font-extrabold text-yellow-300 sm:text-5xl lg:text-6xl xl:text-7xl">
            {title}
          </h1>
          <h2 className="text-xl font-semibold italic text-white sm:text-2xl">
            {description}
          </h2>
          <div className="flex justify-center md:justify-start pt-2">
            <a href="#footer" className="inline-block">
              <Button variant="primary">Contact Me</Button>
            </a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="w-full flex justify-center"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <picture>
            <source srcSet={Portrait} type="image/webp" />
            <img
              src={PortraitFallback}
              alt="Portrait"
              className="object-cover rounded-xl md:rounded-full w-full max-w-md md:max-w-xs lg:max-w-md xl:max-w-lg transition-all duration-300 hover:scale-105 aspect-square border-4 border-white/10 md:border-8 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30"
              loading="eager"
            />
          </picture>
        </motion.div>
      </div>
    </>
  );
}
