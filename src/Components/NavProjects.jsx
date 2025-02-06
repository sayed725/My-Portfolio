import React from "react";
import { MdArrowOutward } from "react-icons/md";

const NavProjects = () => {
  return (
    <section className="py-16" id="1234">
      <div className="px-4 lg:px-0">
        {/* Section Title */}
        <h2 className="text-5xl font-extrabold text-gray-900 mb-12">
          Projects<span className="text-purple-600">.</span>
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Projects 1 */}
          <div className=" rounded-lg overflow-hidden relative">
            {/* Project Image */}
            <div className="relative">
              <img
                src="/gadget-heaven.jpeg"
                alt="Project"
                className="w-full h-64 object-cover rounded-3xl hover:scale-[1.05] transition-all"
              />
            </div>

            {/* Project Info */}
            <div className="py-6">
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center">
                Gadget Heaven
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-purple-600"
                >
                  <MdArrowOutward className=" text-2xl hover:bg-purple-600 border-2 hover:text-white border-purple-600 rounded-full p-0.5" />
                </a>
              </h3>
              <p className="text-gray-700 mt-4">
              This page is a React-based application where users can explore & buy gadgets.
              </p>
            </div>
          </div>

          {/* Projects 2 */}
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
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center">
                Bite Bank
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-purple-600"
                >
                  <MdArrowOutward className="text-2xl hover:bg-purple-600 border-2 hover:text-white border-purple-600 rounded-full p-0.5" />
                </a>
              </h3>
              <p className="text-gray-700 mt-4">
              This is a user-friendly food sharing website where there is some CRUD (adding food,getting food, update food and deleting food) operations on several places. Besides that, users can also request for available food and manage requested foods.
              </p>
            </div>
          </div>

          {/* Projects 3 */}
          <div className=" rounded-lg overflow-hidden relative col-span-2">
            {/* Project Image */}
            <div className="relative flex justify-center">
              <img
                src="/green-edventure1.jpeg"
                alt="Project"
                className="w-1/2 object-contain h-64 rounded-3xl hover:scale-[1.05] transition-all"
              />
              <img
                src="/green-edventure2.jpeg"
                alt="Project"
                className="w-1/2 object-contain h-64 rounded-3xl hover:scale-[1.05] transition-all"
              />
              <img
                src="/green-edventure3.jpeg"
                alt="Project"
                className="w-1/2 object-contain h-64 rounded-3xl hover:scale-[1.05] transition-all"
              />
              {/* <div className="absolute inset-0 bg-purple-900 opacity-20"></div> */}
            </div>

            {/* Project Info */}
            <div className="py-6">
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center">
                Green EdVentures
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-purple-600 "
                >
                  <MdArrowOutward className=" text-2xl hover:bg-purple-600 border-2 hover:text-white border-purple-600 rounded-full p-0.5" />
                </a>
              </h3>
              <p className="text-gray-700 mt-4">
              Discover the thrill of eco-friendly travel with Eco-Edventure Experiences. This page is a React-based application where users can explore specific types of eco-friendly travel adventures like Forest Expeditions, Mangrove Forest Expeditions.This application provide detailed information on various eco-adventure options, allowing users to browse, learn more about each experience, and consult experts if they’re interested.
              </p>
            </div>
          </div>

          {/* Projects 4 */}
          <div className=" rounded-lg overflow-hidden relative">
            {/* Project Image */}
            <div className="relative">
              <img
                src="/Movielify.jpeg"
                alt="Project"
                className="w-full h-64 rounded-3xl hover:scale-[1.05] transition-all"
              />
            </div>

            {/* Project Info */}
            <div className="py-6">
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center">
                MovieLify
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-purple-600"
                >
                  <MdArrowOutward className=" text-2xl hover:bg-purple-600 border-2 hover:text-white border-purple-600 rounded-full p-0.5" />
                </a>
              </h3>
              <p className="text-gray-700 mt-4">
              This is a user-friendly Movie Portal to simplify the process of exploring movies, viewing movie details, adding movies, and deleting movies while managing user favorites. This project includes a dynamic user interface, robust functionality, and seamless user experience.


              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavProjects;
