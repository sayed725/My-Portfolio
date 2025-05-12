import React from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaTwitter  } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="" id="banner">
      <div className="hero bg-base-200 h-[600px]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="/public/1130-removebg.png"
            className="w-full rounded-lg shadow-2xl h-full"
          />
          <div className="w-full">

            <h1 className="text-6xl font-bold"> Hello! I'm <br /> Abu Sayed Khan</h1>
            <h2 className="text-6xl font-bold">Frontend Web Developer</h2>
            <p className="py-6 text-gray-800">
            Crafting seamless user experiences with clean, responsive, and interactive web designs.
            Passionate about turning ideas into functional and visually appealing websites.
            </p>

            <button className="btn text-white bg-black">View Resume</button>

            <div className="flex gap-4 py-6">
                <a
                    href="https://www.linkedin.com/in/abu-sayed-khan-2024/"
                    target="_blank"
                    className="text-black  hover:text-blue-500 text-2xl"
                >
                    <FaLinkedin />
                   
                </a>
                <a
                    href="https://www.linkedin.com/in/abu-sayed-khan-2024/"
                    target="_blank"
                    className="text-black  hover:text-blue-500 text-2xl"
                >
                    <FaGithub />
                   
                </a>
                <a
                    href="https://www.linkedin.com/in/abu-sayed-khan-2024/"
                    target="_blank"
                    className="text-black  hover:text-blue-500 text-2xl"
                >
                    <FaFacebook />
                   
                </a>
                <a
                    href="https://www.linkedin.com/in/abu-sayed-khan-2024/"
                    target="_blank"
                    className="text-black  hover:text-blue-500 text-2xl"
                >
                    <FaFacebook />
                   
                </a>
                <a
                    href="https://www.linkedin.com/in/abu-sayed-khan-2024/"
                    target="_blank"
                    className="text-black  hover:text-blue-500 text-2xl"
                >
                    <FaFacebook />
                   
                </a>
                
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
