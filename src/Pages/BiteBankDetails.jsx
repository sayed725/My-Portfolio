import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";

const BiteBankDetails = () => {
   useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  const technologies = [
    "React",
    "TailwindCSS",
    "DaisyUI",
    "React Hook Form",
    "React Simple Star Rating",
    "Firebase Authentication",
    "MongoDB",
    "Express.js",
    "CORS",
  ];

  return (
    <div className="min-h-screen w-11/12 mx-auto bg-white text-gray-900 flex flex-col gap-10 py-10">
      <div className="relative flex justify-center overflow-hidden">
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

      <div>
        {/* Main Content */}
        <div className="mx-auto py-6 px-2">
          <h1 className="text-5xl font-bold">Bite Bank</h1>
          <p className="mt-5">
            {" "}
            Welcome to this project.This is a user-friendly food sharing website
            where there is some CRUD (adding food,getting food, update food and
            deleting food) operations on several places. Besides that, users can
            also request for available food and manage requested foods.
          </p>
          {/* Technologies Used */}
          <section className="mt-6">
            <h2 className="text-3xl mb-2 font-bold">Technologies Used</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-purple-500 text-white px-3 py-1 rounded-md text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Challenges Faced */}
          <section className="mt-6">
            <h1 className="text-3xl font-bold  mb-6">Key Features</h1>

            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                There is a beautiful slides showcasing images of some top foods
                on Banner.
              </li>
              <li>User can add food from add food section .</li>
              <li>
                On clicking the View Details Button navigated the logged-in user
                to the Food Detail page where they can explore more about their
                Food Info.
              </li>
              <li>
                On Food Details section there is a Request button where user can
                request their food to prepare.
              </li>
              <li>
                On Manage my food section user can view food they added & they
                can edit, delete also.
              </li>
              <li>
                On My Request section user can view their requested food and
                some food details.
              </li>
              <li>
                Their is a search functionality on available food page where
                user can search for by foods title.
              </li>
              <li>
                Their is a sort and layout toggle button in available food
                section where user can sort and toggle layout also.
              </li>
            </ul>
          </section>

          {/* Improvements Needed */}
          <section className="mt-6">
            <h2 className="text-2xl font-semibold">Improvements Needed</h2>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Improve detail page UI for a more interactive experience.</li>
              <li>Add multi-language support for a more diverse user base.</li>
              <li>
                Optimize loading times for data-heavy sections of the app.
              </li>
            </ul>
          </section>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <a
              href="https://a-11-bite-bank.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600"
            >
              Live Preview
            </a>
            <a
              href="https://github.com/sayed725/BiteBank-Client"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-700"
            >
              <FaGithub size={18} /> GitHub Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiteBankDetails;
