
import { useParams, NavLink, Outlet } from 'react-router-dom';
import SkillsCard from './SkillsCard';


 const frontend = [ 
    { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
    { name: "Firebase", icon: "https://skillicons.dev/icons?i=firebase" },
    { name: "HTML5", icon: "https://skillicons.dev/icons?i=html" },
    { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
    { name: "Tailwind", icon: "https://skillicons.dev/icons?i=tailwindcss" },
    { name: "React", icon: "https://skillicons.dev/icons?i=react" },
    { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts" },
    { name: "Redux", icon: "https://skillicons.dev/icons?i=redux" },
    { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
    { name: "CSS3", icon: "https://skillicons.dev/icons?i=css" },
 ]

  const backend= [
    { name: "Express.js", icon: "https://skillicons.dev/icons?i=express" },
    { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
    { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
    { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts" },
  ]
  const  tools= [ 
    { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
    { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
    { name: "Bun", icon: "https://skillicons.dev/icons?i=bun" },
    { name: "PowerShell", icon: "https://skillicons.dev/icons?i=powershell" },
    { name: "NPM", icon: "https://skillicons.dev/icons?i=npm" },
    { name: "PNPM", icon: "https://skillicons.dev/icons?i=pnpm" },
    { name: "Figma", icon: "https://skillicons.dev/icons?i=figma" },
    { name: "VS Code", icon: "https://skillicons.dev/icons?i=vscode" },
    { name: "Linux", icon: "https://skillicons.dev/icons?i=linux" },
  ]


const Skills = () => {
  const { category } = useParams();
  const currentCategory = category || 'frontend';

  return (
    <div id="skills" className="py-10 px-4 lg:px-0">
      <h2 className="text-5xl font-bold text-gray-900 mb-10">
        My Skills<span className="text-purple-600">.</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 border-2">
        {/* Frontend Card-1 */}
        <div className="">
          <div>
            <h2>Front-end</h2>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {frontend.map((skill) => (
              <SkillsCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
        {/* Backend Card-1 */}
        <div className="">
           <div>
            <h2>Back-end</h2>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {backend.map((skill) => (
              <SkillsCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
        {/* Tools Card-1 */}
        <div className="">
           <div>
            <h2>Tools</h2>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {tools.map((skill) => (
              <SkillsCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
      <Outlet /> {/* For nested routes if needed */}
    </div>
  );
};

export default Skills;