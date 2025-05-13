import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/" className="text-purple-600 hover:text-purple-600">
          Home
        </NavLink>
      </li>
      <li>
        <Link
          to="about"
          smooth={true}
          duration={700}
          className="hover:text-purple-700"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="skills"
          smooth={true}
          duration={700}
          className="hover:text-purple-700"
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          to="projects"
          smooth={true}
          duration={700}
          className="hover:text-purple-700"
        >
          Projects
        </Link>
      </li>

      <li>
        <Link
          to="contact"
          smooth={true}
          duration={700}
          className="hover:text-purple-700"
        >
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-10 shadow-sm">
      <div className="navbar px-2 lg:px-0 bg-white max-w-7xl mx-auto">
        <div className="navbar-start w-full  gap-2">
          <div className="dropdown border-2 lg:border-none border-purple-600 rounded-md">
            <div
              tabIndex={0}
              role="button"
              className="btn-sm btn sm:btn btn-ghost  lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                  className="text-xl text-purple-600"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="flex gap-5 flex-col justify-center items-center px-1  dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-[150px] p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="text-xl sm:text-4xl font-bold text-purple-700">
            &lt;<span className="text-gray-900">Sayed</span>/&gt;
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-5 px-1 text-semibold">{links}</ul>
        </div>
        <div className="navbar-end lg:w-full">
          <Link
            to="contact"
            smooth={true}
            duration={700}
            className="bg-purple-600 text-white btn btn-sm sm:btn-md rounded-lg font-semibold hover:bg-purple-700"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
