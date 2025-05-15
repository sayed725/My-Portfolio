import React from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";

// Animation variants for text elements
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

// Animation variants for list items
const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

const About = () => {
  return (
    <Element name="about">
      <div id="about" className="py-5">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-10"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          About Me<span className="text-purple-600">.</span>
        </motion.h2>
        <motion.h2
          className="pb-5 text-gray-800 text-justify"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Hi, I’m <span className="font-semibold">Abu Sayed Khan</span>,<br /> A
          passionate Frontend Web Developer with a knack for creating interactive,
          responsive, and visually stunning web applications. I specialize in
          turning ideas into functional digital experiences using modern web
          technologies like{" "}
          <span className="font-semibold">
            React, Tailwind CSS, Node.js, MongoDB and more modern web technologies,
          </span>{" "}
          along with my current focus on mastering{" "}
          <span className="font-semibold">TypeScript and Next.js.</span> With a
          strong focus on clean code and user-centric design, I aim to build
          websites that not only look great but also provide seamless
          functionality. When I’m not coding, I enjoy exploring new tools and
          trends in web development to continuously enhance my skills. Let’s
          collaborate and bring your vision to life!
        </motion.h2>
        <motion.h2
          className="pb-2"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          Mentioning some of my strengths that make me more valuable to you:
        </motion.h2>
        <ul className="list-disc pl-5">
          {[
            "Compatible to work on tight deadlines to fulfill the assigned responsibility.",
            "Passionate about delivering the pixel-perfect implementation of designs and functional requirements.",
            "Enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set with quick learning ability.",
            "Exhibiting ideal teamwork traits, including reliability, good communication, commitment, adaptability, and going above and beyond what is asked.",
          ].map((strength, i) => (
            <motion.li
              key={i}
              variants={listItemVariants}
              initial="hidden"
              animate="visible"
              custom={i + 3} // Offset delay to start after text animations
            >
              {strength}
            </motion.li>
          ))}
        </ul>
      </div>
    </Element>
  );
};

export default About;