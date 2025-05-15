import { motion, AnimatePresence } from "framer-motion";
import { Links, NavLink, useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import { useState } from "react";

// Animation variants for navbar links
const linkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.3, ease: "easeOut" },
  }),
};

// Animation variants for dropdown
const dropdownVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.2 } },
};

// Animation for buttons
const buttonVariants = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95 },
};

// Hamburger icon animation variants
const hamburgerVariants = {
  closed: {
    d: [
      "M4 6h16",
      "M4 12h16",
      "M4 18h16",
    ],
  },
  open: {
    d: [
      "M6 6L18 18",
      "M12 12h0",
      "M6 18L18 6",
    ],
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const links = (
    <>
      {location.pathname === "/" ? (
        <>
          {["Home", "About", "Skills", "Projects", "Contact"].map((text, i) => (
            <motion.li key={text} variants={linkVariants} custom={i}>
              {text === "Home" ? (
                <NavLink
                  to="/"
                  className="text-purple-600 hover:text-purple-600"
                >
                  {text}
                </NavLink>
              ) : (
                <Link
                  to={text.toLowerCase()}
                  smooth={true}
                  duration={700}
                  className="hover:text-purple-700"
                  onClick={() => setIsOpen(false)}
                >
                  {text}
                </Link>
              )}
            </motion.li>
          ))}
        </>
      ) : (
        <>
          {["Home", "Projects"].map((text, i) => (
            <motion.li key={text} variants={linkVariants} custom={i}>
              <NavLink
                to={text === "Home" ? "/" : "/projects"}
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-600 font-semibold"
                    : "hover:text-purple-600"
                }
                onClick={() => setIsOpen(false)}
              >
                {text}
              </NavLink>
            </motion.li>
          ))}
        </>
      )}
    </>
  );

  return (
    <motion.div
      className="sticky top-0 z-20 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="navbar px-2 lg:px-0 bg-white max-w-7xl mx-auto">
        <div className="navbar-start w-full gap-2">
          <div className="dropdown border-2 lg:border-none border-purple-600 rounded-md">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost rounded-md lg:hidden"
              onClick={handleToggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <motion.g
                  variants={hamburgerVariants}
                  animate={isOpen ? "open" : "closed"}
                >
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="text-xl text-purple-600"
                    variants={{
                      closed: { d: "M4 6h16" },
                      open: { d: "M6 6L18 18" },
                    }}
                  />
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="text-xl text-purple-600"
                    variants={{
                      closed: { d: "M4 12h16", opacity: 1 },
                      open: { d: "M12 12h0", opacity: 0 },
                    }}
                  />
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="text-xl text-purple-600"
                    variants={{
                      closed: { d: "M4 18h16" },
                      open: { d: "M6 18L18 6" },
                    }}
                  />
                </motion.g>
              </svg>
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.ul
                  tabIndex={0}
                  className="flex gap-5 flex-col justify-center items-center px-1 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-[150px] p-2 shadow"
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {links}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
          <NavLink
            to="/"
            className="text-xl sm:text-4xl font-bold text-purple-700"
            onClick={() => setIsOpen(false)}
          >
            &lt;<span className="text-gray-900">Sayed</span>/&gt;
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <motion.ul
            className="flex gap-5 px-1 text-semibold"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {links}
          </motion.ul>
        </div>
        <div className="navbar-end lg:w-full">
          {location.pathname === "/" ? (
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Link
                to="contact"
                smooth={true}
                duration={700}
                className="bg-purple-600 text-white btn rounded-md font-semibold hover:bg-purple-700"
                onClick={() => setIsOpen(false)}
              >
                Hire Me
              </Link>
            </motion.div>
          ) : (
            <motion.a
              href="https://drive.google.com/file/d/17pitcf77uvbny3y3idpI2pZWUwqmVUJP/view?usp=sharing"
              target="_blank"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <button className="bg-purple-600 text-white btn rounded-md font-semibold hover:bg-purple-700 flex items-center justify-center gap-2 w-full sm:w-auto">
                Download Resume
              </button>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;