import { Link } from "react-router-dom";

const NewProjectCard = ({ project }) => {



  return (
    <Link to={`${project.id==2?'postpad-details':''}${project.id==3?'bitebank-details':''}${project.id==4?'/movielify-details':''}${project.id==5?'/green-details':''}`}
     className=" text-white">
      <div className="container mx-auto">
        <div className="">
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            {/* Movie Image */}
            <img
              src={project.image}
              alt=""
              className="w-full h-[450px] group-hover:scale-110 filter brightness-90 object-cover  transition-transform  duration-500"
            />

            {/* Overlay */}
            <div className="absolute bottom-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              <div className="rounded-lg p-3 max-w-2xl mx-auto flex flex-col flex-grow">
                <h1 className="text-2xl font-bold text-white">
                  {project.name}
                </h1>
                <p className="text-white text-sm text-justify">
                  {project.title}
                </p>
                <h2 className="font-semibold text-gray-900">Tech Stack</h2>
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
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewProjectCard;
