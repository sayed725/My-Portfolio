
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
      <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-purple-600 font-semibold"
                : "hover:text-purple-600"
            }
          >
            Home
          </NavLink>
      </li>
      <li>
      <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive
                ? "text-purple-600 font-semibold"
                : "hover:text-purple-600"
            }
          >
            Skills
          </NavLink>
      </li>
      <li>
      <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "text-purple-600 font-semibold"
                : "hover:text-purple-600"
            }
          >
            Projects
          </NavLink>
      </li>
      <li>
      <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-purple-600 font-semibold"
                : "hover:text-purple-600"
            }
          >
            About
          </NavLink>
      </li>
      <li>
      <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-purple-600 font-semibold"
                : "hover:text-purple-600"
            }
          >
            Contact
          </NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-10 shadow-sm">
      <div className="navbar bg-white max-w-7xl mx-auto">
        <div className="navbar-start gap-2">
          <div className="dropdown border-2 lg:border-none border-purple-600 rounded-md">
            <div tabIndex={0} role="button" className="btn-md btn sm:btn btn-ghost lg:hidden">
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
              className="flex gap-5 flex-col justify-center items-center px-1  dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
             {links}
            </ul>
          </div>
          <div className="sm:text-3xl font-bold text-gray-900">
          Abu Sayed Khan<span className="text-purple-600">.</span>
        </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-5 px-1 text-semibold">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to='/contact' className="bg-purple-600 text-white btn rounded-lg font-semibold hover:bg-purple-700">Hire Me</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
