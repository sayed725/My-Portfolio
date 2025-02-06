import React from "react";

const Skills = () => {
  return (
    <div className="py-10">
      <div className="px-4 lg:px-0">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-8">
          Skills<span className="text-purple-600">.</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
         
          {/* Frontend */}
          <div>
            <h3 className="text-xl font-semibold text-purple-800 mb-4">Frontend</h3>
            <ul className="space-y-2 text-gray-600">
              <li>JavaScript</li>
              <li>ReactJS</li>
              <li>NextJS</li>
              <li>Firebase</li>
              <li>Tailwind CSS</li>

            </ul>
          </div>
          {/* Backend */}
          <div>
            <h3 className="text-xl font-semibold text-purple-800 mb-4">Backend</h3>
            <ul className="space-y-2 text-gray-600">
              <li>NodeJS</li>
              <li>MongoDB</li>
              <li>ExpressJS</li>
              <li>Vercel</li>
            </ul>
          </div>
           {/* Tools */}
           <div>
            <h3 className="text-xl font-semibold text-purple-800 mb-4">Experienced Tools</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="">Vs Coder</li>
              <li>Github</li>
              <li>Npm</li>
              <li>Figma</li>
            </ul>
          </div>
          {/* Soft Skills */}
          <div>
            <h3 className="text-xl font-semibold text-purple-800 mb-4">Soft Skills</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Effective Communication</li>
              <li>Collaboration</li>
              <li>Commitment</li>
              <li>Leadership</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
