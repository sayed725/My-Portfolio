import { MdAttachment } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";


const ProjectCard = ({ project }) => {
  return (
    <div className="min-h-[500px] bg-white overflow-hidden flex flex-col border-2 shadow-md rounded-md hover:shadow-[purple]">
      <div>
        <img
          src={project.image}
          alt=""
          className="w-full h-[220px] object-cover"
        />
      </div>
      <div className="rounded-lg p-3 max-w-2xl mx-auto flex flex-col flex-grow">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          {project.name}
        </h1>
        <p className="text-gray-600 text-sm text-justify mb-2">
          {project.description.slice(0, 100)}...
        </p>
        <h2 className="font-semibold text-gray-900 mb-2">Tech Stack</h2>
        <div className="flex flex-wrap gap-1">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-800 text-xs text-justify font-medium px-2.5 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
        <div className="flex justify-between bg-white p-3">
        <button className="btn btn-xs bg-purple-600 hover:bg-purple-700 text-white"><MdAttachment/> Live Preview</button>
       <div className="flex gap-2">
         <button className="btn btn-xs bg-purple-600 hover:bg-purple-700 text-white"><FaGithub/> Github</button>
        <button className="btn btn-xs bg-purple-600 hover:bg-purple-700 text-white"><TbListDetails/> Details</button>
       </div>
      </div>
     
    </div>
  );
};

export default ProjectCard;
