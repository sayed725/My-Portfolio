import React from "react";
import { Element } from "react-scroll";

const About = () => {
  return (
   <Element name="about">
     <div id="about" className="py-5 lg:py-10 w-11/12 mx-auto lg:w-full">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-10">
        About Me<span className="text-purple-600">.</span>
      </h2>
      <h2 className=" pb-5 text-gray-800 text-justify">
        Hi, I’m <span className="font-semibold">Abu Sayed Khan</span>,<br /> A
        passionate Frontend Web Developer with a knack for creating interactive,
        responsive, and visually stunning web applications. I specialize in
        turning ideas into functional digital experiences using modern web
        technologies like{" "}
        <span className="font-semibold">
          React,Tailwind CSS, Node.js, MongoDB and more modern web technologies, 
        </span>
        along with my current focus on mastering <span className="font-semibold">TypeScript and Next.js.</span> With a
        strong focus on clean code and user-centric design, I aim to build
        websites that not only look great but also provide seamless
        functionality. When I’m not coding, I enjoy exploring new tools and
        trends in web development to continuously enhance my skills. Let’s
        collaborate and bring your vision to life!
      </h2>
      <h2 className="pb-2">
        Mentioning some of my strengths that make me more valuable to you:
      </h2>
      <li>
        Compatible to work on tight deadlines to fulfill the assigned
        responsibility.
      </li>
      <li>
        Passionate about delivering the pixel-perfect implementation of designs
        and functional requirements.
      </li>
      <li>
        Enjoy being challenged and engaging with projects that require me to
        work outside my comfort and knowledge set with quick learning ability.
      </li>
      <li>
        Exhibiting ideal teamwork traits, including reliability, good
        communication, commitment, adaptability, and going above and beyond what
        is asked.
      </li>
    </div>
   </Element>
  );
};

export default About;
