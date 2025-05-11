
import SkillsCard from "./SkillsCard";

const Skills = () => {
   const skills = [
    // Front-end skills --->
    {
      name: "HTML",
      icon: "https://skillicons.dev/icons?i=html",
      progress: 95,
    },
    {
      name: "CSS",
      icon: "https://skillicons.dev/icons?i=css",
      progress: 90,
    },
    {
      name: "tailwindcss",
      icon: "https://skillicons.dev/icons?i=tailwindcss",
      progress: 95,
    },
    {
      name: "JavaScript",
      icon: "https://skillicons.dev/icons?i=js",
      progress: 70,
    },
    {
      name: "React.js",
      icon: "https://skillicons.dev/icons?i=react",
      progress: 60,
    },
    {
      name: "Firebase",
      icon: "https://skillicons.dev/icons?i=firebase",
      progress: 75,
    },
    // Back-end skills --->
    {
      name: "Node.js",
      icon: "https://skillicons.dev/icons?i=nodejs",
      progress: 40,
    },
    {
      name: "MongoDB",
      icon: "https://skillicons.dev/icons?i=mongodb",
      progress: 50,
    },
    {
      name: "Express.js",
      icon: "https://skillicons.dev/icons?i=express",
      progress: 45,
    },
    {
      name: "Next.js",
      icon: "https://skillicons.dev/icons?i=nextjs",
      progress: 30,
    },
  ];



  return (
    <div className="py-10">
     <div className="flex gap-6 md:gap-8 flex-wrap w-full items-center justify-center">
          {skills.slice(0, 6).map((skill, index) => (
            <SkillsCard key={index} skill={skill} />
          ))}
        </div>
    </div>
  );
};

export default Skills;
