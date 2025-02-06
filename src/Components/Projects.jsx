import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";


const Projects = () => {
  return (
    <section className="py-10" id="1234">
      <div className="px-4 lg:px-0">
        {/* Section Title */}
        <h2 className="text-5xl font-extrabold text-gray-900 mb-12">
          Projects<span className="text-purple-600">.</span>
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:gap-8">
          {/* Projects 1 */}
          <div className=" rounded-lg overflow-hidden relative">
            {/* Project Image */}
            <div className="relative">
              <img
                src="/Movielify.jpeg"
                alt="Project"
                className="w-full h-64 object-cover rounded-3xl hover:scale-[1.05] transition-all"
              />
            </div>
            

            {/* Project Info */}
            <div className="py-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    MovieLify
                  </h3>

                  <a
                    href="https://assignment-10-b0e3a.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-purple-600"
                  >
                    <MdArrowOutward className=" text-2xl hover:bg-purple-600 border-2 hover:text-white border-purple-600 rounded-full p-0.5" />
                  </a>
                  <a
                    href="https://github.com/sayed725/MovieLify-client"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-black"
                  >
                    <FaGithub className=" text-2xl hover:bg-purple-600 border-2 hover:text-white border-black rounded-full p-0.5" />
                  </a>
                </div>

                <div>
                  <Link to={'/movielify-details'} className="btn btn-sm bg-purple-600 text-white hover:bg-purple-700">
                    Details
                  </Link>
                </div>
              </div>
              <p className="text-gray-700 mt-4 text-start">
                This is a user-friendly Movie Portal to simplify the process of
                exploring movies, viewing movie details, adding movies, and
                deleting movies while managing user favorites. This project
                includes a dynamic user interface, robust functionality, and
                seamless user experience.
              </p>
            </div>
          </div>

          {/* Projects 2 */}
          <div className=" rounded-lg overflow-hidden relative col-span-2">
            {/* Project Image */}
            <div className="relative flex justify-center">
              <img
                src="/Postpad-Home.png"
                alt="Project"
                className="w-1/2 object-contain h-64 rounded-3xl hover:scale-[1.05] transition-all"
              />
              <img
                src="/postPad-post-details.png"
                alt="Project"
                className="w-1/2 object-contain h-64 rounded-3xl hover:scale-[1.05] transition-all"
              />
              <img
                src="/PostPad-admin-home.png"
                alt="Project"
                className="w-1/2 object-contain h-64 rounded-3xl hover:scale-[1.05] transition-all"
              />
              {/* <div className="absolute inset-0 bg-purple-900 opacity-20"></div> */}
            </div>

            {/* Project Info */}
            <div className="py-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    PostPad
                  </h3>

                  <a
                    href="https://github.com/sayed725/PostPad-Client"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-purple-600"
                  >
                    <MdArrowOutward className=" text-2xl hover:bg-purple-600 border-2 hover:text-white border-purple-600 rounded-full p-0.5" />
                  </a>
                  <a
                    href="https://post-pad.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-black"
                  >
                    <FaGithub className=" text-2xl hover:bg-purple-600 border-2 hover:text-white border-black rounded-full p-0.5" />
                  </a>
                </div>

                <div>
                  <Link to={'/postpad-details'} className="btn btn-sm bg-purple-600 text-white hover:bg-purple-700">
                    Details
                  </Link>
                </div>
                </div>
              <p className="text-gray-700 mt-4">
              This project is a fully responsive and interactive forum built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). The platform allows users to post, comment, vote, and share content in real-time. Admins can manage users, announcements, and reported activities. The purpose of this project is to create a scalable web application that focuses on user experience, performance, and security.


              </p>
            </div>
          </div>

          {/* Projects 3 */}
          
          <div className=" rounded-lg overflow-hidden relative col-span-2">
            {/* Project Image */}
            <div className="relative flex justify-center ">
              <img
                src="/bitebank-1.jpeg"
                alt="Project"
                className="w-1/2 object-contain h-64 rounded-3xl hover:scale-[1.05] transition-all"
              />
              <img
                src="/bitebank-2.jpeg"
                alt="Project"
                className="w-1/2 object-contain h-64 rounded-3xl hover:scale-[1.05] transition-all"
              />
              <img
                src="/bitebank-3.jpeg"
                alt="Project"
                className="w-1/2 object-contain h-64 rounded-3xl hover:scale-[1.05] transition-all"
              />
              {/* <div className="absolute inset-0 bg-purple-900 opacity-20"></div> */}
            </div>

            {/* Project Info */}
            <div className="py-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    BiteBank
                  </h3>

                  <a
                    href="https://a-11-bite-bank.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-purple-600"
                  >
                    <MdArrowOutward className=" text-2xl hover:bg-purple-600 border-2 hover:text-white border-purple-600 rounded-full p-0.5" />
                  </a>
                  <a
                    href="https://github.com/sayed725/BiteBank-Client"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-black"
                  >
                    <FaGithub className=" text-2xl hover:bg-purple-600 border-2 hover:text-white border-black rounded-full p-0.5" />
                  </a>
                </div>

                <div>
                  <Link to={'/bitebank-details'} className="btn btn-sm bg-purple-600 text-white hover:bg-purple-700">
                    Details
                  </Link>
                </div>
                </div>
              <p className="text-gray-700 mt-4">
                This is a user-friendly food sharing website where there is some
                CRUD (adding food,getting food, update food and deleting food)
                operations on several places. Besides that, users can also
                request for available food and manage requested foods.
              </p>
            </div>
          </div>

          {/* Projects 4 */}
          <div className=" rounded-lg overflow-hidden relative">
            {/* Project Image */}
            <div className="relative">
              <img
                src="/green-edventure1.jpeg"
                alt="Project"
                className="w-full h-64 object-cover rounded-3xl hover:scale-[1.05] transition-all"
              />
            </div>

            {/* Project Info */}
            <div className="py-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Green EdVenture
                  </h3>

                  <a
                    href="https://github.com/sayed725/GREEN-EDVENTURES"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-purple-600"
                  >
                    <MdArrowOutward className=" text-2xl hover:bg-purple-600 border-2 hover:text-white border-purple-600 rounded-full p-0.5" />
                  </a>
                  <a
                    href="https://assingment-10-5294b.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-black"
                  >
                    <FaGithub className=" text-2xl hover:bg-purple-600 border-2 hover:text-white border-black rounded-full p-0.5" />
                  </a>
                </div>

                <div>
                  <Link to={'/green-details'} className="btn btn-sm bg-purple-600 text-white hover:bg-purple-700">
                    Details
                  </Link>
                </div>
                </div>
              <p className="text-gray-700 mt-4">
              This page is a React-based application where users
                can explore specific types of eco-friendly travel adventures
                like Forest Expeditions, Mangrove Forest Expeditions.This
                application provide detailed information on various
                eco-adventure options, allowing users to browse, learn more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
