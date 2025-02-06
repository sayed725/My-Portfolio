import { FaGithub } from "react-icons/fa";

const GreenDetails = () => {

    const technologies = [
        "React", "TailwindCSS", "DaisyUI", "Swiper.js",
        "React Hook Form",,
        "Firebase Authentication"
      ];

    return (
        <div className="min-h-screen bg-white text-gray-900 flex flex-col gap-10 py-10">
        <div className="relative flex justify-center overflow-hidden">
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
  
  
       <div>
      
         
       
  
        {/* Main Content */}
        <div className="mx-auto py-6 px-2">
        <h1 className="text-5xl font-bold">GREEN EDVENTURES</h1>
        <p className="mt-5"> Welcome to this project.Discover the thrill of eco-friendly travel with Eco-Edventure Experiences. This page is a React-based application where users can explore specific types of eco-friendly travel adventures like Forest Expeditions, Mangrove Forest Expeditions.This application provide detailed information on various eco-adventure options, allowing users to browse, learn more about each experience, and consult experts if they’re interested.
</p>
          {/* Technologies Used */}
          <section className="mt-6">
            <h2 className="text-3xl mb-2 font-bold">Technologies Used</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {technologies.map((tech, index) => (
                <span key={index} className="bg-purple-500 text-white px-3 py-1 rounded-md text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </section>
  
          {/* Challenges Faced */}
          <section className="mt-6">
          <h1 className="text-3xl font-bold  mb-6">Key Features</h1>

          <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>There is a beautiful slides showcasing images of eco-adventures on Banner.</li>
              <li>On clicking the Explore Now Button navigated the logged-in user to the Adventure Detail page where they can explore more about their Tour Details.</li>
              <li>On Explore Tour Details section there is a “Talk with Expert” Button where user connect with us using google meet or phone.</li>
              <li>On Clicking on My Profile the user will see this page and their information where clicking update profile button user can update their information.</li>
              <li>Clicking Forget password on login section user can reset their password.</li>
            </ul>








          </section>
  
         
         
  
          {/* Improvements Needed */}
          <section className="mt-6">
            <h2 className="text-2xl font-semibold">Improvements Needed</h2>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Improve detail page UI for a more interactive experience.</li>
              <li>Add multi-language support for a more diverse user base.</li>
              <li>Optimize loading times for data-heavy sections of the app.</li>
            </ul>
          </section>
  
          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <a  href="https://assingment-10-5294b.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
            
             className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600">
              Live Preview
            </a>
            <a   href="https://github.com/sayed725/GREEN-EDVENTURES"
                    target="_blank"
                    rel="noopener noreferrer"
            className="bg-gray-900 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-700">
              <FaGithub size={18} /> GitHub Link
            </a>
          </div>
        </div>
       </div>
  
      </div>
    );
};

export default GreenDetails;