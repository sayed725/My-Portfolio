import { FaDownload, FaInstagram, FaWhatsapp, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import { Element, Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";

// Animation variants for text elements
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

// Animation variants for social media icons
const iconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.3, ease: "easeOut" },
  }),
};

// Animation variants for buttons
const buttonVariants = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95 },
};

// Animation variants for profile image
const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  float: {
    y: [-5, 25],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

const HeroSection = () => {
  return (
    <Element name="banner">
      <section className="py-6 sm:py-8 lg:py-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Section */}
          <div className="w-11/12 mx-auto lg:w-1/2 text-center lg:text-left">
            <motion.p
              className="text-gray-600 text-lg tracking-wider sm:text-xl"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              Hey,<span className="text-purple-700"> I’m </span> 👋
            </motion.p>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide mt-4 sm:mt-6 lg:mt-8"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              <span className="text-purple-600">Abu Sayed Khan</span>
            </motion.h1>
            <motion.h1
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-4 sm:mt-4 lg:mt-4"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              A
              <span style={{ fontWeight: "semi-bold" }}>
                <Typewriter
                  words={[" Web Developer", " Front-end Developer", " MERN Stack Developer", " React.Js Developer"]}
                  loop={Infinity}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </motion.h1>
            <motion.p
              className="text-gray-800 mt-4 text-base tracking-wider sm:text-lg text-center lg:text-start max-w-md mx-auto lg:mx-0"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              Crafting seamless user experiences with clean, responsive, and interactive web designs. Passionate about turning ideas into functional and visually appealing websites.
            </motion.p>

            <div className="flex gap-4 sm:gap-8 py-6 justify-center lg:justify-start">
              {[
                { href: "https://www.linkedin.com/in/abu-sayed-khan-922801317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", Icon: FaLinkedin },
                { href: "https://github.com/sayed725", Icon: FaGithub },
                { href: "https://www.facebook.com/abu.ssayed.khan.2024", Icon: FaFacebook },
                { href: "https://www.instagram.com/abu.ssayed.khan.2024", Icon: FaInstagram },
                { href: "https://wa.me/+8801627142598", Icon: FaWhatsapp },
              ].map(({ href, Icon }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  className="text-black hover:text-blue-500 text-4xl"
                  variants={iconVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>

            <div className="mt-5 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <motion.a
                href="https://drive.google.com/file/d/17pitcf77uvbny3y3idpI2pZWUwqmVUJP/view?usp=sharing"
                target="_blank"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <button className="bg-purple-600 text-white btn rounded-md font-semibold hover:bg-purple-700 flex items-center justify-center gap-2 w-full sm:w-auto">
                  Download Resume <FaDownload />
                </button>
              </motion.a>
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Link to="projects" smooth={true} duration={700}>
                  <button className="border border-gray-800 btn rounded-md font-semibold hover:bg-gray-800 hover:text-white w-full sm:w-auto">
                    Browse Projects
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate={["visible", "float"]}
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