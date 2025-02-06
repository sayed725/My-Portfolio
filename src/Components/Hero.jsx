import React from "react";
import { FaDownload, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="py-8 lg:py-16">
      <div className=" flex flex-col lg:flex-row items-center">
        {/* Left Section */}
        <div className="lg:w-1/2 text-left">
          <p className="text-gray-600 text-xl">
            Hey, I’m <span className="font-semibold text-purple-600">Sayed</span> 👋
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-8">
            <span className="text-purple-600">Frontend</span> <br className="hidden lg:block" /> Web Developer
          </h1>
          <p className="text-gray-800 mt-10 text-lg">
          Crafting seamless user experiences with clean, responsive, and interactive web designs.
          Passionate about turning ideas into functional and visually appealing websites.
          </p>


          <div className="flex gap-4 py-6 justify-center items-center lg:justify-start lg:items-start">
                          <a
                              href="https://www.linkedin.com/in/abu-sayed-khan-922801317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                              target="_blank"
                              className="text-black  hover:text-blue-500 text-2xl"
                          >
                              <FaLinkedin />
                             
                          </a>
                          <a
                              href="https://github.com/sayed725"
                              target="_blank"
                              className="text-black  hover:text-blue-500 text-2xl"
                          >
                              <FaGithub />
                             
                          </a>
                          <a
                              href="https://www.facebook.com/abu.ssayed.khan.2024"
                              target="_blank"
                              className="text-black  hover:text-blue-500 text-2xl"
                          >
                              <FaFacebook />
                             
                          </a>
                          <a
                              href="https://www.facebook.com/abu.ssayed.khan.2024"
                              target="_blank"
                              className="text-black  hover:text-blue-500 text-2xl"
                          >
                              <FaInstagram />
                             
                          </a>
                          <a
                              href="https://www.facebook.com/abu.ssayed.khan.2024"
                              target="_blank"
                              className="text-black  hover:text-blue-500 text-2xl"
                          >
                              <FaWhatsapp />
                             
                          </a>
                         
                      </div>





          <div className="mt-5 flex justify-center lg:justify-start space-x-4">
           <a href="https://drive.google.com/file/d/1xUa-WkEOkaHclDsT4Jzo30v2lNWLIVLZ/view?usp=sharing" target="_blank">   <button className="bg-purple-600 text-white px-3 sm:px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 flex items-center gap-2">
              Download Resume <FaDownload/>
            </button> </a>
            <a href="#1234"><button className="border border-gray-800 px-3 sm:px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:text-white">
              Browse Projects
            </button> </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full border-4 border-purple-300 flex items-center justify-center overflow-hidden">
            <img
              src="/demo.avif" // Replace with your image URL
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
