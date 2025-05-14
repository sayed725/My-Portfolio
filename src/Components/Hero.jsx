import { FaDownload, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import { Element, Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
   <Element name="banner">
     <section className="py-6 sm:py-8 lg:py-10 ">
      <div className="flex flex-col lg:flex-row items-center">
        {/* Left Section */}
        <div className="w-11/12 mx-auto lg:w-1/2 text-center lg:text-left">
          <p className="text-gray-600 text-lg tracking-wider sm:text-xl">
            Hey,<span className="text-purple-700"> I’m </span>
             👋
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide  mt-4 sm:mt-6 lg:mt-8">
            <span className="text-purple-600">Abu Sayed Khan</span>{" "}
          </h1>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-4 sm:mt-4 lg:mt-4">
           A  
             <span style={{ color: '', fontWeight: 'semi-bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[' Web Developer',' Front-end Developer',' MERN Stack Developer',' React.Js Developer']}
            loop={Infinity}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
          </h1>
          <p className="text-gray-800 mt-4 text-base tracking-wider sm:text-lg text-center lg:text-start max-w-md mx-auto lg:mx-0">
            Crafting seamless user experiences with clean, responsive, and
            interactive web designs. Passionate about turning ideas into
            functional and visually appealing websites.
          </p>

          <div className="flex gap-4 sm:gap-8 py-6 justify-center lg:justify-start">
            <a
              href="https://www.linkedin.com/in/abu-sayed-khan-922801317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              className="text-black hover:text-blue-500 text-4xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/sayed725"
              target="_blank"
              className="text-black hover:text-blue-500 text-4xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.facebook.com/abu.ssayed.khan.2024"
              target="_blank"
              className="text-black hover:text-blue-500 text-4xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/abu.ssayed.khan.2024"
              target="_blank"
              className="text-black hover:text-blue-500 text-4xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/+8801627142598"
              target="_blank"
              className="text-black hover:text-blue-500 text-4xl"
            >
              <FaWhatsapp />
            </a>
          </div>

          <div className="mt-5 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a
              href="https://drive.google.com/file/d/1xUa-WkEOkaHclDsT4Jzo30v2lNWLIVLZ/view?usp=sharing"
              target="_blank"
            >
              <button className="bg-purple-600 text-white btn rounded-md font-semibold hover:bg-purple-700 flex items-center justify-center gap-2 w-full sm:w-auto">
                Download Resume <FaDownload />
              </button>
            </a>
            <Link to="projects"
            smooth={true} duration={700}
            >
           
              <button className="border border-gray-800 btn rounded-md font-semibold hover:bg-gray-800 hover:text-white w-full sm:w-auto">
                Browse Projects
              </button>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <motion.div
            animate={{ y: [-5, 30] }} // Move up 20px and down 20px
            transition={{
              duration: 2, // Duration of one cycle
              repeat: Infinity, // Repeat indefinitely
              repeatType: "reverse", // Reverse direction for smooth up-and-down
              ease: "easeInOut", // Smooth easing for natural motion
            }}
          >
            <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full border-4 border-purple-300 flex items-center justify-center overflow-hidden">
              <img
                src="/1130-removebg.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
   </Element>
  );
};

export default HeroSection;