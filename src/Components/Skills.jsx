import { Element } from "react-scroll";
import { motion } from "framer-motion";
import SkillsCard from "./SkillsCard";

// Animation variants for heading
const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Animation variants for skill category cards
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

const frontend = [
  { name: "HTML5", icon: "https://skillicons.dev/icons?i=html" },
  { name: "CSS3", icon: "https://skillicons.dev/icons?i=css" },
  { name: "React", icon: "https://skillicons.dev/icons?i=react" },
  { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
  { name: "Tailwind", icon: "https://skillicons.dev/icons?i=tailwindcss" },
  { name: "Firebase", icon: "https://skillicons.dev/icons?i=firebase" },
];

const backend = [
  { name: "Express.js", icon: "https://skillicons.dev/icons?i=express" },
  { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
  { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
];

const tools = [
  { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
  { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
  { name: "Bun", icon: "https://skillicons.dev/icons?i=bun" },
  { name: "NPM", icon: "https://skillicons.dev/icons?i=npm" },
  { name: "Figma", icon: "https://skillicons.dev/icons?i=figma" },
  { name: "VSCode", icon: "https://skillicons.dev/icons?i=vscode" },
  { name: "Vercel", icon: "https://skillicons.dev/icons?i=vercel" },
  { name: "Netlify", icon: "https://skillicons.dev/icons?i=netlify" },
];

const Skills = () => {
  return (
    <Element name="skills">
      <div id="skills" className="py-5">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-10"
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          My Skills<span className="text-purple-600">.</span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {/* Frontend Card */}
          <motion.div
            className="border-2 rounded-lg p-4 sm:p-5 bg-white shadow-sm hover:shadow-[purple]"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <h2 className="text-center font-semibold text-xl sm:text-2xl lg:text-3xl pb-3 border-b-2">
              Front-end
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-5 py-3">
              {frontend.map((skill) => (
                <SkillsCard key={skill.name} skill={skill} index={frontend.indexOf(skill)} />
              ))}
            </div>
          </motion.div>
          {/* Backend Card */}
          <motion.div
            className="border-2 rounded-lg p-4 sm:p-5 bg-white shadow-sm hover:shadow-[purple]"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <h2 className="text-center font-semibold text-xl sm:text-2xl lg:text-3xl pb-3 border-b-2">
              Back-end
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-5 py-3">
              {backend.map((skill) => (
                <SkillsCard key={skill.name} skill={skill} index={backend.indexOf(skill)} />
              ))}
            </div>
          </motion.div>
          {/* Tools Card */}
          <motion.div
            className="border-2 rounded-lg p-4 sm:p-5 bg-white shadow-sm hover:shadow-[purple]"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <h2 className="text-center font-semibold text-xl sm:text-2xl lg:text-3xl pb-3 border-b-2">
              Tools
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-5 py-3">
              {tools.map((skill) => (
                <SkillsCard key={skill.name} skill={skill} index={tools.indexOf(skill)} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Element>
  );
};

export default Skills;